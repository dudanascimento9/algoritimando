# algoritimando
Algoritimando é um jogo web educativo, feito com HTML, CSS e JavaScript puros e baseado em um protótipo do Figma. O jogador vira um agente da Central de chamados e ajuda um Robô-guia a atender 8 pedidos (Sanduíche, Robô e o cubo, Mochila, Abelhas, Lavar as mãos, Atravessar a rua, Limonada e Escovar os dentes), arrastando os passos para a ordem correta. Assim, aprende de forma lúdica a pensar em sequência, como um algoritmo. O jogo tem escolha de agente, sistema de estrelas e dicas, sons e uma tela de promoção ao final.

Para jogar, basta abrir o `index.html` no navegador (sem servidor, sem instalação).

## Como funciona

- Cada chamado tem de 3 a 5 níveis, e cada nível tem de 3 a 8 passos. Os passos ficam mais detalhados a cada nível, para mostrar as etapas que a gente pula quando explica algo para outra pessoa.
- A resposta não é uma ordem fixa: cada passo diz de quais outros ele depende (`dependeDe`). Passos que não dependem um do outro podem vir em qualquer ordem, e cada dependência tem a sua explicação para quando a criança erra.
- Na tela de lição, a criança vê uma imagem; o texto fica no botão "Para o professor".
- Montagem: ao lado do tabuleiro, a imagem se monta na ordem das cartas — em **pilha** (o sanduíche vai sendo empilhado; fora de ordem, o queijo aparece por cima do pão fechado), em **cena** (na mochila, cada peça entra no seu lugar; fechar o estojo antes deixa o lápis de fora) ou em **tirinha** (um quadrinho por passo; no primeiro erro a história trava). No celular ela é opcional, no botão "Ver a montagem", e ocupa o lugar da cena. No PC, nos níveis com 5 cartas ou mais ela não cabe embaixo da bandeja: abre ao lado, por cima da cena, e o botão "Ver montagem" troca entre as duas.
- A criança monta a sequência inteira e toca em **Verificar**. Se algo estiver fora de ordem, o tabuleiro avisa (sem dizer qual passo) e a montagem mostra a consequência. O Robô-guia só explica o problema quando a criança pede uma **dica** — e explica só o primeiro. A carta nunca é bloqueada: a criança move de novo.
- A central é um **mapa da cidade**: cada lugar é a casa de um cliente, e tocar nele mostra os chamados de lá (campo `area` de cada chamado). No celular o mapa rola para os lados, e um aviso "Arraste para ver a cidade" aparece até a criança arrastar a primeira vez.
- **O começo é o sanduíche.** Até ele ser concluído, o mapa fica na sombra e só a Casa pode ser tocada (e, nela, só o sanduíche). Ao concluí-lo, o Robô-guia avisa que a cidade foi liberada. Perfis que já tinham outro chamado concluído não são trancados.
- **Agente secreto.** Na tela "Quem é você, agente?", 10 toques seguidos e rápidos (no máximo 0,6 s entre eles) na terceira estrela do crachá abrem uma cena dourada com som de mistério e revelam um 7º agente, com moldura dourada (no crachá também). O segredo fica guardado no aparelho (chave `algoritimando-segredo`) até o progresso ser reiniciado ("Reiniciar o jogo" no menu ou "Jogar tudo de novo" na central): aí ele some e, se o agente secreto estava escolhido, volta o primeiro agente. Imagens: `img/av6.webp`, `img/agente-secreto.webp` e `img/promo6.webp` (a cena de promoção, montada a partir da `promo1`).
- **Configurações.** O painel de configurações (botão "Configurações" do menu e ícone de som no topo de todas as telas) também tem o botão **Tela cheia**, que coloca o jogo inteiro em tela cheia. Onde o navegador não deixa (iPhone), a opção não aparece.
- **Tela cheia.** No nível, o botão "Tela cheia" (no celular, o ícone no canto da cena) mostra a cena do chamado inteira, sem o tabuleiro por cima.
- Depois de cada nível aparece a lição, que liga a atividade ao conceito de algoritmo.
- Os quatro primeiros chamados levam a criança da "ordem importa" até o nome "algoritmo". Os chamados novos trazem uma ideia a mais cada um: **repetição** (Lavar as mãos), **condição** (Atravessar a rua), **caminhos paralelos** (Fazer uma limonada) e **o que abre, fecha** (Escovar os dentes). Depois do sanduíche, todos podem ser jogados em qualquer ordem.
- **Duas promoções.** Contam **quaisquer** chamados concluídos, sem separar originais e novos: metade deles (4 de 8) leva de Estagiário a **Agente**; os 8, a **Agente Sênior**. A central mostra uma barra só ("X de 8") e a frase do próximo objetivo, e os lugares que ainda têm chamado por fazer brilham no mapa.
- **Selos.** Cada chamado novo entrega, na lição do último nível, o selo da sua ideia. Os selos ficam no crachá e em "Minhas ideias" (na central), com a frase da ideia, uma carta do chamado como exemplo e uma pergunta para conversar.
- **Tela final.** "Missão cumprida" só aparece depois dos 8 chamados, com os personagens de todos, os selos e as estrelas.
- Estrelas por nível: 3 sem erro, 2 com um erro, 1 com mais (usar dica conta como erro). Cada nível dá +1 dica na primeira vez em que é concluído (rejogar não dá dica), e a dica coloca a carta certa no lugar.
- O arrasto usa Pointer Events (mouse, dedo e teclado).
- No celular em pé, a tela do nível rola e o rodapé fica fixo: Verificar, Dica, Ver montagem e Nível estão sempre à vista. Arrastando uma carta para perto do alto ou do rodapé, a tela rola sozinha. Tudo o que se toca tem pelo menos 44 px de altura.
- No celular deitado o nível tem um desenho próprio: sem a cena, com o tabuleiro à esquerda e a bandeja à direita, cartas deitadas (figura e legenda), o Robô-guia numa faixa e os botões numa linha embaixo. As outras telas usam o desenho do PC com botões e textos maiores.
- Esc fecha qualquer janela. As fontes (Fredoka e Nunito) ficam na pasta `fontes/`: o jogo não busca nada na internet.
- Os chamados ficam em dados (`js/situacoes.js`), no mesmo formato do `.json` que a Área do professor gera.

## Área do professor

- Por enquanto a Área do professor está **fora do jogo** (o botão do menu está escondido), mas os arquivos continuam no projeto: abra o `editor.html` direto para usar.
- O professor escreve os passos na ordem certa, marca em cada passo quais passos precisam vir antes dele e escreve o que o Robô-guia diz se a criança errar. Escolhe também o cenário, as imagens das cartas, a imagem da lição e o texto para o professor.
- "Testar este nível" abre o nível exatamente como a criança verá, sem mexer no progresso do jogo.
- "Salvar arquivo" baixa um `.json` com tudo dentro, inclusive as imagens. Para jogar: menu do jogo → "Área do professor" → "Abrir chamado (.json)".
- Sem servidor e sem nuvem: o arquivo fica no computador do professor.

## Arquivos

| Arquivo | O que faz |
|---|---|
| `js/motor.js` | formato dos dados e validação pelas dependências (`node js/motor.js` roda os testes) |
| `js/situacoes.js` | os 7 chamados (4 originais e 3 novos), no mesmo formato do `.json` do professor |
| `js/em-progresso.js` | os 2 protótipos que ainda não foram aprovados, Escovar os dentes e Plantar uma semente (seção "Em progresso", senha 6234; o botão está escondido no `index.html` por enquanto) |
| `fontes/` | as duas fontes do jogo (WOFF2) e as licenças delas (SIL Open Font License) |
| `js/arrasto.js` | arrastar, tocar e teclado |
| `js/jogo.js` | a partida: tabuleiro, erros, estrelas e dicas |
| `js/montagem.js` | a montagem (pilha, cena ou tirinha) ao lado do tabuleiro |
| `js/conclusao.js` | a tela de lição |
| `js/app.js` | menu, abertura, crachá, central, as duas promoções, os selos ("Minhas ideias"), final e abrir o chamado do professor |
| `editor.html`, `editor.css`, `js/editor.js` | a Área do professor |
| `js/som.js`, `audio/musica-tema.mp3` | música ("Agentes de Algoritimando", em loop) e efeitos, com o painel de configurações (liga/desliga e volume de cada um, e a tela cheia no app.js) |
| `js/comum.js`, `js/progresso.js`, `js/perfil.js` | cartas e memória do jogo |

## Imagens que ainda faltam

As imagens dos chamados já estão no jogo. Faltam só as do fim do jogo, todas opcionais (o jogo tem um substituto para cada uma): os 4 selos das ideias, o crachá de Agente Sênior e os 2 personagens de corpo inteiro da tela final. Os prompts estão em [PROMPTS-FIM-DO-JOGO.md](PROMPTS-FIM-DO-JOGO.md). A lista geral, com o nome de cada arquivo, está em [IMAGENS.md](IMAGENS.md); os prompts das imagens já prontas, em [PROMPTS-CARTAS.md](PROMPTS-CARTAS.md), [PROMPTS-LICOES.md](PROMPTS-LICOES.md) e [PROMPTS-CENAS.md](PROMPTS-CENAS.md).

## Versão dos arquivos (cache)

Os `.js` e `.css` (e as imagens que trocam de conteúdo sem mudar de nome, como o mapa `img/story1.webp`) são carregados com `?v=AAAAMMDDHHMM` no `index.html` e no `editor.html`. Ao publicar uma mudança, troque esse número: assim o navegador (principalmente no celular) baixa os arquivos novos em vez de usar os guardados.
