/* ============================================================
   final.js — a animação final e o certificado

   Depois da promoção a Agente Sênior (os 8 chamados), passa uma
   sequência de quadros como a da abertura, antes da "Missão
   cumprida". Cada quadro tem zoom lento; alguns têm confete e a
   música de vitória; um deles mostra o álbum completo, com as
   figurinhas chegando uma a uma.

   As imagens são img/fim1.webp a img/fim6.webp (PROMPTS-FINAL.md).
   Enquanto uma não existe, entra uma imagem do jogo no lugar.

   O certificado é uma folha para imprimir (A4 deitada): na
   impressão, só ele aparece (ver @media print no style.css).

   Uso: Final.tocar(perfil, aoTerminar)
        Final.certificado(perfil)
   ============================================================ */

'use strict';

(function () {

  const tela = document.querySelector('#fim');
  if (!tela) {
    window.Final = { tocar(_, fim) { if (fim) fim(); }, certificado() {} };
    return;
  }

  const $ = s => document.querySelector(s);
  const arte    = $('#fimArte');
  const album   = $('#fimAlbum');
  const confete = $('#fimConfete');
  const texto   = $('#fimTexto');
  const dots    = $('#fimDots');
  const proximo = $('#bFimNext');

  // ?v= faz o navegador buscar a imagem nova quando ela muda
  const V = '?v=202611190100';

  /* Os quadros. "reserva": imagem do jogo usada enquanto a do
     quadro não existe. "festa": confete e música de vitória. */
  const QUADROS = [
    { img: 'img/fim1.webp', reserva: 'img/story4.webp',
      texto: () => 'Um dia, o mapa amanheceu diferente: todos os chamados tinham sido atendidos.' },
    { img: 'img/fim2.webp', reserva: 'img/win7.webp', festa: true,
      texto: () => 'Os moradores prepararam uma surpresa na praça. Todos vieram agradecer!' },
    { album: true,
      texto: n => `Seu álbum está completo: ${n} figurinhas, uma para cada nível!` },
    { img: 'img/fim3.webp', reserva: 'img/story1.webp',
      texto: () => 'Cada chamado ensinou uma ideia: ordem, passos escondidos, repetição, condição, ao mesmo tempo, abre e fecha.' },
    { img: 'img/fim4.webp', reserva: 'img/story2.webp',
      texto: () => 'Agora você sabe montar um passo a passo para cada tarefa. O Robô-guia ficou orgulhoso!' },
    { img: 'img/fim5.webp', reserva: 'img/story3.webp', festa: true,
      texto: (_, nome) => `${nome}, você agora é Agente Sênior de Algoritimando!` },
    { img: 'img/fim6.webp', reserva: 'img/story1.webp',
      texto: () => 'Os algoritmos estão em todo lugar. Que passo a passo você vai criar amanhã?' },
  ];

  let atual = 0;
  let nome = 'Agente';
  let aoTerminar = null;
  // os quadros passam sozinhos, devagar; o último espera o botão
  let relogio = null;
  const tempoDe = (texto, q) => Math.max(q.album ? 9000 : 7500, texto.length * 95);
  function pararRelogio() { clearTimeout(relogio); relogio = null; }

  /* ------------- as peças de cada quadro ------------- */

  function mostrarArte(q) {
    // a imagem do quadro, ou a reserva enquanto ela não existe
    const usar = src => {
      tela.style.setProperty('--arte', `url(${src})`);
      // reinicia o zoom lento
      arte.classList.remove('zoom');
      void arte.offsetWidth;
      arte.classList.add('zoom');
    };
    const sonda = new Image();
    sonda.onload = () => { if (QUADROS[atual] === q) usar(q.img + V); };
    sonda.onerror = () => { if (QUADROS[atual] === q) usar(q.reserva); };
    sonda.src = q.img + V;
  }

  // todas as imagens de lição, na ordem dos chamados
  function figurinhas() {
    const lista = [];
    SITUACOES.forEach(s => s.fases.forEach(f => {
      lista.push({ src: (f.licao && f.licao.imagem) || s.cena, reserva: s.cena, cor: s.cor });
    }));
    return lista;
  }

  function mostrarAlbum() {
    const lista = figurinhas();
    album.textContent = '';
    lista.forEach((f, i) => {
      const el = document.createElement('span');
      el.className = 'fim-figurinha';
      el.style.setProperty('--atraso', `${0.25 + i * 0.07}s`);
      el.style.setProperty('--giro', `${[-3, 2, -1.5, 3, -2, 1][i % 6]}deg`);
      if (f.cor) el.style.setProperty('--c', f.cor);
      const sonda = new Image();
      sonda.onload = () => { el.style.backgroundImage = `url("${f.src}")`; };
      sonda.onerror = () => { if (f.reserva) el.style.backgroundImage = `url("${f.reserva}")`; };
      sonda.src = f.src;
      album.append(el);
    });
    tela.style.setProperty('--arte', 'none');
    return lista.length;
  }

  function soltarConfete() {
    confete.textContent = '';
    const cores = ['#f2b705', '#e2543a', '#4fae6b', '#5b8fd6', '#8a63c7', '#f08ab0'];
    for (let i = 0; i < 40; i++) {
      const c = document.createElement('i');
      c.style.left = `${Math.random() * 100}%`;
      c.style.background = cores[i % cores.length];
      c.style.animationDelay = `${Math.random() * 1.8}s`;
      c.style.animationDuration = `${2.6 + Math.random() * 2}s`;
      c.style.setProperty('--giro', `${Math.random() * 720 - 360}deg`);
      c.style.setProperty('--lado', `${Math.random() * 16 - 8}cqw`);
      confete.append(c);
    }
  }

  function quadro(i) {
    atual = i;
    pararRelogio();
    const q = QUADROS[i];
    album.hidden = !q.album;
    arte.hidden = !!q.album;
    let n = 0;
    if (q.album) n = mostrarAlbum(); else mostrarArte(q);
    texto.textContent = q.texto(n, nome);
    confete.textContent = '';
    if (q.festa) {
      soltarConfete();
      Som.vitoria();
    }
    dots.innerHTML = QUADROS.map((_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('');
    proximo.textContent = i === QUADROS.length - 1 ? 'Concluir' : 'Avançar ›';
    if (i < QUADROS.length - 1) {
      relogio = setTimeout(() => {
        if (tela.classList.contains('on') && atual === i) quadro(i + 1);
      }, tempoDe(texto.textContent, q));
    }
  }

  function terminar() {
    pararRelogio();
    confete.textContent = '';
    const fim = aoTerminar;
    aoTerminar = null;
    if (fim) fim();
  }

  proximo.onclick = () => (atual < QUADROS.length - 1 ? quadro(atual + 1) : terminar());
  $('#bFimPular').onclick = terminar;

  function tocar(perfil, fim) {
    nome = (perfil && perfil.nome) || 'Agente';
    aoTerminar = fim || null;
    window.irPara('fim');
    quadro(0);
  }

  /* ------------- certificado ------------- */

  // a ideia que cada chamado ensina (a mesma da tabela do projeto)
  const IDEIAS = {
    sanduiche: 'A ordem importa',
    maos: 'Repetição',
    robo: 'Passos escondidos',
    mochila: 'Instrução',
    abelhas: 'Começo, meio e fim',
    rua: 'Condição',
    limonada: 'Ao mesmo tempo',
    dentes: 'O que abre, fecha',
  };
  const CORPO = ['menina', 'menino', 'afro-menina', 'afro-menino', 'latina', 'latino', 'secreto'];

  function codigoDo(perfil) {
    // o mesmo código do crachá (app.js)
    let n = 7 + Number(perfil.avatar);
    for (const ch of perfil.nome || 'Agente') n = (n * 31 + ch.charCodeAt(0)) % 10000;
    return 'AG-' + String(n).padStart(4, '0');
  }

  function certificado(perfil) {
    const nomeAgente = (perfil && perfil.nome) || 'Agente';
    $('#certNome').textContent = nomeAgente;
    $('#certTexto').textContent =
      `atendeu os ${SITUACOES.length} chamados da cidade de Algoritimando, ajudando os moradores passo a passo, e aprendeu estas ideias:`;
    const lista = $('#certIdeias');
    lista.textContent = '';
    SITUACOES.forEach(s => {
      const li = document.createElement('li');
      if (s.cor) li.style.setProperty('--c', s.cor);
      const b = document.createElement('b');
      b.textContent = IDEIAS[s.id] || s.titulo;
      const small = document.createElement('small');
      small.textContent = s.titulo;
      li.append(b, small);
      lista.append(li);
    });
    $('#certEstrelas').textContent = Progresso.total();
    $('#certCodigo').textContent = codigoDo(perfil);
    $('#certData').textContent = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    const rosto = $('#certRosto');
    rosto.onerror = () => { rosto.onerror = null; rosto.src = `img/av${perfil.avatar}.webp`; };
    rosto.src = `img/agente-${CORPO[+perfil.avatar] || 'menina'}.webp`;
    $('#certificado').classList.add('on');
  }
  $('#bCertFechar').onclick = () => $('#certificado').classList.remove('on');
  $('#bCertImprimir').onclick = () => window.print();

  window.Final = { tocar, certificado };
})();
