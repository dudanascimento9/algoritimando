# Imagens que faltam

> **Formato no jogo:** todas as imagens ficam em **WebP** (carregam bem mais rápido que PNG e JPG). As imagens geradas podem vir em PNG ou JPG: na hora de aplicar, elas são convertidas para `.webp`.

Lista de todos os lugares do jogo que pedem uma imagem e ainda não têm. Enquanto o arquivo não existe, o jogo mostra um quadro tracejado no lugar (nas cartas, "ilustração do passo"). Basta salvar o arquivo com o nome e a pasta indicados: ele aparece sozinho, sem mexer no código.

Há três tipos principais: as cartas dos passos (seção 1), as imagens das lições (seção 2), que substituem o texto da tela de "Parabéns" para a criança, e as peças da montagem (seção 3).

## 1. Ilustrações das cartas (`img/passos/`)

As 38 cartas dos quatro primeiros chamados estão prontas. As cartas dos quatro chamados novos também estão prontas.

Formato sugerido: PNG com fundo transparente, quadrado ou 4:3 (por exemplo 600 × 450), mesmo estilo das ilustrações do Figma. A mesma imagem é usada em todos os níveis em que o passo aparece.

Os prompts prontos para gerar cada uma estão em [PROMPTS-CARTAS.md](PROMPTS-CARTAS.md).

### Fazer um sanduíche (Cozinha)

| Arquivo | O que desenhar | Legenda da carta | Níveis |
|---|---|---|---|
| `sanduiche-01.webp` (já existe) | duas fatias de pão na mesa | Pegue duas fatias de pão. | 1, 2 |
| `sanduiche-02.webp` (já existe) | queijo já em cima da fatia | Coloque o queijo no pão. / Coloque o queijo na fatia. | 1, 2, 4 |
| `sanduiche-03.webp` (já existe) | presunto | Coloque o presunto no pão. | 2 |
| `sanduiche-04.webp` (já existe) | sanduíche fechado | Feche o sanduíche. / Feche com a outra fatia. / Junte as duas fatias. | 1, 2, 3, 4, 5 |
| `sanduiche-05.webp` (já existe) | saco de pão fechado | Pegue o saco de pão. | 3, 4, 5 |
| `sanduiche-06.webp` (já existe) | pote de manteiga | Pegue a manteiga. / Pegue o pote de manteiga. | 3, 5 |
| `sanduiche-07.webp` (já existe) | abrindo o saco | Abra o saco e tire duas fatias. / Abra o saco de pão. | 3, 4, 5 |
| `sanduiche-08.webp` (já existe) | fatias saindo do saco | Tire duas fatias do saco. | 4 |
| `sanduiche-09.webp` (já existe) | fatia com a manteiga espalhada | Passe a manteiga nas fatias. / Espalhe a manteiga nas fatias. | 3, 5 |
| `sanduiche-10.webp` (já existe) | fatia de queijo na mão | Pegue uma fatia de queijo. | 4 |
| `sanduiche-11.webp` (já existe) | faca sem ponta | Pegue uma faca sem ponta. | 5 |
| `sanduiche-12.webp` (já existe) | pote sendo aberto | Abra o pote de manteiga. | 5 |
| `sanduiche-13.webp` (já existe) | guardar tudo, mesa limpa | Guarde tudo e deixe a mesa limpa. | 5 |

### O robô e o cubo (Fábrica)

| Arquivo | O que desenhar | Legenda da carta | Níveis |
|---|---|---|---|
| `robo-01.webp` (já existe) | andando até o cubo | Ande até o cubo. | 1, 2, 3, 4, 5 |
| `robo-02.webp` (já existe) | garra fechando no cubo | Pegue o cubo. / Feche a garra no cubo. | 1, 2, 3, 4, 5 |
| `robo-03.webp` (já existe) | pousando o cubo | Coloque o cubo na plataforma. | 1, 2, 3 |
| `robo-04.webp` (já existe) | garra abrindo, vazia | Abra a garra. | 2, 3, 4, 5 |
| `robo-05.webp` (já existe) | virando para o cubo | Vire o robô para o cubo. | 3, 4, 5 |
| `robo-06.webp` (já existe) | virando para a plataforma | Vire o robô para a plataforma. | 4, 5 |
| `robo-07.webp` (já existe) | andando com o cubo | Ande até a plataforma. | 4, 5 |
| `robo-08.webp` (já existe) | soltando o cubo na plataforma | Abra a garra em cima da plataforma. | 4, 5 |
| `robo-09.webp` (já existe) | apertando o botão de ligar | Aperte o botão de ligar. | 5 |

### Arrumar a mochila (Escola)

| Arquivo | O que desenhar | Legenda da carta | Níveis |
|---|---|---|---|
| `mochila-01.webp` (já existe) | lápis no estojo | Guarde o lápis no estojo. | 1, 2, 3, 4 |
| `mochila-02.webp` (já existe) | borracha no estojo | Guarde a borracha no estojo. | 2, 3, 4 |
| `mochila-03.webp` (já existe) | estojo fechado | Feche o estojo. | 1, 2, 3, 4 |
| `mochila-04.webp` (já existe) | estojo entrando na mochila | Guarde o estojo na mochila. | 1, 2, 3, 4 |
| `mochila-05.webp` (já existe) | zíper da mochila fechando | Feche o zíper da mochila. | 2, 3, 4 |
| `mochila-06.webp` (já existe) | zíper da mochila abrindo | Abra o zíper da mochila. | 3, 4 |
| `mochila-07.webp` (já existe) | caderno na mochila | Guarde o caderno na mochila. | 4 |
| `mochila-08.webp` (já existe) | mochila nas costas | Coloque a mochila nas costas. | 4 |

### Ajudar as abelhas (Jardim)

| Arquivo | O que desenhar | Legenda da carta | Níveis |
|---|---|---|---|
| `abelhas-01.webp` (já existe) | abelha voando até a flor | Voe até a flor. | 1, 2, 3, 4 |
| `abelhas-02.webp` (já existe) | abelha sugando o néctar da flor | Colete o néctar da flor. | 1, 2, 3, 4 |
| `abelhas-03.webp` (já existe) | abelha voltando para a colmeia | Leve o néctar para a colmeia. / Leve tudo para a colmeia. | 1, 2, 3, 4 |
| `abelhas-04.webp` (já existe) | abelha saindo da colmeia | Saia da colmeia. | 2, 3, 4 |
| `abelhas-05.webp` (já existe) | pólen amarelo nas patinhas da abelha | Junte o pólen nas patinhas. | 2, 3, 4 |
| `abelhas-06.webp` (já existe) | abelha procurando uma flor aberta | Procure uma flor aberta. | 3, 4 |
| `abelhas-07.webp` (já existe) | néctar entrando no favo | Guarde o néctar no favo. | 4 |
| `abelhas-08.webp` (já existe) | favo fechado com cera | Feche o favo com cera. | 4 |

### Chamados novos (faltam todas)

A numeração segue a ordem em que a carta aparece pela primeira vez no chamado.

### Lavar as mãos (Banheiro)

| Arquivo | O que desenhar | Legenda da carta | Níveis |
|---|---|---|---|
| `maos-01.webp` (já existe) | mão levantando a alavanca da torneira, água começando a sair | Abra a torneira. | 3, 4 |
| `maos-02.webp` (já existe) | mãos sujas debaixo da água | Molhe as mãos na água. | 1, 2, 3, 4 |
| `maos-03.webp` (já existe) | sabonete em barra passando na mão molhada | Passe sabonete nas mãos. | 1, 2, 3, 4 |
| `maos-04.webp` (já existe) | mãos cheias de espuma, com setas em círculo | Esfregue as mãos contando até 20. | 2, 3, 4 |
| `maos-05.webp` (já existe) | água tirando a espuma das mãos | Enxágue as mãos. | 1, 2, 3, 4 |
| `maos-06.webp` (já existe) | mão fechando a torneira, última gota | Feche a torneira. | 3, 4 |
| `maos-07.webp` (já existe) | mãos limpas na toalha | Seque as mãos na toalha. | 4 |

### Atravessar a rua (Caminho da escola)

| Arquivo | O que desenhar | Legenda da carta | Níveis |
|---|---|---|---|
| `rua-01.webp` | menino de moletom amarelo na calçada indo até a faixa | Vá até a faixa de pedestres. | 1, 2, 3 |
| `rua-02.webp` | menino parado na calçada olhando para os lados | Olhe para os dois lados. | 1, 2, 3 |
| `rua-03.webp` | menino andando no meio da faixa | Atravesse andando pela faixa. | 1, 2, 3 |
| `rua-04.webp` | menino olhando para o semáforo de pedestres (sem cor acesa) | Olhe a cor da luz do semáforo. | 2, 3 |
| `rua-05.webp` | menino parado ao lado do semáforo de duas luzes, com a vermelha acesa | Se estiver vermelho, espere o verde. | 2, 3 |
| `rua-06.webp` | mão de criança segurando a mão de um adulto | Dê a mão para um adulto. | 3 |

### Fazer uma limonada (Cozinha)

| Arquivo | O que desenhar | Legenda da carta | Níveis |
|---|---|---|---|
| `limonada-01.webp` | limões inteiros debaixo da torneira | Lave os limões. | 1, 2, 3 |
| `limonada-02.webp` | mão de adulto cortando um limão ao meio | Peça a um adulto para cortar os limões. | 1, 2, 3 |
| `limonada-03.webp` | meio limão no espremedor | Esprema os limões. | 1, 2, 3 |
| `limonada-04.webp` | jarra recebendo água com gelo | Coloque água gelada na jarra. | 2, 3 |
| `limonada-05.webp` | colher de pau mexendo a jarra de limonada | Misture o suco com a água da jarra. / Misture o suco, a água e o açúcar. | 2, 3 |
| `limonada-06.webp` | colher despejando açúcar na jarra | Coloque açúcar na jarra. | 3 |
| `limonada-07.webp` | jarra servindo limonada no copo | Sirva a limonada no copo. | 3 |

## 2. Imagens das lições (`img/licoes/`)

As 18 dos quatro primeiros chamados estão prontas, em `img/licoes/` como WebP (1200 × 896). **Faltam 10:** as dos três chamados novos, listadas no fim desta seção.

**Revisão do professor (nov/2026):** 10 lições mostravam "errado x certo" e saíram do jogo: `sanduiche-1`, `robo-3`, `mochila-1`, `mochila-3`, `abelhas-1`, `abelhas-3`, `maos-1`, `maos-2`, `maos-4` e `rua-1`. Os arquivos estão em `img/licoes/comparativas/` e aparecem no álbum, na página "Figurinhas extras", liberada quando a criança vira Agente. As 10 novas, só com cenas positivas, já estão no jogo (prompts em `PROMPTS-REVISAO.md`). O semáforo virou de pedestre com duas luzes, sem bonequinho, em `rua-04`, `rua-05`, `level6`, `win6`, `pic6`, `rua-2` e `rua-3`.

Na tela de "Parabéns! Você completou o nível!", a criança vê só a pergunta e esta imagem. O texto da lição fica atrás do botão "Ler a lição", para o professor conduzir a conversa. Enquanto a imagem não existe, aparece o quadro "ilustração da lição".

Os prompts prontos para gerar cada uma estão em [PROMPTS-LICOES.md](PROMPTS-LICOES.md).

Formato sugerido: PNG ou JPG em 4:3 (por exemplo 1200 × 900), mesmo estilo das outras ilustrações. A imagem precisa contar a ideia da coluna da direita sem palavras: de preferência mostrando o certo e o errado lado a lado (por exemplo, o sanduíche com o queijo para fora e o sanduíche certo).

### Fazer um sanduíche (Cozinha)

| Arquivo | Pergunta na tela | Ideia que a imagem precisa mostrar |
|---|---|---|
| `sanduiche-1.webp` (nível 1) | Por que a ordem dos passos importa? | Para montar o sanduíche, você colocou os passos em uma ordem. Se a gente troca os passos de lugar, dá confusão: o queijo pode ficar de fora do sanduíche! Com a ordem certa, tudo dá certo no final. |
| `sanduiche-2.webp` (nível 2) | Todo passo tem uma hora certa? | O queijo e o presunto podiam entrar em qualquer ordem: um não precisa do outro. Mas fechar o sanduíche precisa esperar os dois estarem dentro. Um passo só espera aquilo de que ele precisa — os outros são livres! |
| `sanduiche-3.webp` (nível 3) | Cadê os passos escondidos? | Abrir o saco de pão… você faz isso sem nem pensar. Quando a gente explica para alguém, esses passos pequenos ficam escondidos — a pessoa adivinha sozinha. Mas eles existem! Sem eles, o sanduíche não sai. |
| `sanduiche-4.webp` (nível 4) | E se quem monta o sanduíche for um computador? | Um amigo adivinha os passos escondidos. O computador não adivinha nada! Ele só faz o que a gente diz, do jeitinho que a gente diz. Cada frase dessas é uma instrução. Por isso a lista para ele precisa ter todos os passos, na ordem certa. |
| `sanduiche-5.webp` (nível 5) | Esse passo a passo tem um nome? | Uma lista de instruções completa e na ordem certa tem nome: algoritmo! E o seu foi até o fim de verdade: montar, guardar tudo, deixar a mesa limpa. Quem cria um algoritmo pensa no começo, no meio e no fim. |

### O robô e o cubo (Fábrica)

| Arquivo | Pergunta na tela | Ideia que a imagem precisa mostrar |
|---|---|---|
| `robo-1.webp` (nível 1) | Como um robô entende um pedido? | O robô não pensa como a gente: ele faz um passo de cada vez, na ordem que recebe. Se a ordem estiver trocada, ele tenta mesmo assim — e dá tudo errado! Com a ordem certa, o cubo chega à plataforma. |
| `robo-2.webp` (nível 2) | Todos os passos precisam esperar? | Andar até o cubo e abrir a garra: tanto faz qual vem primeiro — um não precisa do outro! Mas fechar a garra no cubo precisa esperar os dois. Um passo só espera aquilo de que ele precisa. |
| `robo-3.webp` (nível 3) | Quem manda alguém "se virar antes de andar"? | Ninguém fala isso — todo mundo se vira sem pensar. O robô não: se ninguém mandar virar, ele sai reto e bate na parede. Para uma máquina, até o passo mais óbvio precisa ser dito. |
| `robo-4.webp` (nível 4) | O que se esconde dentro de "coloque na plataforma"? | Quando a gente fala "coloque lá", tem um monte de passo escondido: virar, andar, soltar. O robô não adivinha nenhum deles. Cada frase dessas é uma instrução. Se a instrução de soltar não existir, o cubo fica preso na garra para sempre! |
| `robo-5.webp` (nível 5) | Esse passo a passo tem um nome? | Uma lista de instruções completa e na ordem certa tem nome: algoritmo! E o seu começou do verdadeiro começo: ligar o robô — o passo mais esquecido do mundo. Quem cria um algoritmo pensa no começo, no meio e no fim. |

### Arrumar a mochila (Escola)

| Arquivo | Pergunta na tela | Ideia que a imagem precisa mostrar |
|---|---|---|
| `mochila-1.webp` (nível 1) | Por que a ordem dos passos importa? | Para guardar o material, você colocou os passos em uma ordem. Se a gente troca os passos de lugar, dá confusão: o lápis pode ficar perdido na mesa! Com a ordem certa, nada fica para trás. |
| `mochila-2.webp` (nível 2) | Todo passo tem uma hora certa? | O lápis e a borracha podiam entrar no estojo em qualquer ordem: um não precisa do outro. Mas fechar o estojo precisa esperar os dois estarem dentro. Um passo só espera aquilo de que ele precisa — os outros são livres! |
| `mochila-3.webp` (nível 3) | Quem lembra de falar "abra a mochila"? | Ninguém fala "abra a mochila" — todo mundo abre sem pensar. Mas se esse passo não existir, o estojo não entra: ele bate no zíper fechado! Os passos escondidos existem, mesmo quando ninguém fala deles. |
| `mochila-4.webp` (nível 4) | Esse passo a passo tem um nome? | Uma lista de passos completa e na ordem certa tem nome: algoritmo! Você montou um algoritmo de verdade — e ele foi até o fim: mochila fechada e nas costas. Quem cria um algoritmo pensa no começo, no meio e no fim. |

### Ajudar as abelhas (Jardim)

| Arquivo | Pergunta na tela | Ideia que a imagem precisa mostrar |
|---|---|---|
| `abelhas-1.webp` (nível 1) | Por que a ordem dos passos importa? | Para levar néctar para casa, a abelha seguiu os passos em uma ordem. Se a ordem fica trocada, ela volta para a colmeia sem nada! Com a ordem certa, o néctar chega em casa. |
| `abelhas-2.webp` (nível 2) | Todo passo tem uma hora certa? | O néctar e o pólen podiam ser coletados em qualquer ordem: um não precisa do outro. Mas voltar para a colmeia precisa esperar os dois. Um passo só espera aquilo de que ele precisa — os outros são livres! |
| `abelhas-3.webp` (nível 3) | Quem lembra de falar "procure a flor"? | Quando alguém conta o que a abelha faz, ninguém fala "procure uma flor aberta". Esse passo fica escondido: parece óbvio, então a gente pula. Mas sem ele a abelha voa sem rumo e não acha néctar nenhum! |
| `abelhas-4.webp` (nível 4) | Esse passo a passo tem um nome? | Uma lista de instruções completa e na ordem certa tem nome: algoritmo! E o seu foi até o fim de verdade: guardar o néctar e fechar o favo para virar mel. Quem cria um algoritmo pensa no começo, no meio e no fim. |

### Chamados novos (faltam todas)

### Lavar as mãos (Banheiro)

| Arquivo | Pergunta na tela | Ideia que a imagem precisa mostrar |
|---|---|---|
| `maos-1.webp` (já existe) (nível 1) | A mesma água, duas vezes? | A água apareceu duas vezes: no começo para molhar, no fim para tirar o sabonete. O gesto é quase o mesmo, mas o trabalho é outro. O que muda é o momento em que ele acontece. Num passo a passo, não basta saber o que fazer: é preciso saber quando. |
| `maos-2.webp` (já existe) (nível 2) | Quantas vezes? | Esfregar é o mesmo gesto, feito muitas vezes. Imagine vinte cartas iguais no tabuleiro! Uma carta só resolve: ela manda repetir e diz quando parar, que é ao chegar no 20. Isso se chama repetição. Toda repetição precisa de uma hora de parar. |
| `maos-3.webp` (já existe) (nível 3) | O que você abre, você fecha? | Abrir a torneira é o passo que todo mundo esquece de contar. Fechar também! Os dois formam um par: um fica no começo, o outro no fim, e a lavagem acontece no meio. Quando um passo a passo abre, liga ou pega alguma coisa, ele precisa do passo que fecha, desliga ou guarda. |
| `maos-4.webp` (já existe) (nível 4) | Os dois jeitos dão certo. Qual é o melhor? | Fechar a torneira e secar as mãos podiam trocar de lugar: os dois jeitos deixam as mãos limpas. Mas, se você se seca primeiro, a torneira fica aberta esse tempo todo e a água vai embora à toa. Um passo a passo completo e na ordem certa se chama algoritmo. Quando mais de um funciona, dá para escolher o melhor: o que não desperdiça. |

### Atravessar a rua (Caminho da escola)

| Arquivo | Pergunta na tela | Ideia que a imagem precisa mostrar |
|---|---|---|
| `rua-1.webp` (nível 1) | Por que olhar antes? | Na rua, a ordem dos passos não serve só para dar certo: ela protege você. Olhar depois de atravessar não adianta nada. E olhar cedo demais também não: a rua muda a cada instante. A hora de olhar é logo antes de atravessar. |
| `rua-2.webp` (nível 2) | Um passo que faz uma pergunta? | "Se estiver vermelho, espere o verde" é um passo diferente: ele começa com SE. Antes de obedecer, você precisa de uma resposta: de que cor está a luz? Vermelho, você espera. Verde, você segue. Isso se chama condição: o mesmo passo a passo faz coisas diferentes, dependendo do que encontra. |
| `rua-3.webp` (nível 3) | Quantas coisas precisam ser verdade? | Para atravessar, três coisas precisam ser verdade ao mesmo tempo: a mão dada, a luz verde e os dois lados olhados. Se faltar uma só, a resposta é "ainda não". É uma condição com E: isto E isto E isto. Um passo a passo completo e na ordem certa se chama algoritmo. Com condições, ele sabe até a hora de esperar. |

### Fazer uma limonada (Cozinha)

| Arquivo | Pergunta na tela | Ideia que a imagem precisa mostrar |
|---|---|---|
| `limonada-1.webp` (nível 1) | O que muda no limão a cada passo? | O limão foi mudando: sujo, limpo, cortado, espremido. Cada passo recebe o limão do jeito que o passo anterior deixou. Por isso não dá para pular nem trocar. Num passo a passo, as coisas vão se transformando até ficarem prontas. |
| `limonada-2.webp` (nível 2) | Dá para fazer duas coisas ao mesmo tempo? | Pôr água na jarra não depende do limão: pode ser antes, no meio ou depois de espremer. Passos assim podem ser feitos ao mesmo tempo, por duas pessoas. A limonada fica pronta mais rápido! Só a carta de misturar não tem escolha: ela espera o suco e a água. |
| `limonada-3.webp` (nível 3) | Quem espera por quem? | Aqui havia dois caminhos: o do limão (lavar, cortar, espremer) e o da jarra (água e açúcar). Os dois andam ao mesmo tempo e se encontram na carta de misturar. Ela espera o caminho mais demorado chegar. Um passo a passo completo e na ordem certa se chama algoritmo. Nem sempre ele é uma fila só: às vezes são caminhos que se juntam. |

## 3. Peças da montagem (`img/pecas/`)

A montagem é a imagem que se forma ao lado do tabuleiro conforme a criança coloca as cartas, na ordem em que elas estão (certa ou errada). No PC ela fica abaixo da bandeja; no celular é opcional, no botão "Ver a montagem".

### Pilha: Fazer um sanduíche

**Pronto.** As 5 peças (`sanduiche-pao`, `sanduiche-manteiga`, `sanduiche-queijo`, `sanduiche-presunto`, `sanduiche-pao-cima`) são WebP transparentes, vistas de lado, todas com 600 px de largura.

### Cena: Arrumar a mochila

**Pronto.** As 9 imagens foram montadas a partir das ilustrações das cartas da mochila (o estojo, o lápis, a borracha, a mochila e o caderno são recortados delas e colocados sempre no mesmo lugar): `mochila-cena-fechada`, `mochila-cena-aberta`, `mochila-lapis`, `mochila-borracha`, `mochila-estojo-fechado`, `mochila-abrir`, `mochila-estojo-dentro`, `mochila-caderno` e `mochila-fechar` (WebP, 1600 × 1200, fundo transparente).

### Tirinha: robô, abelhas e os três chamados novos

Cada quadrinho usa hoje a **ilustração da carta** (seção 1); enquanto ela não existe, mostra a legenda do passo (é o caso de Lavar as mãos, Atravessar a rua e Fazer uma limonada, que por isso não precisam de nenhuma peça). Se quiserem quadrinhos próprios (a cena DEPOIS do passo: o robô já perto do cubo, a garra já fechada...), basta pôr o caminho no campo `peca` do passo, em 4:3.

## 4. Outras partes que usam um desenho provisório

| Onde | Como está hoje | Imagem que entraria |
|---|---|---|
| Botão de casa (topo de todas as telas) | ícone de casa desenhado em código (SVG) | ícone de casa do Figma, em `img/ui/casa.webp` |
| Crachá da tela "Quem é você, agente?" | pronto: refeito em HTML/CSS no desenho de `img/ui/cracha-agente.webp` (cargo, estrelas e código do agente) | nada a fazer |
| Cartão dos chamados novos, no painel do lugar | pronto: os quatro têm a mini-cena | `img/pic5.webp` (pia com sabonete), `img/pic6.webp` (faixa e semáforo), `img/pic7.webp` (jarra de limonada) e `img/pic8.webp` (escova, copo e pasta), no campo `cena` de cada chamado em `js/situacoes.js` (prompts em `PROMPTS-CENAS.md`) |
| Tela do nível e da lição dos chamados novos | pronto: todos têm os dois fundos | nada a fazer (campos `fundo` e `fundoConclusao` (como `img/level1.webp` e `img/win1.webp`) |
| Clientes dos chamados novos | Lavar as mãos: o menino da Casa (`who1`). Atravessar a rua e Fazer uma limonada: o menino de moletom amarelo (`who5`, recortado do `level6`). Escovar os dentes: a menina de pijama coral (`who6`, recortada do `level8`) | nada a fazer |
| Selos das ideias (lição final dos chamados novos, crachá, "Minhas ideias" e tela final) | desenho em linhas feito em código | `img/selos/repeticao.webp`, `condicao.webp`, `ao-mesmo-tempo.webp` e `abre-e-fecha.webp` (prompts em `PROMPTS-FIM-DO-JOGO.md`) |
| Promoção a Agente Sênior | o crachá de Agente | `img/ui/cracha-senior.webp` (prompt em `PROMPTS-FIM-DO-JOGO.md`; o `cracha_nivel3_senior` do Drive serve, se estiver no mesmo desenho) |
| Tela final: o menino de moletom amarelo e a menina de pijama coral | não aparecem (só existem os retratos `who5` e `who6`) | `img/cliente4.webp` e `img/cliente5.webp`, de corpo inteiro (prompts em `PROMPTS-FIM-DO-JOGO.md`) |
| Carta e lição sem imagem no chamado do professor | quadros "ilustração do passo" e "ilustração da lição" | a imagem que o professor escolher na Área do professor |

## 5. Imagens do Drive que ainda não têm onde entrar

- `cracha_nivel1_estagiario.webp`: não há tela que mostre o crachá de Estagiário. O `cracha_nivel3_senior.webp` agora tem onde entrar: a promoção a Agente Sênior (seção 4).
- `robo_comemorando`, `robo_confuso`, `robo_feliz`, `robo_pensativo`: o Robô-guia usa os rostos recortados que já estavam em `img/` (`guide.webp`, `guide-feliz.webp`, `guide-triste.webp`).
- Central com 9 chamados (Figma): o jogo tem 8 (4 com arte e 4 novos ainda sem arte). Plantar uma semente continua como protótipo em `js/em-progresso.js`; o que falta nele está em `docs/revisao-chamados-novos.md`.
