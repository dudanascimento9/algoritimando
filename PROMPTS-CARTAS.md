# Prompts das ilustrações das cartas

37 imagens para `img/passos/` (a do presunto, `sanduiche-03.webp`, já existe e é a referência de estilo). Cada prompt abaixo já traz o estilo, o tamanho e as regras: é só copiar o bloco inteiro.

## Antes de começar

**Como gerar**
1. Gere **um chamado por vez, na mesma conversa** do gerador de imagens. Em toda geração, anexe as imagens de referência indicadas no começo de cada seção (estão no repositório).
2. Quando a **primeira carta** de um chamado ficar boa, anexe-a também nas seguintes: assim o pão, o robô, a mochila e a abelha saem iguais em todas as cartas.
3. Escolha o formato **4:3** no gerador (paisagem). Se ele só tiver quadrado, use quadrado: o jogo encaixa sem cortar.

**Regras que valem para todas** (já estão nos prompts)
- **Uma ação por carta, sem entregar a ordem.** A carta mostra só o próprio passo. Nada de números, de "1º/2º", nem do resultado dos passos seguintes. É a criança quem descobre a ordem.
- **Nada de texto** na imagem: nem palavras, nem letras, nem números. A legenda já vem embaixo da carta.
- **Legível em tamanho pequeno**: no jogo a ilustração aparece com uns 100 px. Silhueta forte, poucos detalhes, um assunto só, centralizado e com margem.
- **Fundo branco liso**, sem cenário. Setas simples e linhas de movimento podem (ajudam a mostrar a ação).
- **Mesmo estilo do jogo**: contorno marrom-escuro grosso, cores pastel, sombra cinza suave embaixo.

**Depois de gerar**
- Me mande as imagens aqui no chat (pode ser em lote, com o nome do arquivo de cada uma). Eu tiro o fundo branco, deixo transparente, ajusto para **600 × 450 px**, salvo com o nome certo em `img/passos/` e subo para o GitHub.
- Se preferir fazer sozinho: PNG com fundo transparente, 600 × 450 px, com o nome exato da tabela. A carta troca sozinha, sem mexer no código.

**Chamados novos:** todas as cartas estão prontas. Os prompts ficam como registro. Os prompts estão no fim deste arquivo.

**Se a imagem sair errada**, peça a correção na mesma conversa: "remove the text", "no background, plain white", "make it simpler and bolder", "same robot as the reference", "no lettuce".

## Fazer um sanduíche (Cozinha)

**Pronto:** as 13 cartas já estão no jogo.

**Anexe como referência:** `img/pic1.webp` (o sanduíche da central: pão, presunto e queijo, sem alface) e `img/passos/sanduiche-03.webp` (o presunto, já pronto).

**Consistência:** Mesmo pão, mesmo queijo e mesma manteiga em todas: pão de forma branco com casca dourada, queijo amarelo quadrado, manteiga amarelo-clara. Sem alface nem tomate (o jogo não tem esses passos).

### `sanduiche-01.webp` — Pegue duas fatias de pão.

```
Subject: Two plain slices of white sandwich bread with golden crust, lying flat side by side, seen slightly from above. Nothing on them: no butter, no filling. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-02.webp` — Coloque o queijo no pão. / Coloque o queijo na fatia.

```
Subject: One slice of white sandwich bread lying flat, with one square slice of yellow cheese placed on top, cheese corners drooping slightly over the edges. Open-faced: no top slice. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-04.webp` — Feche o sanduíche. / Feche com a outra fatia. / Junte as duas fatias.

```
Subject: A closed sandwich made of two slices of white bread stacked, seen slightly from above and the front, the top slice coming down onto the bottom one with two small motion lines. Only a thin yellow edge of filling peeks out. No lettuce, no tomato. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-05.webp` — Pegue o saco de pão.

```
Subject: A closed transparent plastic bag of sliced white bread (the loaf visible through the plastic), closed with a small twist tie on top. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-06.webp` — Pegue a manteiga. / Pegue o pote de manteiga.

```
Subject: A small round tub of butter with its lid closed, pale yellow tub with a simple butter-colored label with no text. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-07.webp` — Abra o saco e tire duas fatias. / Abra o saco de pão.

```
Subject: The same transparent bag of sliced bread, now open: the twist tie removed and lying beside it, the opening of the bag folded back, the top slices visible at the opening. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-08.webp` — Tire duas fatias do saco.

```
Subject: Two slices of white bread sliding out of the open transparent bread bag, with a small curved motion arrow showing them coming out. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-09.webp` — Passe a manteiga nas fatias. / Espalhe a manteiga nas fatias.

```
Subject: One slice of white bread lying flat with a smooth glossy layer of pale yellow butter spread on it, and a children's round-tipped butter knife with a little butter on it resting beside the slice. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-10.webp` — Pegue uma fatia de queijo.

```
Subject: One single square slice of yellow cheese being held up by one small cartoon child's hand (simple rounded hand, warm medium-brown skin, only the hand and wrist visible). Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-11.webp` — Pegue uma faca sem ponta.

```
Subject: A children's butter knife with a clearly rounded blunt tip (no point at all) and a chunky pastel blue plastic handle, lying diagonally. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-12.webp` — Abra o pote de manteiga.

```
Subject: The same small round butter tub with its lid lifted off and tilted above it, showing the smooth pale yellow butter inside, with two small motion lines on the lid. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `sanduiche-13.webp` — Guarde tudo e deixe a mesa limpa.

```
Subject: A small clean wooden tabletop, shining, with a few sparkle stars on its surface and a neatly folded light blue cleaning cloth on it. Nothing else on the table. Objects have no faces.
Attached images: style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

## O robô e o cubo (Fábrica)

**Pronto:** as 9 cartas já estão no jogo.

**Anexe como referência:** `img/cliente1.webp` (o robô laranja) e `img/level2.webp` (o cubo cinza e a plataforma redonda com luz verde, no balão de pensamento).

**Consistência:** Sempre o MESMO robô laranja quadrado, de rodinhas e com duas garras cinza, visto de lado. Sempre o mesmo cubo cinza-claro e a mesma plataforma redonda cinza com anel de luz verde. Personagem pode ter rosto (é o robô do jogo).

### `robo-01.webp` — Ande até o cubo.

```
Subject: The orange boxy robot from the character reference, seen from the side, rolling on its wheels toward a light grey cube on the right, with speed lines behind the wheels. Its claws are empty and closed.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `robo-02.webp` — Pegue o cubo. / Feche a garra no cubo.

```
Subject: The orange boxy robot from the character reference, close to a light grey cube, its two grey claws closing around the cube and holding it, with two small squeeze motion marks.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `robo-03.webp` — Coloque o cubo na plataforma.

```
Subject: The orange boxy robot from the character reference holding a light grey cube in its claws and lowering it onto a round grey platform with a glowing green ring, a small downward motion arrow.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `robo-04.webp` — Abra a garra.

```
Subject: Close-up of the orange boxy robot from the character reference with both grey claws opened wide and empty, two small motion marks next to the claws. No cube in the picture.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `robo-05.webp` — Vire o robô para o cubo.

```
Subject: The orange boxy robot from the character reference turning in place, a simple curved arrow around its base showing the turn, now facing a light grey cube on the right. Claws empty.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `robo-06.webp` — Vire o robô para a plataforma.

```
Subject: The orange boxy robot from the character reference holding a light grey cube in its claws, turning in place with a simple curved arrow around its base, now facing a round grey platform with a glowing green ring on the right.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `robo-07.webp` — Ande até a plataforma.

```
Subject: The orange boxy robot from the character reference holding a light grey cube in its claws, rolling toward a round grey platform with a glowing green ring on the right, speed lines behind the wheels.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `robo-08.webp` — Abra a garra em cima da plataforma.

```
Subject: The orange boxy robot from the character reference right above a round grey platform with a glowing green ring, its claws opening, the light grey cube dropping onto the platform with a small downward motion line.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `robo-09.webp` — Aperte o botão de ligar.

```
Subject: The orange boxy robot from the character reference with its face screen dark (switched off), and a big round green power button on its side being pressed, with small glow lines around the button. No hand, no person.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

## Arrumar a mochila (Escola)

**Pronto:** as 8 cartas já estão no jogo.

**Anexe como referência:** `img/pic3.webp` (a mochila azul e amarela da central) e, só para a carta 08, `img/cliente2.webp` (a menina do chamado).

**Consistência:** Sempre a MESMA mochila azul com bolso amarelo, o mesmo estojo (de pano lilás com zíper), o mesmo lápis amarelo, a mesma borracha rosa e o mesmo caderno azul. Objetos sem rosto.

### `mochila-01.webp` — Guarde o lápis no estojo.

```
Subject: A yellow pencil going into an open soft lilac fabric pencil case with a zipper, a small curved motion arrow showing the pencil going in. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `mochila-02.webp` — Guarde a borracha no estojo.

```
Subject: A pink eraser going into an open soft lilac fabric pencil case with a zipper, a small curved motion arrow showing the eraser going in. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `mochila-03.webp` — Feche o estojo.

```
Subject: A soft lilac fabric pencil case with its zipper being closed: the zipper pull halfway along, a small arrow showing the closing direction. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `mochila-04.webp` — Guarde o estojo na mochila.

```
Subject: A closed soft lilac pencil case going into the open main compartment of the blue backpack with a yellow front pocket (same backpack as the reference), with a small curved motion arrow. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `mochila-05.webp` — Feche o zíper da mochila.

```
Subject: The blue backpack with a yellow front pocket (same backpack as the reference), its main zipper being closed: the zipper pull halfway along the top, a small arrow showing the closing direction. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `mochila-06.webp` — Abra o zíper da mochila.

```
Subject: The blue backpack with a yellow front pocket (same backpack as the reference), its main zipper being opened: the top opening wide, the inside empty and darker, a small arrow showing the opening direction. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `mochila-07.webp` — Guarde o caderno na mochila.

```
Subject: A blue spiral notebook going into the open main compartment of the blue backpack with a yellow front pocket (same backpack as the reference), with a small curved motion arrow. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `mochila-08.webp` — Coloque a mochila nas costas.

```
Subject: The girl from the character reference seen from behind, wearing the blue backpack with a yellow front pocket on both shoulders, small happy motion lines. Full body, standing.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

## Ajudar as abelhas (Jardim)

**Pronto:** as 8 cartas já estão no jogo.

**Anexe como referência:** `img/cliente3.webp` (a abelha) e `img/level4.webp` (colmeia pendurada, girassóis e o favo no balão).

**Consistência:** Sempre a MESMA abelha gordinha e peluda com a cestinha, o mesmo girassol, a mesma colmeia dourada pendurada e o mesmo favo de hexágonos. A abelha tem rosto (é personagem); flores e objetos não.

### `abelhas-01.webp` — Voe até a flor.

```
Subject: The fluffy bumblebee from the character reference flying toward an open yellow sunflower on the right, with a dotted curved flight path behind it.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `abelhas-02.webp` — Colete o néctar da flor.

```
Subject: The fluffy bumblebee from the character reference sitting on the center of an open yellow sunflower, sipping nectar, with two tiny shiny golden droplets.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `abelhas-03.webp` — Leve o néctar para a colmeia. / Leve tudo para a colmeia.

```
Subject: The fluffy bumblebee from the character reference flying toward a golden hanging beehive on the right, carrying its little basket with a shiny golden nectar droplet in it, dotted flight path behind.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `abelhas-04.webp` — Saia da colmeia.

```
Subject: The fluffy bumblebee from the character reference flying out of the round entrance of a golden hanging beehive, with small motion lines.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `abelhas-05.webp` — Junte o pólen nas patinhas.

```
Subject: Close-up of the fluffy bumblebee from the character reference with two big round yellow pollen balls stuck on its back legs, tiny pollen dust sparkles around.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `abelhas-06.webp` — Procure uma flor aberta.

```
Subject: The fluffy bumblebee from the character reference hovering and looking around with one little hand above its eyes, between a closed green flower bud on the left and an open yellow sunflower on the right.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `abelhas-07.webp` — Guarde o néctar no favo.

```
Subject: A piece of golden hexagon honeycomb, the fluffy bumblebee from the character reference pouring golden nectar from its little basket into one empty hexagon cell.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `abelhas-08.webp` — Feche o favo com cera.

```
Subject: A piece of golden hexagon honeycomb full of honey, the fluffy bumblebee from the character reference pressing a pale beige wax cap over one cell to close it, small sparkles.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

## Chamados novos

**Por gerar:** 20 cartas, dos três chamados que entraram no jogo depois dos quatro primeiros. As regras e o jeito de gerar são os mesmos do começo deste arquivo. Como estes chamados ainda não têm ilustração na central, a referência de estilo é sempre `img/passos/sanduiche-03.webp`.

## Lavar as mãos (Banheiro)

**Por gerar:** 7 cartas.

**Anexe como referência:** `img/passos/sanduiche-03.webp` (estilo) e `img/cliente0.webp` (o menino da Casa, só para o tom de pele das mãos).

**Consistência:** Sempre a MESMA pia branca com a mesma torneira prateada de alavanca, o mesmo sabonete em barra verde-claro e a mesma toalha azul-clara. Aparecem só as duas mãos da criança (sem rosto, sem corpo), com o mesmo tom de pele do menino da referência. Objetos sem rosto.

### `maos-01.webp` — Abra a torneira.

```
Subject: One small child's hand lifting the lever of a silver bathroom tap over a white sink, a stream of light blue water just starting to come out, a small curved arrow showing the lever going up. No soap, no towel. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `maos-02.webp` — Molhe as mãos na água.

```
Subject: Two small child's hands held together under a stream of light blue water from a silver tap, water drops splashing off the fingers. The hands are slightly dirty with a few small brown smudges. No soap, no foam. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `maos-03.webp` — Passe sabonete nas mãos.

```
Subject: Two small wet child's hands holding a pale green bar of soap between them, the bar sliding across one palm with a thin white streak of soap. Only a couple of tiny bubbles, no big foam. No tap, no water stream. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `maos-04.webp` — Esfregue as mãos contando até 20.

```
Subject: Two small child's hands rubbing together, completely covered in thick white soap foam with many bubbles floating around, two curved arrows going around the hands in a circle to show the same movement repeating. No tap, no water stream, no bar of soap. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `maos-05.webp` — Enxágue as mãos.

```
Subject: Two small child's hands under a stream of light blue water from a silver tap, white soap foam being washed off and sliding down from the fingers, the hands coming out clean with a small sparkle. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `maos-06.webp` — Feche a torneira.

```
Subject: One small clean child's hand pushing down the lever of a silver bathroom tap over a white sink, no water coming out, one last single drop hanging from the spout, a small curved arrow showing the lever going down. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `maos-07.webp` — Seque as mãos na toalha.

```
Subject: Two small clean child's hands being dried in a soft light blue towel that wraps around them, two small sparkles near the fingers. No tap, no water, no soap. Objects have no faces.
Attached images: style reference and character/object reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

## Atravessar a rua (Caminho da escola)

**Pronto:** as 6 cartas já estão no jogo. Os prompts ficam como registro.

**Anexe como referência:** a imagem de fundo da fase (`img/level6.webp`: o menino de moletom amarelo, o semáforo e a faixa) e `img/passos/sanduiche-03.webp` (estilo das cartas).

**Consistência:** Sempre o MESMO menino do fundo da fase (pele morena, cabelo cacheado castanho-escuro, moletom amarelo, mochila azul, bermuda azul-marinho, tênis azul), a mesma faixa de pedestres e o mesmo semáforo do fundo (caixa escura com três luzes; o boneco verde andando embaixo). O menino tem rosto; carros e objetos não. Nenhum carro perto do menino em carta alguma. O fundo da carta é branco liso (sem a cidade): ele é removido depois.

### `rua-01.webp` — Vá até a faixa de pedestres.

```
Subject: The boy from the level background (brown skin, curly dark brown hair, yellow hoodie, blue backpack, navy shorts, blue sneakers), walking along a light grey tiled sidewalk toward the start of a zebra crossing (white stripes on dark grey asphalt) just ahead of him, a small dotted arrow on the sidewalk pointing from him to the crossing. He is still on the sidewalk. No traffic light, no cars.
Attached images: level background (character, traffic light, crossing) and card style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no buildings, no sky, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `rua-02.webp` — Olhe para os dois lados.

```
Subject: The boy from the level background (brown skin, curly dark brown hair, yellow hoodie, blue backpack, navy shorts, blue sneakers), standing still at the edge of the sidewalk, seen from the front, his head turned to one side with one hand above his eyes, two small curved arrows near his head pointing left and right. His feet are on the sidewalk, not on the street. No traffic light, no cars.
Attached images: level background (character, traffic light, crossing) and card style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no buildings, no sky, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `rua-03.webp` — Atravesse andando pela faixa.

```
Subject: The boy from the level background (brown skin, curly dark brown hair, yellow hoodie, blue backpack, navy shorts, blue sneakers), walking calmly (not running) in the middle of a zebra crossing, seen from the side, on white stripes over dark grey asphalt, a small arrow showing his direction across. No traffic light, no cars.
Attached images: level background (character, traffic light, crossing) and card style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no buildings, no sky, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `rua-04.webp` — Olhe a cor do boneco do semáforo.

```
Subject: The boy from the level background (brown skin, curly dark brown hair, yellow hoodie, blue backpack, navy shorts, blue sneakers), standing on the sidewalk and looking up at the pedestrian traffic light from the level background (dark grey box on a grey pole with three round lamps: red on top, amber in the middle, and a green walking figure at the bottom), but with ALL three lamps drawn dim and unlit (no color lit), and a small dotted line going from his eyes to the light box. No cars, no crossing stripes.
Attached images: level background (character, traffic light, crossing) and card style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no buildings, no sky, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `rua-05.webp` — Se estiver vermelho, espere o verde.

```
Subject: The boy from the level background (brown skin, curly dark brown hair, yellow hoodie, blue backpack, navy shorts, blue sneakers), standing still and patient on the sidewalk with both feet together, next to the pedestrian traffic light from the level background (dark grey box on a grey pole with three round lamps: red on top, amber in the middle, and a green walking figure at the bottom), with only the TOP lamp lit bright red showing a standing figure and the other lamps dark. Three small dots in a row float beside him to show waiting. No cars, no crossing stripes.
Attached images: level background (character, traffic light, crossing) and card style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no buildings, no sky, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `rua-06.webp` — Dê a mão para um adulto.

```
Subject: Close view of the small brown-skinned hand of the boy from the level background, with the yellow hoodie sleeve visible, holding a bigger adult hand, both arms coming from the bottom corners of the image, a small sparkle above the hands. No faces, no bodies, no street, no traffic light.
Attached images: level background (character, traffic light, crossing) and card style reference.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no buildings, no sky, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

## Fazer uma limonada (Cozinha)

**Pronto:** as cartas já estão no jogo. Os prompts ficam como registro.

**Anexe como referência:** `img/level6.webp` (o menino de moletom amarelo e cabelo cacheado, o mesmo de Atravessar a rua) e `img/passos/sanduiche-03.webp` (estilo das cartas).

**Consistência:** Sempre os MESMOS limões (limão-taiti, verde, casca lisa), a mesma jarra de vidro transparente com alça, a mesma colher de pau comprida, o mesmo espremedor manual de vidro e o mesmo copo liso. Quando aparece uma criança, é sempre o MESMO menino do `level6.webp` (pele morena, cabelo cacheado castanho-escuro, moletom amarelo, bermuda azul-marinho), sem a mochila, porque está em casa. Nas cartas aparecem só as mãos dele (com a manga amarela do moletom), sem rosto. Objetos sem rosto. Uma coisa por carta: a carta do limão não mostra a jarra, e a carta da jarra não mostra o limão.

### `limonada-01.webp` — Lave os limões.

```
Subject: Three whole green limes in a small white colander under a stream of light blue water from a silver tap, water drops splashing off them, held and rubbed by the two small brown-skinned hands of the boy from the attached level background, with the yellow hoodie sleeves visible (only hands and forearms, no face). The limes are whole, not cut. No jar, no knife. Objects have no faces.
Attached images: level background (the boy, for his hands and sleeve) and card style reference. Only hands and forearms of the boy, never his face or body; no kitchen scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `limonada-02.webp` — Peça a um adulto para cortar os limões.

```
Subject: A big adult hand holding a kitchen knife that has just cut one green lime in half on a wooden cutting board, the two halves lying open showing the pale green inside, one whole lime waiting beside them. Only the adult hand and forearm, no face. Beside the board, the small brown-skinned hand of the boy from the attached level background (yellow hoodie sleeve visible) points at the limes, asking for help; the boy's hand does not touch the knife. No jar, no juicer. Objects have no faces.
Attached images: level background (the boy, for his hands and sleeve) and card style reference. Only hands and forearms of the boy, never his face or body; no kitchen scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `limonada-03.webp` — Esprema os limões.

```
Subject: The small brown-skinned hand of the boy from the attached level background, with the yellow hoodie sleeve visible, pressing half a green lime onto a clear glass manual citrus juicer, pale yellow-green juice collecting in the juicer's dish, two small drops flying. No jar, no water, no knife. Objects have no faces.
Attached images: level background (the boy, for his hands and sleeve) and card style reference. Only hands and forearms of the boy, never his face or body; no kitchen scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `limonada-04.webp` — Coloque água gelada na jarra.

```
Subject: A clear glass jug with a handle being filled with light blue water poured from above, the jug about half full, three ice cubes floating in it. Only water and ice inside: no lime, no juice, no sugar, no spoon. Objects have no faces.
Attached images: card style reference. No people, no hands; no kitchen scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `limonada-05.webp` — Misture o suco com a água da jarra. / Misture o suco, a água e o açúcar.

```
Subject: A clear glass jug with a handle, full of pale yellow-green lemonade, with a long wooden spoon inside, held by the small brown-skinned hand of the boy from the attached level background (yellow hoodie sleeve visible), stirring it, a spiral swirl drawn in the liquid and two curved arrows around the spoon showing the stirring. No lime halves, no glass, no sugar bowl. Objects have no faces.
Attached images: level background (the boy, for his hands and sleeve) and card style reference. Only hands and forearms of the boy, never his face or body; no kitchen scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `limonada-06.webp` — Coloque açúcar na jarra.

```
Subject: The small brown-skinned hand of the boy from the attached level background, with the yellow hoodie sleeve visible, holding a small spoon tipping white sugar into the open top of a clear glass jug with a handle, the sugar falling as a small stream of white grains, a small white sugar bowl beside the jug. No lime, no juicer, no glass. Objects have no faces.
Attached images: level background (the boy, for his hands and sleeve) and card style reference. Only hands and forearms of the boy, never his face or body; no kitchen scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `limonada-07.webp` — Sirva a limonada no copo.

```
Subject: The two small brown-skinned hands of the boy from the attached level background, with the yellow hoodie sleeves visible, holding a clear glass jug with a handle, tilted, pouring pale yellow-green lemonade into a simple drinking glass that is half full, one ice cube and one thin green lime slice on the rim of the glass. Objects have no faces.
Attached images: level background (the boy, for his hands and sleeve) and card style reference. Only hands and forearms of the boy, never his face or body; no kitchen scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

## Escovar os dentes (Banheiro da Casa azul)

**Pronto:** as cartas já estão no jogo. Os prompts ficam como registro.

**Anexe como referência:** `img/level8.webp` (o fundo do nível: a menina, a escova e a pasta) e `img/passos/sanduiche-03.webp` (estilo das cartas).

**Consistência:** Sempre a MESMA escova azul de cerdas brancas e o MESMO tubo de pasta azul com o dentinho branco e a tampa cinza-clara, iguais aos do balão do `level8`, e o mesmo copo de plástico azul-claro. Quando aparece a menina, são só as mãos dela (pele clara; se aparecer manga, é a manga curta do pijama coral), sem rosto; nas cartas 04 e 05 aparece também a boca, sem o resto do rosto. Objetos sem rosto. Uma coisa por carta: a carta da pasta não mostra o copo, a carta do copo não mostra a pasta.

### `dentes-01.webp` — Pegue a escova de dentes.

```
Subject: The small light-skinned hands of the girl from the attached reference (only hands and forearms, no face; if a sleeve shows, it is her short coral-pink pajama sleeve), lifting the blue toothbrush (blue handle, white bristles) out of the light blue plastic cup, a small curved arrow going up from the cup. The brush has no toothpaste on it. No toothpaste tube, no sink, no water. Objects have no faces.
Attached images: the level background level8 (the girl, the toothbrush and the toothpaste) and card style reference. Only hands and forearms of the girl (and, only where the subject says so, her mouth and chin), never her eyes or her whole face; no bathroom scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `dentes-02.webp` — Abra a tampa da pasta.

```
Subject: The small light-skinned hands of the girl from the attached reference (only hands and forearms, no face; if a sleeve shows, it is her short coral-pink pajama sleeve), holding the blue toothpaste tube with a white tooth emblem and a light grey cap and twisting off the cap, the open cap lifted just above the tube with a small curved arrow showing the turn. No toothbrush, no cup, no water. Objects have no faces.
Attached images: the level background level8 (the girl, the toothbrush and the toothpaste) and card style reference. Only hands and forearms of the girl (and, only where the subject says so, her mouth and chin), never her eyes or her whole face; no bathroom scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `dentes-03.webp` — Coloque pasta na escova.

```
Subject: The small light-skinned hands of the girl from the attached reference (only hands and forearms, no face; if a sleeve shows, it is her short coral-pink pajama sleeve), squeezing the blue toothpaste tube with a white tooth emblem and a light grey cap (cap off) over the blue toothbrush (blue handle, white bristles), a little wavy line of white toothpaste landing on the bristles. No cup, no sink, no water. Objects have no faces.
Attached images: the level background level8 (the girl, the toothbrush and the toothpaste) and card style reference. Only hands and forearms of the girl (and, only where the subject says so, her mouth and chin), never her eyes or her whole face; no bathroom scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `dentes-04.webp` — Escove os dentes.

```
Subject: Close view of a big happy open smile with clean white teeth (no face above the nose, only the mouth area and the chin, light skin with a rosy cheek), the blue toothbrush (blue handle, white bristles) brushing the teeth, white foam bubbles around it and two small curved motion lines. Her small light-skinned hand holds the brush. No cup, no tube, no sink. Objects have no faces.
Attached images: the level background level8 (the girl, the toothbrush and the toothpaste) and card style reference. Only hands and forearms of the girl (and, only where the subject says so, her mouth and chin), never her eyes or her whole face; no bathroom scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `dentes-05.webp` — Enxágue a boca com água.

```
Subject: The light blue plastic cup, full of clear light blue water, being lifted toward a smiling mouth (only the mouth area and the chin, light skin), held by her small light-skinned hand, two small water drops and a small sparkle. No toothbrush, no tube, no foam. Objects have no faces.
Attached images: the level background level8 (the girl, the toothbrush and the toothpaste) and card style reference. Only hands and forearms of the girl (and, only where the subject says so, her mouth and chin), never her eyes or her whole face; no bathroom scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `dentes-06.webp` — Lave a escova na água.

```
Subject: The small light-skinned hands of the girl from the attached reference (only hands and forearms, no face; if a sleeve shows, it is her short coral-pink pajama sleeve), holding the blue toothbrush (blue handle, white bristles) under a stream of light blue water from a silver tap, white foam rinsing off the bristles, small water drops splashing. No cup, no tube, no face. Objects have no faces.
Attached images: the level background level8 (the girl, the toothbrush and the toothpaste) and card style reference. Only hands and forearms of the girl (and, only where the subject says so, her mouth and chin), never her eyes or her whole face; no bathroom scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `dentes-07.webp` — Feche a tampa da pasta.

```
Subject: The small light-skinned hands of the girl from the attached reference (only hands and forearms, no face; if a sleeve shows, it is her short coral-pink pajama sleeve), screwing the light grey cap back onto the blue toothpaste tube with a white tooth emblem and a light grey cap, the cap touching the tube, a small curved arrow showing the turn. No toothbrush, no cup, no water. Objects have no faces.
Attached images: the level background level8 (the girl, the toothbrush and the toothpaste) and card style reference. Only hands and forearms of the girl (and, only where the subject says so, her mouth and chin), never her eyes or her whole face; no bathroom scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```

### `dentes-08.webp` — Guarde a escova no copo.

```
Subject: The small light-skinned hands of the girl from the attached reference (only hands and forearms, no face; if a sleeve shows, it is her short coral-pink pajama sleeve), placing a clean, shiny blue toothbrush (blue handle, white bristles) back into the light blue plastic cup, bristles up, a small curved arrow going down into the cup and one small sparkle on the bristles. No toothpaste tube, no sink, no water. Objects have no faces.
Attached images: the level background level8 (the girl, the toothbrush and the toothpaste) and card style reference. Only hands and forearms of the girl (and, only where the subject says so, her mouth and chin), never her eyes or her whole face; no bathroom scenery.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style reference exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes, a small soft grey oval shadow under the subject. Composition: one single subject, centered, filling about 70% of the frame, with clear empty margin on all sides so nothing touches the edges. Background: plain pure white (#FFFFFF), no scenery, no floor, no frame, no border, no card shape. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 100 px wide): bold simple silhouette, few details. Aspect ratio 4:3, 1200x900 px.
```
