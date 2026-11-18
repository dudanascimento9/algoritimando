# Prompts da animação final

Uma sequência de **6 quadros** que passa antes da tela "Missão cumprida", do mesmo jeito que a abertura: imagem grande, legenda embaixo, botão "Avançar" e "Pular". No jogo, cada quadro tem zoom lento; a festa e o crachá têm confete e música; entre o quadro 2 e o 3 entra o álbum completo, montado pelo jogo (`js/final.js`).

**Prontos:** os 6 quadros já estão no jogo, em 2000 × 1116 (o mesmo tamanho do `story1`). Os prompts ficam como registro.

**Arquivos:** `img/fim1.webp` a `img/fim6.webp`, formato 16:9 (1376 × 768), como os quadros da abertura (`story1` a `story4`).

**Anexe como referência** (estão no repositório):

- `img/story1.webp` (a cidade) e `docs/referencias/mapa-com-alfinetes.webp` (o mapa com os rostos);
- `img/guide.webp` (o Robô-guia);
- os moradores de corpo inteiro, `img/cliente0.webp` a `img/cliente5.webp`;
- `img/selos/repeticao.webp` e `img/selos/condicao.webp` (o estilo das medalhas);
- `img/ui/cracha-senior.webp` (o crachá de Agente Sênior);
- `img/story3.webp` (o quadro em primeira pessoa da abertura, para o quadro 5).

**Legendas** (aparecem no jogo, não na imagem):

1. "Um dia, o mapa amanheceu diferente: todos os chamados tinham sido atendidos."
2. "Os moradores prepararam uma surpresa na praça. Todos vieram agradecer!"
3. "Cada chamado ensinou uma ideia: ordem, passos escondidos, repetição, condição, ao mesmo tempo, abre e fecha."
4. "Agora o Robô-guia segue qualquer passo a passo. Foi você quem ensinou!"
5. "[nome], você agora é Agente Sênior de Algoritimando!"
6. "Os algoritmos estão em todo lugar. Que passo a passo você vai criar amanhã?"

**Se o Flow recusar ("talvez viole nossas políticas"):** é um filtro automático que às vezes erra. Gere um quadro por vez e, no que falhar, tire palavras que lembram despedida ou perigo ("goodbye", "ending", "sunset", "night"), reduza as referências anexadas e tente de novo. O `fim6` já foi reescrito assim.

**Se sair errado:** "remove all text", "same robot as the reference", "same characters as the references, full body", "keep everyone well inside the frame".

```
Batch: Animacao final. Generate these images, in this order:

### fim1.webp
Scene: The same friendly cartoon town map as the attached map, seen from above in the same three-quarter view, with the same places: the house with the dark roof and the vegetable garden, the factory, the crossing, the blue house with the orange roof, the school with purple roofs, the garden with sunflowers and the beehive, and the lemonade stand. It is a bright, sunny morning. Above each place stands the same small round pin as in the attached map, with a client's face inside, but now every pin has a small green check mark badge on its corner and a soft golden glow, as if every call in town was solved. Small sparkles float over the town. The small round white Robô-guia robot from the reference (egg-shaped white body, black face screen with green eyes and a small smile, two small round white arms, a thin antenna with a small green light on top) floats in the lower left corner, looking at the town with happy curved eyes.
Attached images: the map with the pins (copy the town and the pins, but remove every button, panel, title, name tag and number), the town map (story1) and the robot (guide).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached town map and character references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition: the whole image is shown; keep the robot and the pins well inside the frame, with a little margin from the edges. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.

### fim2.webp
Scene: A small town square in front of the lemonade stand with the yellow and white striped awning, decorated for a party: colorful paper bunting between two trees and a few balloons. All the town's clients from the attached references stand together in a happy row, full body, cheering and waving at the viewer, each holding something from their own story: the curly-haired boy with the apron and striped shirt holds a plate with a finished sandwich (bread, cheese, ham); the orange boxy robot holds a grey cube with its claws; the girl with black hair and school uniform wears her blue and yellow backpack; the fluffy round bee holds its small basket full of golden honey; the boy with curly hair and the yellow hoodie holds a glass of lemonade; the girl with the brown bun and pink scrunchie, in coral pajamas, holds a blue toothbrush. The small round white Robô-guia robot floats in the middle, arms up, celebrating. Confetti in the air.
Attached images: the clients (cliente0 to cliente5), the robot (guide) and the town map (story1, for the lemonade stand and the town look).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached town map and character references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition: the whole image is shown; every character fully visible, feet included, well inside the frame, with a little margin from the edges; the characters fill the lower two thirds of the image, the bunting and balloons the top. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.

### fim3.webp
Scene: Night sky over the town, deep blue with soft stars, the town's rooftops small and cozy at the bottom with warm yellow windows. In the sky, a big gentle arc of six round golden medals glows like a constellation, each with one bold simple dark brown symbol in the middle: three stepping stones in a row with small arrows (order), a magnifying glass (hidden steps), a circular arrow (repetition), a path that splits in two (condition), two paths that run side by side and join (at the same time), and a pair of brackets like an opening and a closing (open and close). Thin dotted lines connect the medals like stars in a constellation. The small round white Robô-guia robot floats in front at the bottom center, seen from behind, looking up at the medals, its antenna light glowing green.
Attached images: the medal style (repeticao, condicao), the town map (story1, for the rooftops) and the robot (guide).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes. Composition: the whole image is shown; all six medals fully visible and well inside the frame, each one big and readable. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.

### fim4.webp
Scene: A bright morning in the town street. A long ribbon of small square step cards floats in a gentle wave from left to right, each card with a tiny simple icon (bread, a soap bar, a toothbrush, a lemon, a backpack, a traffic light with a green lamp), connected by small dotted arrows. The small round white Robô-guia robot from the reference floats along the ribbon, following the cards one by one with confident happy eyes, one arm pointing at the next card. Behind it, the town's clients from the references watch from the sidewalk, smiling and clapping: the curly-haired boy with the apron, the girl with the school uniform and the boy with the yellow hoodie. Small sparkles along the path the robot already followed.
Attached images: the robot (guide), the clients (cliente0, cliente2, cliente4) and the town map (story1, for the street look).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached town map and character references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition: the whole image is shown; the robot and the ribbon of cards in the upper and middle part, the clients small at the bottom, everything well inside the frame. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.

### fim5.webp
Scene: First-person view, as if the viewer is the agent, the same framing as the attached story3 image: the small round white Robô-guia robot floats close in front of the viewer, smiling with happy curved eyes, holding out with both hands a shiny golden agent badge on a light blue lanyard, the same badge as the attached senior badge reference, with a small golden ribbon rosette on top. Behind the robot, in the town square decorated with bunting, all the town's clients from the references stand in a row clapping and cheering. Golden confetti and sparkles fall everywhere.
Attached images: story3 (framing), the senior badge (cracha-senior), the robot (guide) and the clients (cliente0 to cliente5).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached town map and character references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition: the whole image is shown; the robot and the badge big in the center, the clients smaller behind, everyone well inside the frame. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.

### fim6.webp
Scene: A bright golden afternoon over the friendly cartoon town, seen from a small green hill with grass and a few flowers in the foreground. Warm light yellow and peach sky with soft clouds. The houses, the school with purple roofs, the factory and the garden with sunflowers are small in the middle distance. In the foreground, the small round white Robô-guia robot from the reference floats happily above the grass, waving at the viewer with one arm, big smile and happy curved eyes, its antenna light glowing green. A few small square cards with tiny simple icons (a sandwich, a soap bar, a lemon, a backpack) float in the sky like colorful kites, connected by small dotted lines, as if step-by-step plans are everywhere in town. Cheerful and cozy mood.
Attached images: the town map (story1) and the robot (guide).
Style: cute flat cartoon illustration for an educational game for young students, matching the attached town map and character references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes. Composition: the whole image is shown; the robot big in the lower left, the town in the middle distance, everything well inside the frame. No text, no letters, no numbers, no logos. Aspect ratio 16:9, landscape, 1376x768 px.
```
