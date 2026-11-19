/* ============================================================
   montagem.js — a imagem que se monta ao lado do tabuleiro.

   Cada carta colocada aparece também como IMAGEM, e na ordem em
   que está nos espaços — inclusive a errada. A criança não lê só
   "o queijo ficou de fora": ela VÊ o queijo por cima do pão
   fechado. O jogo continua sem bloquear nada; a montagem só
   mostra a consequência da ordem que está na tela.

   Três modos (campo "montagem" da situação — ver motor.js):
   - "pilha":   as peças ("peca" de cada passo) empilham de baixo
                para cima na ordem dos espaços. Passos sem peça
                (pegar, abrir…) não aparecem.
   - "cena":    cada peça tem um lugar fixo numa cena (todas do
                mesmo tamanho, por cima de "montagemBase") e é
                desenhada por cima das anteriores, na ordem dos
                espaços: fechar o estojo antes de guardar o lápis
                deixa o lápis por fora. No erro, a peça que ficou de
                fora (o pré-requisito) vai para a frente, marcada.
   - "tirinha": um quadrinho por espaço; no primeiro erro aquele
                quadrinho fica marcado e os seguintes ficam
                apagados — a história "trava" ali.
   - "grade":   o robô do chamado visto de cima, numa grade da
                fábrica. Ele faz de verdade o que as cartas mandam, na
                ordem dos espaços: vira, anda, abre e fecha a garra.
                Na primeira coisa que dá errado (bate na parede, fecha
                a garra no vazio, solta o cubo no chão), ele para ali.
                O cenário sai dos passos da fase (ligar, virar,
                plataforma longe), sem nada a configurar.

   No PC a montagem fica abaixo da bandeja. No celular ela é
   OPCIONAL e começa desligada: o botão "Montagem" do rodapé troca
   a ilustração da cena por ela, sem ocupar mais espaço na tela.

   Uso (pelo jogo.js):
     Montagem.preparar(situacao, fase)            ao montar a fase
     Montagem.atualizar(sequencia, erro, completa) a cada movimento
   ============================================================ */

'use strict';

(function () {

  const tela  = document.querySelector('#fase');
  const caixa = tela && tela.querySelector('.montagem');
  const botao = tela && tela.querySelector('#btn-montagem');
  if (!caixa) {
    window.Montagem = { preparar() {}, atualizar() {} };
    return;
  }

  const CHAVE = (window.ALGORITIMANDO_PREVIA ? 'algoritimando-previa' : 'algoritimando') + '-montagem';

  let modo = null;     // 'pilha' | 'cena' | 'tirinha' | null
  let passos = {};     // id → passo da fase atual
  let base = '';       // cena: a imagem de fundo (montagemBase)
  // o que já estava na tela: só o que chegou agora anima (senão
  // tudo "cairia" de novo a cada carta movida)
  let jaMostrados = new Set();
  let agoraMostrados = new Set();

  function marcarNovo(el, chave) {
    agoraMostrados.add(chave);
    if (!jaMostrados.has(chave)) el.classList.add('nova');
  }

  /* ---------------- botão "Ver montagem" ----------------
     No celular a montagem troca de lugar com a cena e começa
     desligada. No PC o botão só aparece quando a montagem não cabe
     embaixo da bandeja (7 ou 8 cartas): aí ela abre ao lado, por
     cima da cena, e começa LIGADA — é nos níveis difíceis que ver a
     consequência mais ajuda. */

  // em pé ou deitado: nos dois a montagem troca de lugar por botão
  const celular = window.matchMedia('(max-aspect-ratio: 4/5), (max-height: 500px)');

  function lerPreferencia() {
    try {
      const salvo = localStorage.getItem(CHAVE);
      return salvo === null ? !celular.matches : salvo === '1';
    } catch { return !celular.matches; }
  }

  function mostrarNoCelular(sim) {
    tela.classList.toggle('ver-montagem', sim);
    botao.setAttribute('aria-pressed', String(sim));
    botao.textContent = sim ? 'Ver cena' : 'Ver montagem';
    try { localStorage.setItem(CHAVE, sim ? '1' : '0'); } catch { /* sem memória: tudo bem */ }
  }

  botao.addEventListener('click', () => mostrarNoCelular(!tela.classList.contains('ver-montagem')));

  /* No PC a montagem fica com a sobra de altura da área de jogo.
     Com muitas cartas na bandeja pode não sobrar quase nada: aí ela
     se esconde até abrir espaço, em vez de empurrar a tela. */
  if (window.ResizeObserver) {
    new ResizeObserver(() => {
      caixa.classList.toggle('apertada', caixa.getBoundingClientRect().height < 48);
    }).observe(caixa);

    /* Sobra altura embaixo da bandeja? A conta usa a bandeja CHEIA
       (ela tem as mesmas fileiras do tabuleiro), e não a altura de
       agora: senão, conforme as cartas saem da bandeja, a montagem
       ficaria pulando do lado para baixo no meio do nível. */
    const area = tela.querySelector('.area-jogo');
    const tabuleiro = tela.querySelector('.tabuleiro');
    const bandeja = tela.querySelector('.bandeja');
    const grade = tela.querySelector('.tabuleiro-grade');
    const molduraDe = el => {
      const c = getComputedStyle(el);
      return ['paddingTop', 'paddingBottom', 'borderTopWidth', 'borderBottomWidth']
        .reduce((soma, k) => soma + (parseFloat(c[k]) || 0), 0);
    };
    const medirSobra = () => {
      if (celular.matches || !area.clientHeight || !grade.offsetHeight) {
        tela.classList.remove('montagem-sem-espaco');
        return;
      }
      const vao = parseFloat(getComputedStyle(area).rowGap) || 0;
      const sobra = area.clientHeight - 2 * grade.offsetHeight
        - molduraDe(tabuleiro) - molduraDe(bandeja) - 2 * vao;
      tela.classList.toggle('montagem-sem-espaco', sobra < 48);
    };
    const olheiro = new ResizeObserver(medirSobra);
    [area, grade].forEach(el => olheiro.observe(el));
    celular.addEventListener('change', medirSobra);
  }

  /* ---------------- preparar a fase ---------------- */

  function preparar(situacao, fase) {
    modo = ['pilha', 'cena', 'tirinha', 'grade'].includes(situacao.montagem) ? situacao.montagem : null;
    // a fase pode trocar o fundo da cena (ex.: a mochila já aberta)
    base = fase.montagemBase || situacao.montagemBase || '';
    jaMostrados = new Set();
    passos = {};
    fase.passos.forEach(p => { passos[p.id] = p; });

    tela.classList.toggle('tem-montagem', !!modo);
    botao.hidden = !modo;
    caixa.hidden = !modo;
    caixa.dataset.modo = modo || '';
    // quantas peças a pilha terá no fim: decide o tamanho delas
    caixa.style.setProperty('--camadas', Math.max(2, fase.passos.filter(p => p.peca).length));
    if (!modo) return;

    mostrarNoCelular(lerPreferencia());
    atualizar(fase.passos.map(() => null), null, false);
  }

  /* ---------------- desenhar ---------------- */

  function atualizar(sequencia, erro, completa) {
    if (!modo) return;
    caixa.textContent = '';
    agoraMostrados = new Set();
    caixa.classList.toggle('com-erro', !!erro);
    caixa.classList.toggle('completa', !!completa && !erro);

    if (modo === 'pilha') desenharPilha(sequencia, erro);
    else if (modo === 'cena') desenharCena(sequencia, erro);
    else if (modo === 'grade') desenharGrade(sequencia);
    else desenharTirinha(sequencia, erro);
    jaMostrados = agoraMostrados;
  }

  function imagemDePeca(src, classe) {
    const img = document.createElement('img');
    img.className = classe;
    img.src = src;
    img.alt = '';
    img.onerror = () => img.remove();   // peça que não carrega some
    return img;
  }

  function desenharCena(sequencia, erro) {
    const cena = document.createElement('div');
    cena.className = 'cena';
    if (base) cena.append(imagemDePeca(base, 'cena-base'));

    const ids = sequencia.filter(id => id && passos[id] && passos[id].peca);
    // no erro, o que ficou de fora vem para a frente: senão uma peça
    // posta depois (a mochila fechada, a mesa limpa) poderia escondê-lo
    const deFora = erro && erro.preRequisito && ids.includes(erro.preRequisito.id)
      ? erro.preRequisito.id : null;
    const ordem = deFora ? ids.filter(id => id !== deFora).concat(deFora) : ids;

    ordem.forEach(id => {
      const img = imagemDePeca(passos[id].peca, 'cena-peca');
      marcarNovo(img, id);
      if (erro && (id === deFora || (erro.passo && erro.passo.id === id))) img.classList.add('peca-errada');
      cena.append(img);
    });
    caixa.append(cena);
  }

  function desenharPilha(sequencia, erro) {
    const pilha = document.createElement('div');
    pilha.className = 'pilha';
    const pecas = document.createElement('div');
    pecas.className = 'pilha-pecas';

    sequencia.forEach(id => {
      const passo = id && passos[id];
      if (!passo || !passo.peca) return;
      const img = document.createElement('img');
      img.className = 'peca';
      img.src = passo.peca;
      img.alt = '';
      img.onerror = () => img.remove();   // peça que não carrega some
      if (erro && erro.passo && erro.passo.id === id) img.classList.add('peca-errada');
      marcarNovo(img, id);
      pecas.append(img);
    });

    const prato = document.createElement('div');
    prato.className = 'pilha-prato';
    pilha.append(pecas, prato);

    if (!pecas.children.length) {
      const dica = document.createElement('p');
      dica.className = 'montagem-vazia';
      dica.textContent = 'Coloque as cartas e veja aqui o que acontece!';
      pilha.append(dica);
    }
    caixa.append(pilha);
  }

  function desenharTirinha(sequencia, erro) {
    const fila = document.createElement('ol');
    fila.className = 'tirinha';
    // até 4 quadrinhos por linha
    const colunas = sequencia.length <= 4 ? sequencia.length : Math.ceil(sequencia.length / 2);
    fila.style.setProperty('--quadros', colunas);
    const indiceErro = erro && Number.isInteger(erro.indice) ? erro.indice : -1;

    sequencia.forEach((id, i) => {
      const passo = id && passos[id];
      const quadro = document.createElement('li');
      quadro.className = 'quadro';

      const numero = document.createElement('span');
      numero.className = 'quadro-numero';
      numero.textContent = i + 1;

      if (!passo) {
        quadro.classList.add('vazio');
        quadro.append(numero);
        fila.append(quadro);
        return;
      }

      const figura = document.createElement('div');
      figura.className = 'quadro-figura';
      marcarNovo(figura, i + ':' + id);
      const src = passo.peca || passo.imagem;
      const semImagem = () => {
        figura.style.backgroundImage = '';
        figura.classList.add('sem-imagem');
        figura.textContent = passo.texto;
      };
      if (src) {
        figura.style.backgroundImage = `url("${src}")`;
        const sonda = new Image();
        sonda.onerror = semImagem;
        sonda.src = src;
      } else {
        semImagem();
      }

      if (i === indiceErro) quadro.classList.add('quadro-erro');
      else if (indiceErro >= 0 && i > indiceErro) quadro.classList.add('quadro-parado');

      quadro.append(figura, numero);
      fila.append(quadro);
    });

    caixa.append(fila);
  }

  /* ---------------- grade: o robô anda de verdade ---------------- */

  const COLS = 6, LINHAS = 4, LADO = 100;
  const DIRS = { L: [1, 0], S: [0, 1], O: [-1, 0], N: [0, -1] };
  const ANGULO = { L: 0, S: 90, O: 180, N: -90 };
  const NS = 'http://www.w3.org/2000/svg';

  function el(nome, attrs, pai) {
    const e = document.createElementNS(NS, nome);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (pai) pai.append(e);
    return e;
  }
  const centro = ([c, l]) => [c * LADO + LADO / 2, l * LADO + LADO / 2];
  const igual = (a, b) => a && b && a[0] === b[0] && a[1] === b[1];
  const somar = (p, d) => [p[0] + DIRS[d][0], p[1] + DIRS[d][1]];
  const dentro = p => p[0] >= 0 && p[0] < COLS && p[1] >= 0 && p[1] < LINHAS;
  const rumoPara = (de, para) => (de[1] === para[1] ? (para[0] > de[0] ? 'L' : 'O') : (para[1] > de[1] ? 'S' : 'N'));

  /* o cenário sai dos passos da fase */
  function cenario() {
    const tem = id => !!passos[id];
    const longe = tem('andar-plataforma');
    return {
      ligado: !tem('ligar'),
      robo: [1, 2],
      rumo: tem('virar-cubo') ? 'N' : 'L',
      cubo: [4, 2],
      // plataforma longe (níveis 4 e 5) ou logo depois do cubo
      plataforma: longe ? [3, 0] : [5, 2],
      garraAberta: !tem('abrir-garra'),
    };
  }

  /* roda as cartas, na ordem, até a primeira coisa dar errado */
  function simular(sequencia) {
    const e = cenario();
    e.caminho = [e.robo.slice()];
    e.segurando = false;
    e.problema = null;     // { tipo, ponto }
    e.pronto = false;
    e.parado = 0;          // cartas que o robô desligado ignorou

    const andar = alvo => {
      // anda até ficar de frente para o alvo; se não estiver indo
      // para ele, anda até a parede e bate
      for (;;) {
        const prox = somar(e.robo, e.rumo);
        if (igual(prox, alvo)) return true;
        const bloqueio = !dentro(prox) || (!e.segurando && igual(prox, e.cubo)) || igual(prox, e.plataforma);
        if (bloqueio) { e.problema = { tipo: 'bateu', ponto: prox }; return false; }
        e.robo = prox;
        e.caminho.push(prox.slice());
      }
    };
    const deFrenteParaCubo = () => !e.segurando && igual(somar(e.robo, e.rumo), e.cubo);

    for (const id of sequencia) {
      if (!id || e.problema || e.pronto) continue;
      if (!e.ligado && id !== 'ligar') { e.parado += 1; continue; }
      switch (id) {
        case 'ligar': e.ligado = true; break;
        case 'virar-cubo': e.rumo = rumoPara(e.robo, e.cubo); break;
        case 'virar-plataforma': e.rumo = rumoPara(e.robo, e.plataforma); break;
        case 'andar':
        case 'andar-cubo': andar(e.cubo); break;
        case 'andar-plataforma': andar(e.plataforma); break;
        case 'abrir-garra':
          if (e.segurando) { e.segurando = false; e.cubo = somar(e.robo, e.rumo); e.problema = { tipo: 'caiu', ponto: e.cubo }; }
          e.garraAberta = true;
          break;
        case 'pegar':
        case 'fechar-garra':
          if (!deFrenteParaCubo()) { e.garraAberta = false; e.problema = { tipo: 'vazio', ponto: somar(e.robo, e.rumo) }; break; }
          if (!e.garraAberta) { e.problema = { tipo: 'empurrou', ponto: e.cubo }; break; }
          e.garraAberta = false;
          e.segurando = true;
          break;
        case 'colocar':
          // "coloque na plataforma" esconde os passos: leva e solta
          if (!e.segurando) { e.problema = { tipo: 'vazio', ponto: somar(e.robo, e.rumo) }; break; }
          e.robo = [e.plataforma[0] - 1, e.plataforma[1]];
          e.caminho.push(e.robo.slice());
          e.rumo = 'L';
          e.segurando = false;
          e.cubo = e.plataforma.slice();
          e.pronto = true;
          break;
        case 'soltar':
          if (!e.segurando) { e.problema = { tipo: 'vazio', ponto: somar(e.robo, e.rumo) }; break; }
          e.segurando = false;
          e.garraAberta = true;
          e.cubo = somar(e.robo, e.rumo);
          if (igual(e.cubo, e.plataforma)) e.pronto = true;
          else e.problema = { tipo: 'caiu', ponto: e.cubo };
          break;
      }
    }
    return e;
  }

  function desenharGrade(sequencia) {
    const e = simular(sequencia);
    const svg = el('svg', {
      viewBox: `0 0 ${COLS * LADO} ${LINHAS * LADO}`, class: 'grade-svg', role: 'img',
      'aria-label': e.pronto ? 'O robô levou o cubo até a plataforma'
        : e.problema ? 'O robô parou: algo deu errado' : 'O robô seguindo as cartas',
    });
    // chão da fábrica
    el('rect', { x: 0, y: 0, width: COLS * LADO, height: LINHAS * LADO, rx: 18, class: 'g-chao' }, svg);
    for (let c = 0; c < COLS; c++) {
      for (let l = 0; l < LINHAS; l++) {
        el('rect', { x: c * LADO + 4, y: l * LADO + 4, width: LADO - 8, height: LADO - 8, rx: 10, class: 'g-piso' }, svg);
      }
    }
    // plataforma
    const [px, py] = centro(e.plataforma);
    el('circle', { cx: px, cy: py, r: 36, class: 'g-plataforma' + (e.pronto ? ' pronta' : '') }, svg);
    el('circle', { cx: px, cy: py, r: 22, class: 'g-plataforma-luz' }, svg);
    // o caminho feito
    if (e.caminho.length > 1) {
      el('polyline', { points: e.caminho.map(centro).map(p => p.join(',')).join(' '), class: 'g-caminho' }, svg);
    }
    // o cubo, quando não está na garra
    if (!e.segurando) {
      const [cx, cy] = centro(e.cubo);
      el('rect', { x: cx - 26, y: cy - 26, width: 52, height: 52, rx: 8, class: 'g-cubo' }, svg);
    }
    // o robô: corpo laranja, rodas, garra na frente; desligado fica cinza
    const [rx, ry] = centro(e.robo);
    const robo = el('g', { transform: `translate(${rx} ${ry}) rotate(${ANGULO[e.rumo]})`, class: 'g-robo' + (e.ligado ? '' : ' desligado') }, svg);
    el('rect', { x: -30, y: -38, width: 46, height: 14, rx: 6, class: 'g-roda' }, robo);
    el('rect', { x: -30, y: 24, width: 46, height: 14, rx: 6, class: 'g-roda' }, robo);
    el('rect', { x: -34, y: -28, width: 56, height: 56, rx: 14, class: 'g-corpo' }, robo);
    el('path', { d: 'M -14 -10 L 6 0 L -14 10 Z', class: 'g-seta' }, robo);
    const abre = e.garraAberta ? 16 : 7;
    el('path', { d: `M 22 ${-abre} q 18 0 22 ${abre * 0.5}`, class: 'g-garra' }, robo);
    el('path', { d: `M 22 ${abre} q 18 0 22 ${-abre * 0.5}`, class: 'g-garra' }, robo);
    if (e.segurando) el('rect', { x: 30, y: -16, width: 32, height: 32, rx: 5, class: 'g-cubo' }, robo);
    // desligado, ou ligado tarde demais: as cartas de antes não fizeram nada
    if (!e.ligado || e.parado) {
      const z = el('text', { x: rx + 18, y: ry - 34, class: 'g-zzz' }, svg);
      z.textContent = 'z z';
    }
    // onde deu errado: uma estrela de batida
    if (e.problema) {
      const [bx, by] = centro(e.problema.ponto).map((v, k) => (k === 0
        ? Math.max(30, Math.min(COLS * LADO - 30, v)) : Math.max(30, Math.min(LINHAS * LADO - 30, v))));
      const pontos = [];
      for (let k = 0; k < 16; k++) {
        const r = k % 2 ? 12 : 28, a = (Math.PI * k) / 8;
        pontos.push(`${bx + r * Math.cos(a)},${by + r * Math.sin(a)}`);
      }
      el('polygon', { points: pontos.join(' '), class: 'g-batida' }, svg);
    }
    const quadro = document.createElement('div');
    quadro.className = 'grade-quadro';
    marcarNovo(quadro, 'grade:' + sequencia.join('|'));
    quadro.append(svg);
    caixa.append(quadro);
  }

  window.Montagem = { preparar, atualizar };

})();
