# Revisão pedagógica dos protótipos de chamados

Revisão dos 5 protótipos de `js/em-progresso.js` (16 níveis), feita antes de qualquer mudança no código.

## Resultado

| Protótipo | Ideia que promete | Decisão | Por quê, em uma frase |
|---|---|---|---|
| Fazer uma limonada | caminhos paralelos | **Aprovado, com ajustes** | É o único em que o próprio tabuleiro mostra a ideia: muitas ordens certas, dois caminhos que se juntam. |
| Atravessar a rua | condição | **Aprovado, com ajustes** | Ideia nova e importante para a idade, mas aceitava uma ordem insegura e a condição era só uma frase na carta. |
| Lavar as mãos | repetição | **Aprovado, com ajustes** | Ideia nova e lição de abertura original; o nível 2 juntava duas ideias e a última lição falava de algo que a criança não fazia. |
| Escovar os dentes | começo, meio e fim | **Não aprovado (volta para ajuste)** | Repete lições que já existem e o nível 4 troca cartas detalhadas por cartas resumidas. |
| Plantar uma semente | passos escondidos | **Não aprovado (volta para ajuste)** | A ideia já é a do nível 3 dos quatro chamados atuais, e a lição própria dele (esperar) não tem carta. |

Os três aprovados viram chamados do jogo com 10 níveis, 20 cartas e 10 lições. Os dois não aprovados continuam em `js/em-progresso.js`, sem mudança, com a lista do que falta no fim deste relatório.

## O que os quatro chamados atuais já ensinam

Serve de régua para a pergunta "repete ou não repete":

1. A ordem dos passos importa.
2. Passos livres e passos presos ("um passo só espera aquilo de que ele precisa").
3. Passos escondidos (os que a gente faz sem falar).
4. O computador não adivinha: cada frase é uma instrução.
5. O passo a passo completo tem nome, algoritmo, e tem começo, meio e fim.

Um chamado novo só se justifica se trouxer uma ideia que não está nessa lista.

## 1. Fazer uma limonada (aprovado)

**Progressão (3, 5 e 7 passos).** Boa. Nível 1: uma fila só. Nível 2: entra a jarra, que não depende do limão. Nível 3: o caminho da jarra cresce e aparece o ponto de encontro. Cada nível acrescenta uma ideia, e a ideia está no grafo de dependências, não só no texto.

**Dependências.** Duas artificiais:

- `acucar` dependia de `agua` ("açúcar na jarra seca gruda no fundo"). Não é verdade: açúcar antes da água funciona igual. O jogo recusava uma ordem certa. **Ajuste:** açúcar sem dependência.
- `misturar` ("Junte o suco na jarra e mexa") dependia de `agua`. Despejar o suco na jarra vazia e pôr a água depois também funciona; a dependência só existia por causa do "e mexa". **Ajuste:** a carta passa a dizer o que ela realmente precisa: "Misture o suco com a água da jarra" (nível 2) e "Misture o suco, a água e o açúcar" (nível 3). Agora misturar depende de verdade dos três.

As demais estão certas (lavar antes de cortar, cortar antes de espremer, servir depois de misturar).

**Falas do Robô-guia.** Boas consequências ("cortar limão sujo leva a sujeira para dentro do suco"), mas quase todas terminam com a ordem pronta ("Lave antes!"). **Ajuste:** todas terminam na consequência.

**Lições.** As três são novas em relação às atuais: o limão muda de estado a cada passo, dois passos ao mesmo tempo, quem espera por quem. "Do limão ao suco" não era pergunta; virou "O que muda no limão a cada passo?".

## 2. Atravessar a rua (aprovado)

**Progressão (3, 5 e 6 passos).** A ideia de cada nível é clara: ordem que protege, condição, várias condições juntas.

**Dependências.** O problema mais sério da revisão está aqui:

- No nível 2, `olhar` e `sinal` eram livres entre si. O jogo aceitava "olhe para os dois lados, depois espere o boneco verde, depois atravesse". Quem olha e depois fica esperando atravessa com um olhar velho. É uma ordem insegura sendo aceita, e a própria fala do robô dizia o contrário ("mesmo com o boneco verde, olhe para os dois lados"). **Ajuste:** olhar passa a depender de esperar.
- `sinal` dependia de `parar` ("esperar no meio do caminho?"). Parar e esperar são quase o mesmo gesto; a criança não tem como justificar a ordem. **Ajuste:** a carta "Pare na calçada" sai.

**A condição não aparecia no tabuleiro.** "Espere o boneco verde do semáforo" era uma carta comum numa fila. **Ajuste:** a condição vira duas cartas, a pergunta e a decisão: "Olhe a cor do boneco do semáforo" e "Se estiver vermelho, espere o verde". A dependência entre elas é real (não dá para decidir sem saber a cor) e é exatamente o que uma condição é.

**Falas do Robô-guia.** "Parar onde?" e "Atravessar sem olhar é perigoso! Primeiro olhe para os dois lados" diziam o que fazer. **Ajuste:** reescritas pela consequência, e uma ideia aparece três vezes de propósito: olhar cedo demais não vale, porque a rua muda.

**Lições.** Novas: a ordem protege, um passo que faz uma pergunta, uma condição com E. Nenhuma repete as atuais.

**Um cuidado de conteúdo.** O nível 3 ("dê a mão para um adulto") está certo para 8 a 10 anos e fica.

## 3. Lavar as mãos (aprovado)

**Progressão (era 3, 5 e 7 passos).** O nível 2 acrescentava duas ideias de uma vez: o passo escondido (abrir a torneira) e a repetição (esfregar contando até 20). **Ajuste:** 4 níveis, com 3, 4, 6 e 7 passos, uma ideia por nível:

1. a mesma água em dois momentos;
2. repetição (entra só a carta de esfregar);
3. o par abrir e fechar a torneira;
4. dois jeitos dão certo, e um é melhor.

**Dependências.** Todas corretas e reais. Fechar a torneira e secar as mãos são livres entre si, como devem ser.

**Falas do Robô-guia.** Boas ("secar mãos cheias de sabonete? A toalha fica toda ensaboada!"). Só tirei as ordens do fim ("Molhe as mãos antes!").

**Lições.**

- "A mesma água, duas vezes?" é a melhor lição dos protótipos e fica.
- "Quantas vezes?" fica, com um acréscimo: toda repetição precisa de uma hora de parar.
- "Dá para economizar água?" perguntava em que momento a torneira poderia ficar fechada, mas o tabuleiro não deixava a criança fazer isso. **Ajuste:** a lição passa a falar do que ela acabou de fazer. Fechar e secar podem trocar de lugar; se ela seca primeiro, a torneira fica aberta esse tempo. É a ideia de escolher o melhor entre dois passo a passos que funcionam, que os chamados atuais não têm.

**Limite que continua.** A repetição mora numa carta só ("contando até 20"): o tabuleiro não tem como mostrar um laço. A lição e a imagem da lição (vinte cartas iguais ao lado de uma carta só) fazem esse trabalho.

## 4. Escovar os dentes (não aprovado)

- **Lições repetidas.** O nível 2 é a lição 2 dos chamados atuais (livres e presos) e o nível 4 é a lição 5 (começo, meio e fim). "Começo, meio e fim" nem é pergunta.
- **O nível 4 anda para trás.** O nível 3 tem "Cuspa a espuma", "Enxágue a boca" e "Lave a escova". O nível 4 troca por "Cuspa e enxágue a boca" e "Lave e guarde a escova no copo": cartas com duas ações, menos detalhadas que as do nível anterior. O jogo inteiro faz o contrário.
- **Salto de 5 para 8 passos** do nível 2 para o 3.
- **Dependência discutível:** enxaguar depois de cuspir ("vira uma bagunça").
- **Mesmo lugar e mesmo assunto** de Lavar as mãos (banheiro, torneira, terminar direito).

Para voltar: a ideia que ele tem de própria é o par "o que abre, fecha; o que pega, guarda". Sugestão de estrutura com 3, 4, 6 e 8 passos: pegar a escova, abrir a pasta, pôr a pasta, escovar; depois enxaguar a boca e lavar a escova; por fim fechar a pasta e guardar a escova. Como o par abrir e fechar agora está no nível 3 de Lavar as mãos, vale decidir se os dois chamados convivem.

## 5. Plantar uma semente (não aprovado)

- **A ideia é repetida.** "Cadê os passos escondidos?" é, palavra por palavra, a pergunta do nível 3 do sanduíche.
- **O nível 2 perde uma carta.** "Regue a terra" está no nível 1, some no 2 e volta no 3.
- **Dependência artificial:** "Coloque o vaso perto da janela" depende de cobrir a semente. Dá para levar o vaso para a janela antes de plantar; o jogo recusa uma ordem certa.
- **A lição 3 fala de um passo que não existe.** "Alguns algoritmos têm um passo de esperar", mas não há carta de esperar.

Para voltar: a ideia própria da planta é repetir com hora de parar ao longo de dias ("regue todos os dias até brotar") e esperar. Isso pede um nível com essas cartas, e encosta na repetição de Lavar as mãos.

## Decisões de implementação

**Lugar no mapa.** Lavar as mãos e Fazer uma limonada ficam na Casa (mesmo cliente do sanduíche). Atravessar a rua fica na Escola (local "Caminho da escola"). Casa passa a ter 3 chamados, Escola 2, Fábrica 1, Jardim 1.

**Montagem: tirinha nos três.**

- Pilha não serve: nenhum dos três é um empilhamento.
- Cena serviria para a limonada (a jarra enchendo), mas pede uma base e umas 8 peças alinhadas que não existem; sem elas a montagem fica vazia.
- Tirinha funciona hoje, sem arte nenhuma (mostra a legenda do passo e troca sozinha pela ilustração da carta quando ela chegar), e os três são histórias no tempo. Na rua ela diz algo a mais: no erro a história trava antes de a criança pisar na faixa.

**Promoção: os novos não entram na conta.** A promoção continua exigindo os 4 chamados originais.

- A promoção marca o fim do percurso que dá nome ao algoritmo. Os novos são extensões dele.
- Os novos ainda não têm ilustração. Não faz sentido prender a recompensa atrás de conteúdo com quadro tracejado.
- Quem já foi promovido, ou está com 3 de 4, não vê a meta mudar de lugar.

Os novos não ficam bloqueados: aparecem no mapa desde o começo, depois dos originais de cada lugar. Por isso as lições deles usam "passo a passo" e só o último nível de cada um usa a palavra "algoritmo", explicando o que ela quer dizer.

**Vocabulário.** "Repetição" e "condição" ganham nome na lição do nível em que a criança acabou de viver a ideia, nunca antes.

## O que o teste no navegador mostrou

Os 10 níveis novos foram jogados com Playwright no PC (1366 × 768, arrastando com o mouse) e no celular (iPhone 13 em pé, tocando; a limonada também deitado). Em cada nível: ordem errada, "Verificar", dica, ordem certa diferente da do arquivo, lição. Três ajustes de tela saíram daí:

- **Legendas cortadas.** As cartas mostravam no máximo 2 linhas de legenda no PC, e o resto virava "...". Isso já acontecia no jogo ("Guarde tudo e deixe a mesa…" no nível 5 do sanduíche) e ficaria pior com as legendas novas. Agora cabem até 4 linhas, e as legendas novas mais longas foram encurtadas. Das 94 legendas cortadas que o teste encontrou no `main` (somando 6 tamanhos de tela), sobrou 1, no celular deitado.
- **Painel do lugar.** Com 3 chamados, o painel da Casa passava da tela. Agora os 3 cabem no PC e, quando não cabem (celular), a lista rola por dentro do painel, com o botão "Voltar ao mapa" sempre à vista.
- **Contagem.** O quadro "Chamados concluídos" continua contando os 4 da promoção e ganhou a linha "Chamados novos: 0 de 3".

## Atualização: Escovar os dentes entra no jogo

Decisão do dono do projeto: os dois chamados de banheiro convivem. Lavar as mãos foi para a **Casa** (junto com o sanduíche) e a **Casa azul** ficou com Escovar os dentes, com uma cliente nova (a menina de pijama, `img/who6.webp`).

O protótipo foi refeito seguindo a sugestão acima:

- **3, 4, 6 e 8 passos**, e as cartas só ficam mais detalhadas: pegar a escova, abrir a pasta, pôr a pasta, escovar; depois enxaguar a boca e lavar a escova; por fim fechar a pasta e guardar a escova. Saíram "Pegue o tubo de pasta", "Cuspa a espuma" (e a dependência discutível de enxaguar depois de cuspir) e as cartas com duas ações.
- **Lições próprias**, sem repetir as dos quatro originais: (1) o passo principal e os passos que preparam ele; (2) chegar no objetivo e mesmo assim deixar coisas para trás; (3) terminar deixando tudo pronto para a próxima vez, porque a tarefa se repete todo dia; (4) tudo volta ao lugar: o que abre fecha, o que pega guarda. Só a última usa a palavra "algoritmo".
- Ordens certas por nível: 1, 2, 4 e 30. Toda regra tem a sua explicação, terminando na consequência.

