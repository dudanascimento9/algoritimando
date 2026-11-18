# Prompts da revisão do professor (novembro de 2026)

**Prontos:** as 17 imagens dos dois lotes já estão no jogo. Os prompts ficam como registro.

Dois lotes para o Agent do Google Flow:

1. **Lições sem comparação:** 10 imagens novas de lição. As antigas mostravam "errado x certo" (X vermelho e check verde, ou personagem triste e feliz) e foram tiradas do jogo. Os arquivos antigos estão guardados em `img/licoes/comparativas/`.
2. **Semáforo de pedestre com duas luzes:** 7 edições de imagens que já existem. O semáforo passa a ter só duas luzes redondas, vermelha em cima e verde embaixo, sem bonequinho.

**Como entram no jogo:** salve cada imagem com o nome indicado. As lições vão para `img/licoes/` e aparecem sozinhas, sem mexer no código. Enquanto a imagem nova não chega, a tela de lição abre direto no texto.

---

## Lote 1: Lições sem comparação

**Regra de todas:** uma cena só, positiva e explicativa. Nada de dois quadros lado a lado, X vermelho, personagem triste, coisa caindo ou dando errado.

**Anexe como referência:**

- `img/guide.webp`, o Robô-guia;
- `img/licoes/sanduiche-5.webp`, o estilo das lições;
- os clientes:
  - `img/cliente0.webp`, o menino de avental (sanduíche e mãos);
  - `img/cliente1.webp`, o robô laranja;
  - `img/cliente2.webp`, a menina da mochila;
  - `img/cliente3.webp`, a abelha;
  - `img/level6.webp`, o menino de moletom amarelo da rua.

```
Batch: Licoes sem comparacao. Generate these images, in this order:

### sanduiche-1.webp
Scene: ONE single scene, no panels, no comparison. The curly-haired boy from the reference (apron, striped shirt) proudly holds a plate with a neat closed sandwich, the yellow cheese slice visible inside between the two white bread slices. Above the plate, three small floating icons in a gentle arc from left to right, linked by small dotted arrows: two bread slices, then a cheese slice landing on the bread, then the top bread slice closing it, showing the order in which the sandwich was built. The small round white Robô-guia robot with a black face screen and green eyes (from the reference) smiles beside him.
Attached images: character and object references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: soft plain cream (#FFFAF0) with at most a hint of floor or table, no detailed scenery. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive scene only: no red X, no sad or confused faces, nothing going wrong, never split into two panels. Allowed symbols: simple arrows, small dotted lines, small sparkles. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### robo-3.webp
Scene: ONE single scene, no panels, no comparison. The orange boxy robot from the reference stands on a light factory floor, turning in place toward a grey cube: a big curved arrow around its wheels shows the turn. From the robot, a straight dotted path now goes directly to the cube. Floating above the robot, a small round icon of a turning arrow glows softly, as if this tiny step was found and highlighted. The small round white Robô-guia robot with a black face screen and green eyes (from the reference) points at the glowing turn icon, happy.
Attached images: character and object references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: soft plain cream (#FFFAF0) with at most a hint of floor or table, no detailed scenery. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive scene only: no red X, no sad or confused faces, nothing going wrong, never split into two panels. Allowed symbols: simple arrows, small dotted lines, small sparkles. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### mochila-1.webp
Scene: ONE single scene, no panels, no comparison. A short left-to-right chain of three objects linked by curved dotted arrows: a yellow pencil going into the open lilac pencil case, then the lilac pencil case closed with its zipper, then the closed pencil case going into the open blue and yellow backpack. On the right, the girl from the reference (school uniform) smiles with the backpack, and a clean empty school desk next to her shines with a small sparkle: nothing was left behind.
Attached images: character and object references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: soft plain cream (#FFFAF0) with at most a hint of floor or table, no detailed scenery. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive scene only: no red X, no sad or confused faces, nothing going wrong, never split into two panels. Allowed symbols: simple arrows, small dotted lines, small sparkles. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### mochila-3.webp
Scene: ONE single scene, no panels, no comparison. Big blue and yellow backpack in the center, the girl's hands from the reference pulling its zipper wide open. The open zipper glows softly, highlighted like a small hidden step that was found, while the small round white Robô-guia robot with a black face screen and green eyes (from the reference) holds a magnifying glass over it. The lilac pencil case floats above, ready to go in, with a small curved arrow pointing into the open backpack.
Attached images: character and object references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: soft plain cream (#FFFAF0) with at most a hint of floor or table, no detailed scenery. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive scene only: no red X, no sad or confused faces, nothing going wrong, never split into two panels. Allowed symbols: simple arrows, small dotted lines, small sparkles, a magnifying glass. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### abelhas-1.webp
Scene: ONE single scene, no panels, no comparison. A round dotted flight path makes a loop: it starts at the yellow beehive hanging from a branch at the top left, goes to a big open sunflower at the right where the bee from the reference collects shiny golden nectar into its little basket, and comes back to the hive. Along the path, small dotted arrows show the direction. At the hive entrance, the same bee arrives happy with the basket full of golden nectar and small sparkles.
Attached images: character and object references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: soft plain cream (#FFFAF0) with at most a hint of grass, no detailed scenery. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive scene only: no red X, no sad or confused faces, nothing going wrong, never split into two panels. Allowed symbols: simple arrows, small dotted lines, small sparkles. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### abelhas-3.webp
Scene: ONE single scene, no panels, no comparison. The bee from the reference hovers above a small garden, looking carefully at the flowers below. Most are closed green buds, and one big sunflower is fully open, glowing softly, highlighted like a small hidden step that was found. The small round white Robô-guia robot with a black face screen and green eyes (from the reference) holds a magnifying glass over the open sunflower. A short straight dotted arrow goes from the bee to the open flower.
Attached images: character and object references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: soft plain cream (#FFFAF0) with at most a hint of grass, no detailed scenery. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive scene only: no red X, no sad or confused faces, nothing going wrong, never split into two panels. Allowed symbols: simple arrows, small dotted lines, small sparkles, a magnifying glass. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### maos-1.webp
Scene: ONE single scene, no panels, no comparison. A friendly path of four round stepping stones from left to right, each holding a tiny icon of one step in order: running tap water on hands, a light green soap bar, foamy scrubbing hands, and running tap water rinsing the foam away. The FIRST and the LAST stones both glow with the same soft blue light and have the same blue water drop, showing that water appears twice, at the start and at the end. The curly-haired boy from the reference (apron, striped shirt) stands at the end of the path smiling with clean hands, and the small round white Robô-guia robot with a black face screen and green eyes points at the two blue stones.
Attached images: character and object references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: soft plain cream (#FFFAF0) with at most a hint of floor, no detailed scenery. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive scene only: no red X, no sad or confused faces, nothing going wrong, never split into two panels. Allowed symbols: simple arrows, small dotted lines, small sparkles. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### maos-2.webp
Scene: ONE single scene, no panels, no comparison. In the center, ONE game card showing foamy scrubbing hands, surrounded by a big round blue circular arrow that loops around it, showing repetition. Along the loop, a ring of small round dots, and where the loop ends there is a small finish flag, showing the moment to stop. The curly-haired boy from the reference (apron, striped shirt) scrubs his foamy hands happily beside it, and the small round white Robô-guia robot with a black face screen and green eyes cheers.
Attached images: character and object references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: soft plain cream (#FFFAF0) with at most a hint of floor, no detailed scenery. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive scene only: no red X, no sad or tired faces, no pile of repeated cards, never split into two panels. Allowed symbols: a circular arrow, small dots, a small finish flag, small sparkles. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### maos-4.webp
Scene: ONE single scene, no panels, no comparison. The curly-haired boy from the reference (apron, striped shirt) at a white sink: with one wet hand he turns the tap CLOSED (a small curved arrow on the handle, no water running), and with the other he already reaches for a light blue towel hanging beside the sink. Above the closed tap, one single clean water drop with a tiny smile and small sparkles, showing the water that was saved. The small round white Robô-guia robot with a black face screen and green eyes gives a thumbs up.
Attached images: character and object references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: soft plain cream (#FFFAF0) with at most a hint of floor, no detailed scenery. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive scene only: no red X, no sad faces, no water running to waste, never split into two panels. Allowed symbols: simple arrows, small sparkles. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.

### rua-1.webp
Scene: ONE single scene, no panels, no comparison. The boy from the level6 reference (brown skin, curly dark brown hair, yellow hoodie, blue backpack, navy shorts, blue sneakers) stands at the edge of the sidewalk, right at the start of a zebra crossing, with one hand above his eyes and his head turned, two small curved arrows near his head pointing left and right. His feet are still on the sidewalk. The street is empty and calm, with only a tiny car far away in the distance, stopped. A short dotted arrow goes from his feet across the crossing, showing he will cross next. The small round white Robô-guia robot with a black face screen and green eyes floats beside him, smiling.
Attached images: level background (character, street, crossing) and style references.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, soft grey shadows. Background: the same street as the level6 reference, soft and slightly blurred, with sidewalk, crossing and the city far behind. Composition: clear and uncluttered, large shapes, readable at small size (about 400 px wide), the main idea understandable in 3 seconds without words. Positive and calm scene only: no red X, no scared faces, no car near the boy, never split into two panels. No traffic light in this image. Allowed symbols: simple arrows, small dotted lines. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 4:3, landscape, 1600x1200 px.
```

---

## Lote 2: Semáforo de pedestre com duas luzes

O professor pediu que a criança olhe a **cor da luz**, porque o semáforo com bonequinho não é comum no Brasil. O semáforo passa a ser de pedestre, com **duas luzes redondas**: vermelha em cima e verde embaixo, sem boneco. A regra do jogo não muda ("Se estiver vermelho, espere o verde").

**São edições:** para cada imagem, **anexe a própria imagem** (o Flow edita melhor assim) e, como referência do semáforo novo, a primeira que ficar pronta (`rua-04.webp`).

| Imagem | Onde está | O que muda |
|---|---|---|
| `rua-04.webp` | `img/passos/` | semáforo com 2 luzes apagadas |
| `rua-05.webp` | `img/passos/` | semáforo com 2 luzes, a vermelha acesa |
| `level6.webp` | `img/` | semáforo e balão de pensamento com a luz verde acesa |
| `win6.webp` | `img/` | semáforo com a luz verde acesa |
| `pic6.webp` | `img/` | semáforo com a luz vermelha acesa |
| `rua-2.webp` | `img/licoes/` | os 3 semáforos da lição |
| `rua-3.webp` | `img/licoes/` | os 2 semáforos da lição |

```
Batch: Semaforo de duas luzes. Generate these images, in this order:

### rua-04.webp
Edit the attached image. Keep EVERYTHING exactly the same (the boy, his pose, the sidewalk, the dotted line from his eyes, the white background, the style, the size), and change ONLY the traffic light: make it a pedestrian traffic light with ONLY TWO round lamps in a short dark grey vertical box on the same grey pole: a red round lamp on top and a green round lamp below. Both lamps are plain round circles with NO figure, NO person, NO symbol inside, and both are drawn dim and unlit. Aspect ratio 4:3.

### rua-05.webp
Edit the attached image. Keep EVERYTHING exactly the same (the boy, his pose, the three waiting dots, the sidewalk, the white background, the style, the size), and change ONLY the traffic light: make it a pedestrian traffic light with ONLY TWO round lamps in a short dark grey vertical box on the same grey pole, the same design as the attached rua-04 reference. The TOP lamp is lit bright red, a plain glowing red circle with NO figure inside. The bottom lamp is green but dark and unlit, a plain circle with NO figure. Aspect ratio 4:3.

### level6.webp
Edit the attached image. Keep EVERYTHING exactly the same (the boy, the robot, the street, the crossing, the city, the composition, the style, the size), and change ONLY the two traffic lights (the real one on the pole at the left and the small one inside the thought bubble): make both pedestrian traffic lights with ONLY TWO round lamps in a short dark grey vertical box, the same design as the attached rua-04 reference. In both, the bottom lamp is lit bright green, a plain glowing green circle with NO figure, NO person, NO symbol inside, and the top red lamp is dark and unlit. Keep the small green lines next to the light in the thought bubble. Aspect ratio 16:9.

### win6.webp
Edit the attached image. Keep EVERYTHING exactly the same (the happy boy, the robot, the green check badge, the star, the confetti, the street, the city, the composition, the style, the size), and change ONLY the traffic light on the pole at the left: make it a pedestrian traffic light with ONLY TWO round lamps in a short dark grey vertical box, the same design as the attached rua-04 reference. The bottom lamp is lit bright green, a plain glowing green circle with NO figure inside, and the top red lamp is dark and unlit. Aspect ratio 16:9.

### pic6.webp
Edit the attached image. Keep EVERYTHING exactly the same (the island of sidewalk and street, the boy thinking, the robot, the crossing, the cream background, the composition, the style, the size), and change ONLY the traffic light: make it a pedestrian traffic light with ONLY TWO round lamps in a short dark grey vertical box on the same pole, the same design as the attached rua-04 reference. The TOP lamp is lit bright red, a plain glowing red circle with NO figure inside, and the bottom green lamp is dark and unlit. Aspect ratio 16:10.

### rua-2.webp
Edit the attached image. Keep EVERYTHING exactly the same (the boy, the robot, the colorful question mark, the dotted arrows, the two round pictures on the right, the street, the composition, the style, the size), and change ONLY the three traffic lights: make all of them pedestrian traffic lights with ONLY TWO round lamps in a short dark grey vertical box, the same design as the attached rua-04 reference, plain round lamps with NO figure inside. Big traffic light at the left: both lamps dim and unlit (the boy still has to look). Top round picture: only the red top lamp lit, the boy waiting. Bottom round picture: only the green bottom lamp lit, the boy crossing. Aspect ratio 4:3.

### rua-3.webp
Edit the attached image. Keep EVERYTHING exactly the same (the adult and the boy holding hands on the crossing, the robot, the three round pictures with green check marks, the arrows, the street, the composition, the style, the size), and change ONLY the two traffic lights (the one on the pole at the left and the one inside the middle round picture): make both pedestrian traffic lights with ONLY TWO round lamps in a short dark grey vertical box, the same design as the attached rua-04 reference. In both, the bottom lamp is lit bright green, a plain glowing green circle with NO figure inside, and the top red lamp is dark and unlit. Aspect ratio 4:3.
```

**Se sair errado:** "keep everything else exactly the same", "only two lamps, no amber lamp", "no person or figure inside the lamps, just plain colored circles".
