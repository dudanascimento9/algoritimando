# Prompts das peças da montagem: Limonada, Escovar os dentes e Lavar as mãos

A montagem é a imagem que aparece ao lado do tabuleiro e mostra a consequência da ordem das cartas. Hoje ela existe em três chamados:

| Chamado | Como funciona |
|---|---|
| Sanduíche | as fatias se empilham |
| Mochila | as peças entram na cena |
| Robô e o cubo | o robô anda numa grade, feita só com código |

Nestes três chamados novos, a montagem vai ser uma **bancada com objetos que mudam de estado**. A cada carta, um objeto muda: o limão fica lavado, depois cortado, depois espremido. Se uma carta vem antes da hora, aparece uma estrela de "opa" no objeto, e a montagem para ali. A regra de quem vem antes é a mesma do jogo (`dependeDe`).

## Como as imagens entram

- **Fundo:** uma bancada vazia por chamado, em 4:3 (1600 × 1200).
- **Objetos:** cada objeto em cada estado é uma figura separada, com fundo branco liso, que eu recorto depois, como nas cartas. O jogo põe cada figura no lugar dela, por cima do fundo. Por isso **não precisam se encaixar sozinhas**.
- **Consistência:** os estados de um mesmo objeto precisam ter o **mesmo tamanho e o mesmo ângulo**. Gere o primeiro estado e, nos seguintes, anexe-o e peça "same object, same size, same angle, change only ...".
- **Lotes:** são 3 lotes, um por chamado, com 36 imagens no total. Gere cada lote na mesma conversa.

**Se o Flow recusar** ("talvez viole nossas políticas"), gere uma por vez e tire palavras que possam confundir o filtro. **Se sair errado:** "plain white background", "only the object, no hands", "same size and angle as the previous image", "remove all text".

---

## Lote 1: Fazer uma limonada (14 imagens)

**Anexe como referência:** `img/level7.webp` (a cozinha), as cartas `img/passos/limonada-01.webp` a `limonada-07.webp` (os limões, a jarra, a colher e o copo) e `img/passos/sanduiche-03.webp` (o estilo das cartas).

**Objetos e estados:**

| Objeto | Estados |
|---|---|
| Limão | inteiro → lavado → cortado → espremido |
| Jarra | vazia → só com água, ou só com suco → água e suco separados → limonada misturada |
| Açúcar | pote cheio → pote usado |
| Copo | vazio → cheio |

```
Batch: Montagem da limonada. Generate these images, in this order:

### limonada-base.webp
Scene: An empty kitchen counter seen from the front, slightly from above, matching the kitchen of the attached level7 image: a light wooden countertop across the lower half of the image, a soft tiled wall behind with a small window, warm light. On the left part of the counter, a small round wooden cutting board, empty. The rest of the counter is completely EMPTY and clear (objects will be placed on it later). No people, no lemons, no jug, no glass.
Style: cute flat cartoon illustration for an educational game for young students, matching the attached references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes. Never include: text, letters, numbers, logos, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### limonada-limao.webp
Subject: Two whole green Tahiti limes lying side by side, the same limes as the attached cards, with a few small brown specks of dirt on the peel (not washed yet).
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-limao-lavado.webp
Subject: The same two whole green limes as the previous image, same size and same angle, now clean and shiny, with small water drops on the peel and a little sparkle.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-limao-cortado.webp
Subject: The same two limes, same size and same angle, now each cut in half: four lime halves with the juicy pale green inside facing up, clean and shiny.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-limao-espremido.webp
Subject: The same four lime halves, same size and same angle, now squeezed: flattened and a little crumpled, the inside dry and pale, no juice left.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-jarra.webp
Subject: The same clear glass jug with a handle as the attached cards, EMPTY, standing upright, seen from the front.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-jarra-agua.webp
Subject: The same glass jug, same size and same angle, now filled about two thirds with clear cold water and a few ice cubes.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-jarra-suco.webp
Subject: The same glass jug, same size and same angle, with only a small layer of yellow-green lime juice at the bottom (about one fifth), the rest empty.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-jarra-agua-suco.webp
Subject: The same glass jug, same size and same angle, filled about two thirds: clear water with ice on top and a separate yellow-green layer of lime juice at the bottom, the two layers NOT mixed yet, with a clear line between them.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-jarra-limonada.webp
Subject: The same glass jug, same size and same angle, filled about two thirds with evenly mixed pale yellow-green lemonade and ice, the long wooden spoon from the attached cards standing inside it, two small swirl lines showing it was stirred.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-acucar.webp
Subject: A small round white sugar bowl, full of white sugar, with a small spoon resting in it.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-acucar-usado.webp
Subject: The same sugar bowl, same size and same angle, now with less sugar, the spoon gone, and a few sugar grains around it.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-copo.webp
Subject: The same plain drinking glass as the attached cards, EMPTY, standing upright.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### limonada-copo-cheio.webp
Subject: The same glass, same size and same angle, now full of pale yellow-green lemonade with ice and a lime slice on the rim.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no table, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.
```

---

## Lote 2: Escovar os dentes (11 imagens)

**Anexe como referência:** `img/level8.webp` (o banheiro), as cartas `img/passos/dentes-01.webp` a `dentes-08.webp` (a escova azul, a pasta e o copo) e `img/passos/sanduiche-03.webp` (o estilo).

**Objetos e estados:**

| Objeto | Estados |
|---|---|
| Copo da escova | com escova → vazio → com a escova limpa de volta |
| Escova | seca na bancada → com pasta → com espuma → limpa e molhada |
| Pasta | fechada ↔ aberta |
| Copo d'água | cheio → usado |

```
Batch: Montagem dos dentes. Generate these images, in this order:

### dentes-base.webp
Scene: An empty bathroom counter seen from the front, slightly from above, matching the bathroom of the attached level8 image: a light counter with a white sink in the middle and a closed tap, soft blue tiles behind, a small mirror edge at the top. The counter on the left and right of the sink is completely EMPTY and clear (objects will be placed on it later). No people, no toothbrush, no toothpaste, no cups.
Style: cute flat cartoon illustration for an educational game for young students, matching the attached references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes. Never include: text, letters, numbers, logos, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### dentes-porta-escova.webp
Subject: The same toothbrush cup as the attached cards, with the same blue toothbrush standing inside it, bristles up, dry.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-porta-vazio.webp
Subject: The same toothbrush cup, same size and same angle, now EMPTY, no toothbrush.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-porta-escova-limpa.webp
Subject: The same toothbrush cup, same size and same angle, with the same blue toothbrush back inside, bristles up, clean and a little wet with two small water drops and a sparkle.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-escova.webp
Subject: The same blue toothbrush lying flat and horizontal, bristles up, clean and dry.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-escova-pasta.webp
Subject: The same toothbrush, same size and same angle, with a neat stripe of white and blue toothpaste on the bristles.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-escova-espuma.webp
Subject: The same toothbrush, same size and same angle, the bristles covered in white foam bubbles (just used).
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-escova-limpa.webp
Subject: The same toothbrush, same size and same angle, clean, with small water drops on the bristles and a sparkle.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-pasta.webp
Subject: The same toothpaste tube as the attached cards, lying down, with its cap CLOSED.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-pasta-aberta.webp
Subject: The same toothpaste tube, same size and same angle, with the cap OFF and lying next to the tube, a tiny bit of paste at the open tip.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-copo-agua.webp
Subject: A small plain glass full of clean water.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### dentes-copo-agua-usado.webp
Subject: The same small glass, same size and same angle, now almost empty, with a few drops left.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no counter, no other objects. Never include: text, letters, numbers, faces, hands, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.
```

---

## Lote 3: Lavar as mãos (11 imagens)

**Anexe como referência:** `img/level5.webp` (o banheiro da Casa), as cartas `img/passos/maos-01.webp` a `maos-07.webp` (as mãos, a torneira, o sabonete verde-claro e a toalha azul-clara) e `img/passos/sanduiche-03.webp` (o estilo).

**Objetos e estados:**

| Objeto | Estados |
|---|---|
| Mãos | sujas → molhadas → com sabonete → com espuma → limpas e molhadas → secas |
| Torneira | fechada ↔ aberta com água |
| Toalha | pendurada → usada |

Nos níveis 1 e 2 não existe a carta de abrir a torneira, então ela já começa aberta.

```
Batch: Montagem das maos. Generate these images, in this order:

### maos-base.webp
Scene: A white bathroom sink seen from the front, slightly from above, matching the bathroom of the attached level5 image, but with NO tap at all (the tap is added later on top): an empty white basin on a pedestal, the light green soap bar resting on the left edge of the sink, a towel hook on the wall on the right with NO towel, soft tiles behind. The space above the basin is clear. No people, no hands, no water.
Style: cute flat cartoon illustration for an educational game for young students, matching the attached references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes. Never include: text, letters, numbers, logos, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### maos-torneira.webp
Subject: The same chrome tap as the attached cards, seen from the front, CLOSED, no water.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### maos-torneira-aberta.webp
Subject: The same tap, same size and same angle, now OPEN, with a steady stream of clear blue water falling straight down from the spout.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### maos-sujas.webp
Subject: A pair of child's hands with the same skin tone as the attached cards, palms facing the viewer, side by side, only the hands and a bit of the wrists, with a few small brown dirt smudges on the palms.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### maos-molhadas.webp
Subject: The same pair of hands, same size and same angle, now wet, with small water drops, still with a few faint smudges.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### maos-sabonete.webp
Subject: The same pair of hands, same size and same angle, wet, with a few small patches of soap and a couple of tiny bubbles, not scrubbed yet.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### maos-espuma.webp
Subject: The same pair of hands, same size and same angle, covered in white soap foam and many bubbles, rubbed together.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### maos-limpas.webp
Subject: The same pair of hands, same size and same angle, clean, no foam, wet with water drops, a small sparkle.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### maos-secas.webp
Subject: The same pair of hands, same size and same angle, clean and dry, with two small sparkles.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### maos-toalha.webp
Subject: The same light blue towel as the attached cards, hanging neatly folded from a hook.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.

### maos-toalha-usada.webp
Subject: The same light blue towel, same size and same angle, hanging a little crumpled and slightly damp after use.
Style: cute flat cartoon sticker illustration for an educational game, matching the attached references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. View: front view, slightly from above, the same angle in every image of this batch. Composition: only the object, centered, filling about 70% of the frame. Background: plain pure white (#FFFFFF), no shadow, no sink, no other objects. Never include: text, letters, numbers, faces, photorealism, 3D render. Aspect ratio 1:1, 1024x1024 px.
```
