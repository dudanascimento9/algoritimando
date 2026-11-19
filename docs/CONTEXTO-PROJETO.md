# Algoritimando: contexto para uma nova sessão

Cole este arquivo no começo de uma sessão nova, ou peça para a sessão ler `docs/CONTEXTO-PROJETO.md`, antes de pedir qualquer mudança. Atualizado em 19/11/2026.

## O projeto

- **O que é:** jogo educativo que ensina algoritmos a crianças de 8 a 10 anos (3º ao 5º ano). Moradores de uma cidade pedem ajuda com tarefas do dia a dia. A criança arrasta cartas de passos para espaços numerados, toca em **Verificar** e, se pedir **dica**, o **Robô-guia** explica o primeiro erro.
- **Repositório:** `helder41/algoritimando-1`, branch principal `main`.
- **Site (GitHub Pages):** https://helder41.github.io/algoritimando-1/. Atualiza sozinho 1 a 2 minutos depois de cada merge no `main`. Para ver a versão nova: Ctrl+F5 ou aba anônima.
- **Tecnologia:** HTML, CSS e JS puros, sem build, servidor nem framework. Abre com dois cliques no `index.html` e funciona **sem internet**: as fontes estão em `fontes/` e nada é buscado fora do projeto.
- **Testes:**
  - `node js/motor.js` roda os 9 testes do motor;
  - as telas são conferidas com Playwright e Chromium, em scripts temporários que não ficam no repositório;
  - tamanhos usados: PC 1366×768 e 1920×1080, celular 390×844 e celular deitado 844×390.

## Decisões de arquitetura (não mudar sem combinar)

1. A resposta certa **não é uma ordem fixa**. Cada passo declara `dependeDe`, e a validação é feita sobre esse grafo, então passos independentes podem vir em qualquer ordem.
2. **Verificação no fim, não erro imediato** (pedido de professor). A criança monta tudo e toca em Verificar. Se estiver errado, o tabuleiro avisa sem dizer qual passo. O Robô-guia só explica quando ela pede dica, e só o **primeiro** erro, terminando na **consequência**, sem entregar a ordem.
3. O jogo **nunca bloqueia** o movimento das cartas.
4. As explicações vêm das regras de dependência (campo `explicacao` por dependência).
5. O arrasto usa **Pointer Events**, nunca drag-and-drop nativo do HTML5.
6. Há **um formato só** de dados para os chamados do jogo e os do professor (`.json`).
7. **Tudo responsivo** (PC e celular) em toda entrega.
8. **Sem emojis** no jogo. Textos em português.
9. **O Robô-guia guia, não é ensinado.** Ele foi feito para ajudar a criança; quem é ajudado são os moradores. Nunca escrever "ensine o robô" ou "ensinando o Robô-guia". A exceção é o nível 4 do sanduíche, em que um *computador* (outro personagem) precisa de instruções claras.

## Arquivos principais

| Arquivo | Papel |
|---|---|
| `index.html`, `style.css` | telas: menu, abertura, crachá, mapa, fase, lição, promoção, final e modais |
| `js/motor.js` | formato dos dados (documentado no topo) e validação pelo grafo de dependências |
| `js/situacoes.js` | os 8 chamados do jogo |
| `js/em-progresso.js` | protótipo "Plantar uma semente" (seção "Em progresso", senha `6234`, botão escondido) |
| `js/jogo.js` | a partida: tabuleiro, Verificar, dica, estrelas e a cena em tela cheia do nível |
| `js/app.js` | menu, abertura, crachá, mapa (`LUGARES`), progresso e promoções, sanduíche obrigatório, agente secreto, tela cheia das configurações, tela final |
| `js/montagem.js` | imagem que se monta ao lado do tabuleiro: `pilha` (sanduíche), `cena` (mochila), `grade` (robô andando numa grade, só código), `estado` (bancada com objetos que mudam: limonada, dentes, mãos; peças em `img/pecas/`) ou `tirinha` (sem uso) |
| `js/conclusao.js` | tela de lição (sem imagem, abre direto no texto) |
| `js/pwa.js`, `sw.js`, `manifest.webmanifest`, `img/icones/` | modo instalável: registra o `sw.js` (gerado por `ferramentas/gerar-sw.js`), que guarda os 235 arquivos no aparelho; botão "Instalar o jogo" nas Configurações (no iPhone, a explicação). Só pelo site; com dois cliques no `index.html` nada muda |
| `js/album.js` | "Meu álbum": uma figurinha (a imagem da lição) por nível concluído |
| `js/final.js` | animação final (`fim1` a `fim6` + álbum completo) e certificado para imprimir |
| `js/som.js`, `audio/musica-tema.mp3` | música, efeitos sintetizados (`acerto`, `erro`, `vitoria`, `clique`, `segredo`) e painel de configurações |
| `js/perfil.js`, `js/progresso.js` | perfil do agente e progresso por chamado (localStorage) |
| `editor.html`, `js/editor.js` | Área do professor: **desativada**, com o botão escondido no menu (ver "Pendências") |
| `fontes/` | Fredoka e Nunito em WOFF2, com as licenças OFL |
| `IMAGENS.md` | o que existe de imagem e onde aparece |
| `PROMPTS-MONTAGEM.md` | peças da montagem de Limonada, Dentes e Mãos (já geradas) |
| `PROMPTS-REVISAO.md`, `PROMPTS-FINAL.md` | prompts da revisão do professor (lições sem comparação, semáforo de duas luzes) e da animação final; já gerados |
| `PROMPTS-CARTAS.md`, `PROMPTS-LICOES.md`, `PROMPTS-CENAS.md`, `PROMPTS-PECAS.md`, `PROMPTS-FIM-DO-JOGO.md` | prompts das imagens; quase tudo já gerado, e eles ficam como registro |
| `docs/revisao-chamados-novos.md` | revisão pedagógica dos chamados novos |
| `docs/referencias/mapa-com-alfinetes.webp` | print do mapa, usado como referência para gerar imagens |

## Os 8 chamados

Todos têm **todas as imagens**: cartas, lições, ilustração do cartão (`picN`), fundo do nível (`levelN`) e fundo da vitória (`winN`).

| Lugar (`area`) | Chamado | Níveis | Ideia | Cliente |
|---|---|---|---|---|
| Casa (`casa`) | Fazer um sanduíche | 5 | a ordem importa | menino de avental (`who1`, corpo `cliente0`) |
| Casa (`casa`) | Lavar as mãos | 4 | repetição | menino de avental |
| Fábrica (`fabrica`) | O robô e o cubo | 5 | passos escondidos | robô laranja (`who2`, `cliente1`) |
| Escola (`escola`) | Arrumar a mochila | 4 | instrução | menina de uniforme (`who3`, `cliente2`) |
| Jardim (`jardim`) | Ajudar as abelhas | 4 | algoritmo; começo, meio e fim | abelha (`who4`, `cliente3`) |
| Faixa (`faixa`) | Atravessar a rua | 3 | condição | menino de moletom amarelo (`who5`, `cliente4`) |
| Limonada (`limonada`) | Fazer uma limonada | 3 | caminhos paralelos | menino de moletom amarelo |
| Casa azul (`casa-azul`) | Escovar os dentes | 4 | o que abre, fecha | menina de pijama coral (`who6`, `cliente5`) |

- Os 4 chamados novos dão um **selo** cada um (`img/selos/`): Repetição, Condição, Ao mesmo tempo e Abre e fecha. Os selos aparecem no crachá e em "Minhas ideias".
- As ilustrações dos cartões (`pic1` a `pic8`) seguem o padrão de **mini-cena**: uma ilha de chão em três quartos, com o cliente e o Robô-guia.

## Como o jogo funciona hoje

- **Revisão do professor (18/11/2026):**
  - as lições não mostram mais "errado x certo", só cenas positivas; as antigas estão em `img/licoes/comparativas/`, guardadas para uso futuro;
  - na rua, a criança olha a **cor da luz** de um semáforo de pedestre com **duas luzes** (sem bonequinho);
  - o quadro lateral de montagem existe em Sanduíche (`pilha`), Mochila (`cena`) e Robô e o cubo (`grade`: o robô visto de cima anda, vira e pega o cubo seguindo as cartas, e para na primeira coisa que dá errado) e em Limonada, Escovar os dentes e Lavar as mãos (`estado`: a bancada muda a cada carta, e uma estrela marca o objeto da carta que veio antes da hora). Abelhas e Rua ficaram sem montagem;
  - **Meu álbum** na central: cada nível concluído cola a figurinha da lição; a tela da lição mostra "+1 figurinha" (chave `algoritimando-album`). A última página, **Figurinhas extras**, mostra as 10 lições antigas (`img/licoes/comparativas/`) e só abre depois da promoção a Agente (4 chamados);
  - **animação final** de 7 quadros antes da "Missão cumprida"; a tela final tem "Ver meu álbum", "Meu certificado" e "Rever a animação";
  - **certificado** em A4 deitado (botão Imprimir), com linhas em branco para Professor(a) e Escola.

- **Começo obrigatório pelo sanduíche:** até ele ser concluído, o mapa fica na sombra, com um círculo de luz sobre a Casa, e só o sanduíche abre. Perfis antigos, que já tinham outro chamado concluído, não são trancados.
- **Promoções:** Estagiário passa a **Agente** com 4 chamados quaisquer e a **Agente Sênior** com os 8. Não há separação entre originais e novos.
- **Tela final** ("Missão cumprida"): só depois dos 8, com todos os personagens, os selos e as estrelas.
- **Mapa:** marcadores são alfinetes com o rosto do cliente, posicionados em `LUGARES` (`js/app.js`) em % da imagem `img/story1.webp`. No celular o mapa rola e aparece o aviso "Arraste para ver a cidade" até a criança arrastar.
- **Abertura:** 4 quadros (`story1` a `story4`) com a cidade nova. Os quadros passam sozinhos a cada 5 s, com uma barrinha mostrando o tempo; o último espera o botão. A animação final faz o mesmo.
- **Nível:** botão "Tela cheia" mostra a cena do chamado inteira (no celular, um ícone no canto da cena).
- **Configurações:** botão "Configurações" no menu ou ícone de som no topo. Tem Música, Efeitos, **Tela cheia** (Fullscreen API; escondida no iPhone) e **Instalar o jogo** (só aparece pelo site, onde o navegador deixa instalar).
- **Modo instalável (PWA):** pelo site, o jogo pode ser instalado como aplicativo (ícone do Robô-guia em roxo) e, depois da primeira visita, abre sem internet.
- **Crachá** da tela "Quem é você, agente?": feito em HTML/CSS, com presilha, cargo, estrelas do cargo e código do agente.
- **Agente secreto** (só para devs e para quem o dono contar):
  - **Como abrir:** **10 toques seguidos e rápidos** (no máximo 0,6 s entre eles) na terceira estrela do crachá. A estrela não muda nada visualmente.
  - **O que acontece:** abre uma cena dourada com som de mistério e libera o 7º agente (avatar `"6"`), com moldura dourada.
  - **Onde fica guardado:** na chave `algoritimando-segredo`. Some com "Reiniciar o jogo" ou "Jogar tudo de novo", e o agente volta ao primeiro.
  - **Imagens:** `av6`, `agente-secreto`, `promo6`.
  - **Não divulgar o segredo** em textos para o público.
- **Atalho de dev** (só para devs; mesmo sigilo do agente secreto):
  - **Como usar:** no mapa da central, **15 toques na árvore do alto à esquerda** (à esquerda da Fábrica, perto de x 9%, y 38% da `story1`) e, logo depois, **15 toques na casa do canto inferior esquerdo** (perto de x 7%, y 73%).
  - **Regras:** mais de 2,5 s entre toques, ou um toque fora da área, zera a contagem. Toque num marcador também zera.
  - **O que acontece:** conclui os 8 chamados com 3 estrelas em todos os níveis e segue o caminho normal: promoção a Agente, a Sênior e animação final.
  - **Onde está:** `js/app.js`, bloco "atalho de desenvolvimento no mapa" (áreas em `ZONAS`). Nenhum sinal visual ou sonoro no jogo, e nada sobre ele em commits ou PRs.

## Padrões técnicos

- **Imagens:** todas em WebP.

  | Tipo | Tamanho |
  |---|---|
  | Cartas | 600×450, transparentes (fundo branco recortado) |
  | Lições | 1200×896 |
  | Fundos | 1600×893 |
  | `picN` | 1240×784 |
  | Retratos `who`/`av` | 300 ou 400 px, quadrados |
  | Corpo inteiro (`cliente`, `agente-*`) | 700 px de altura, transparentes |
  | Selos | 400×400 |

- **Nomes:** `img/passos/<chamado>-NN.webp` e `img/licoes/<chamado>-N.webp`.
- **Cache:** os `.js` e `.css` são carregados com `?v=AAAAMMDDHHMM`. **A cada mudança publicada, atualize esse número** no `index.html` e no `editor.html` e **rode `node ferramentas/gerar-sw.js`**, que refaz o `sw.js` com a versão e a lista de arquivos (sem isso, quem instalou o jogo continua com a versão antiga guardada). As imagens da abertura têm o próprio `?v=` em `js/app.js`, e o mapa tem o dele no `style.css`.
- **localStorage:**
  - `algoritimando-perfil`, `algoritimando-progresso`, `algoritimando-som`, `algoritimando-som-ajustes`, `algoritimando-montagem`, `algoritimando-segredo`, `algoritimando-album`;
  - também existem `algoritimando-em-progresso` (protótipos), `algoritimando-editor-rascunho` e as chaves `algoritimando-previa*` (prévia do editor);
  - para limpar tudo, no console: `localStorage.clear(); location.reload();`.
- **Seleção de texto e arrasto de imagens** estão desativados no jogo.

## Fluxo de trabalho

- Cada mudança vai num **pull request** para o `main`. O dono faz o merge pelo GitHub.
- **Atenção:** o dono costuma mergear rápido. Antes de enviar mais commits para um PR, confira se ele já foi mergeado. Se foi, abra um PR novo, porque commits enviados depois do merge ficam de fora. Isso já aconteceu com os PRs #28 e #33.
- **Imagens novas:** chegam em `.zip` ou anexadas. São convertidas para WebP, recortadas quando são cartas ou personagens, ajustadas ao tamanho e ligadas no código.
- **Geração de imagens:** o dono usa o **Agent do Google Flow**. Os prompts devem ser entregues **no formato de lote**:

  ```
  Batch: <nome do lote>. Generate these images, in this order:

  ### <arquivo.webp>
  <prompt inteiro>
  ```

  Diga também o que anexar como referência. Se ele estiver no celular, mande as referências em PNG pelo chat.
- **Dicas sobre o Flow:** não há proporção 3:5, então use 9:16. Edições ("só tire a alface") funcionam melhor anexando a própria imagem.
- **Projeto local:** deve ficar fora do OneDrive, que trava a pasta `.git`.
- **Respostas:** em português, curtas e fáceis de ler.

## Preferências do dono

- Não citar a Área do professor (o editor) em textos de divulgação: ela está desativada.
- Não inventar oficinas, pilotos, validações ou planos que não existem (por exemplo, "novas fases conforme o cotidiano das comunidades").
- O jogo passou por **um primeiro teste com uma turma** (nov/2026). Textos não devem exagerar: foi um teste só; impacto ainda é potencial.
- Mudanças visuais grandes no jogo só com pedido explícito.

## Bahia Tech Experience (BTX 2026)

- **O que é:** exposição na Vitrine Tecnológica da UNEB (Agência de Inovação), de 5 a 7 de dezembro de 2026, no Centro de Convenções de Salvador. O formulário de curadoria foi respondido nesta sessão, com respostas sobre necessidade, público, diferencial, tecnologia social, impacto e potencial na Bahia.
- **Já preparado e enviado ao dono, para subir no Drive** (não está no repositório):
  - QR code simples e cartaz A5 com QR code;
  - vídeo de demonstração de 27 s (nível 1 do sanduíche, com erro, dica e acerto), com cor marcada em BT.709;
  - 18 capturas de tela (9 telas, cada uma em PC e celular).
- **Brilho:** se o vídeo ou o jogo parecerem "estourados" num aparelho, é o realce automático de vídeo do aparelho (Samsung "Melhorador de vídeo", iPhone "Ver HDR Completo", Windows HDR). Os arquivos estão corretos.
- **Ainda possível:** texto para banner, roteiro de apresentação de 1 minuto, vídeo vertical para redes.

## Pendências

1. **Revisão do professor das imagens novas:** as 10 lições sem comparação, o semáforo de duas luzes e a animação final. O dono recebeu uma página de revisão (artifact privado) com códigos L1–L10, S1–S7 e F1–F6 para o professor responder.
2. **Ideias não feitas:** testes automáticos no repositório (Playwright + GitHub Actions), painel de desempenho para o professor.
3. **Branches antigos no GitHub** para o dono apagar (a sessão não tem permissão para isso): `claude/affectionate-thompson-0v00r7`, `claude/lucid-darwin-3u020f` e `claude/new-session-pxqx2k`.

## Decisões já tomadas

- **Escovar os dentes:** revisado pelo dono (nov/2026).
- **Sem chamados novos:** o jogo fica com os 8. O protótipo "Plantar uma semente" (`js/em-progresso.js`) continua escondido e não vira 9º chamado.
- **Área do professor:** fica de fora por enquanto.
- **Primeiro teste com uma turma:** aconteceu em novembro de 2026. As sugestões da revisão do professor (18/11) vieram dele e da turma.
