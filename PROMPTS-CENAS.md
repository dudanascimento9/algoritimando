# Prompts das cenas dos chamados

13 imagens para `img/`: três para cada chamado novo (Lavar as mãos, Atravessar a rua, Fazer uma limonada e Escovar os dentes) e o retrato da menina de Escovar os dentes. **Prontas:** todas as imagens dos chamados novos, e os retratos `who5` e `who6`. Os prompts ficam como registro. Sem elas o jogo funciona, mas mostra um quadro tracejado no cartão do chamado e um fundo liso nas telas do nível e da lição. No fim do arquivo estão os prompts das ilustrações dos quatro chamados originais (`pic1` a `pic4`), no mesmo padrão de mini-cena (já aplicadas).

| Imagem | Onde aparece | Modelo que já existe | Campo em `js/situacoes.js` |
|---|---|---|---|
| ilustração do chamado | cartão do chamado, no painel do lugar | `img/pic3.webp` (a mochila) | `cena` |
| fundo do nível | tela do nível, atrás do tabuleiro | `img/level3.webp` | `fundo` |
| fundo da lição | tela de "Parabéns", atrás do painel | `img/win3.webp` | `fundoConclusao` |

## Antes de começar

- **Gere um chamado por vez, na mesma conversa**, sempre anexando as referências indicadas (estão no repositório). Gere primeiro as cartas do chamado (`PROMPTS-CARTAS.md`): os objetos daqui precisam ser os mesmos.
- **A ilustração do chamado vem primeiro.** Quando ela ficar boa, anexe-a ao gerar o fundo do nível: é ela que aparece dentro do balão de pensamento.
- **Nos dois fundos, o lado direito fica vazio e desfocado de propósito.** No PC o tabuleiro e o painel da lição são desenhados por cima dele. Se o gerador puser personagem ou objeto forte à direita, peça de novo.
- **Nada de texto** em nenhuma das imagens.
- **Personagens:** Lavar as mãos é do menino de avental (`img/cliente0.webp`), na Casa, e os fundos dele já estão prontos. Escovar os dentes é da menina de pijama coral do `img/level8.webp` (o retrato `who6` já foi recortado dele). **Atravessar a rua e Fazer uma limonada são do menino de moletom amarelo** do `img/level6.webp` (pele morena, cabelo cacheado castanho-escuro, moletom amarelo, bermuda azul-marinho, tênis azul). Na rua ele usa a mochila azul; na cozinha, não.

**A ilustração do chamado (`picN`)** é a imagem do cartão, no painel do lugar. Nos chamados novos ela é uma **mini-cena do pedido**, não um objeto solto:

- **Um pedacinho do lugar, como uma ilha:** um quadrado de chão visto de cima e de lado (três quartos), com no máximo uma parede baixa atrás. Tudo acontece em cima dele. É o mesmo jeito das cartas da rua com a calçada, que ficaram boas.
- **O cliente grande, fazendo o pedido:** mãos sujas, calor e copo vazio, sono na hora de escovar, a dúvida diante do semáforo. Ao lado, o Robô-guia oferecendo ajuda.
- **Três ou quatro objetos grandes**, os mesmos das cartas. Nada de detalhe miúdo: o cartão mostra a imagem com uns 190 px.
- **Fundo creme liso** (#FDF3E6) em volta da ilha, igual ao cartão.
- **Anexe** o retrato ou o fundo do personagem, o `img/guide.webp`, as cartas do chamado e, como modelo de estilo, `img/passos/rua-01.webp` e `img/passos/rua-05.webp`.
- Gere **três ou quatro versões** e escolha olhando a imagem bem pequena.
- Se sair errado: "make the characters bigger", "only one floor tile, nothing outside it", "fewer objects, bigger shapes", "flat cream background", "same boy as the reference", "the robot must be the same as the reference".

**Se sair errado:** "keep the right side empty and blurred", "move the characters to the left", "remove all text", "same boy as the level6 reference", "simpler, fewer objects".

## Depois de gerar

Estas imagens **não entram sozinhas** no jogo, ao contrário das cartas e das lições: é preciso salvar o arquivo com o nome indicado e acrescentar o campo no chamado, em `js/situacoes.js`. Para Lavar as mãos, por exemplo:

```js
cliente: 'img/who1.webp',
cena: 'img/pic5.webp',
fundo: 'img/level5.webp',
fundoConclusao: 'img/win5.webp',
```

Se preferir, mande as imagens no chat com o nome de cada uma: a conversão para WebP, o ajuste de tamanho e esses campos são feitos na hora de aplicar.

## Lavar as mãos (Banheiro)

**Arquivos:** `pic5.webp`, `level5.webp`, `win5.webp`. **Prontos:** os três.

**Anexe como referência:** `img/pic3.webp` (estilo da ilustração do chamado), `img/level3.webp` e `img/win3.webp` (composição dos fundos), `img/cliente0.webp` (o menino), `img/guide.webp` (Robô-guia) e, quando existirem, as cartas `img/passos/maos-01.webp` a `maos-07.webp`.

**Consistência:** a mesma pia branca com torneira prateada de alavanca, o mesmo sabonete em barra verde-claro e a mesma toalha azul-clara das cartas.

### `pic5.webp` — ilustração do chamado

```
Subject: The moment the call arrives: a bathroom diorama (a tile of pale cream floor with a low wall of white tiles behind). On it stands the white pedestal sink with the silver lever tap and the pale green soap bar from the attached hand-washing cards, and a light blue towel hanging on a small rail on the wall. The curly-haired boy from the reference (apron, striped shirt) stands in front of the sink holding up his two hands, covered in big brown mud smudges, looking at them with a funny 'oops' face (eyebrows up, small open mouth). A few drops of mud fall on the floor. The small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) floats next to him, holding the soap bar out to him with one hand and smiling. Two or three soap bubbles float between them.
Attached images: the boy (cliente0), the robot (guide), the cards maos-01 and maos-03 (sink, tap, soap) and the style references (the street cards rua-01 and rua-05).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached character and card references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition (very important): a small floating diorama, like a thick square tile of floor cut out of the place and seen in a three-quarter view from slightly above, with only one low wall piece at the back where needed. Everything sits on this tile: one or two characters and three or four big, clear objects. The diorama is centered and fills about 90% of the image width, with a thin even margin. The main character is big (about half the height of the image) and is clearly doing something. A soft grey oval shadow under the tile. Background around the diorama: flat solid cream (#FDF3E6) from edge to edge, no sky, no scenery outside the tile, no frame, no border. Readability: it must be understandable at 190 px wide: big shapes, strong silhouettes, one clear action, no tiny details. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:10, landscape, 1240x784 px.
```

### `level5.webp` — fundo do nível

```
Scene: A bright, tidy home bathroom. On the left, the curly-haired boy from the reference (apron, striped shirt) stands in front of a white sink with a silver lever tap, showing his two hands, which are a little dirty with small brown smudges, and looking at them with a curious smile. Next to him floats the small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference). Above the boy, a soft cream thought bubble contains the sink with the soap bar and bubbles from the attached illustration. On the wall near the sink hangs a light blue towel. The rest of the bathroom (pale tiles, a window, a bathtub) continues to the right, soft and blurred.
Attached images: the chamado illustration (pic5), composition reference (level3), the boy, the robot.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A) on the characters and on the objects near them, soft warm pastel colors, simple flat shading, rounded friendly shapes. Layout (very important): the characters, the thought bubble and every sharp detail stay inside the LEFT 40% of the image. The RIGHT 60% is the same room continuing, but soft, pale and heavily blurred, with no characters, no strong shapes and no strong colors: the game draws its board and cards on top of that area. Lighting: warm soft daylight coming from the left. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.
```

### `win5.webp` — fundo da lição

```
Scene: The same bright home bathroom. On the left, the curly-haired boy from the reference (apron, striped shirt) proudly holds up his two clean hands with small sparkles around them, smiling with his mouth open, the light blue towel over his shoulder. Next to him the small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) cheers with its arms up and happy curved eyes. Above them, a round green badge with a white check mark and a shiny gold star with small sparkles and a few pieces of pastel confetti. The white sink with the closed tap is behind them. The rest of the bathroom continues to the right, soft and blurred.
Attached images: composition reference (win3), the boy, the robot.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A) on the characters and on the objects near them, soft warm pastel colors, simple flat shading, rounded friendly shapes. Layout (very important): the characters, the green check, the star and every sharp detail stay inside the LEFT 55% of the image, in its upper two thirds. The RIGHT 45% is the same place continuing, but soft, pale and heavily blurred, with no characters and no strong shapes: the game draws the lesson panel on top of that area. Mood: happy, a small celebration. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1600x893 px.
```

## Atravessar a rua (Caminho da escola)

**Arquivos:** `pic6.webp`, `level6.webp`, `win6.webp`. **Prontos:** `pic6`, `level6` e `win6`. Os prompts abaixo ficam só como registro.

**Anexe como referência:** `img/pic3.webp` (estilo da ilustração do chamado), `img/level3.webp` e `img/win3.webp` (composição dos fundos), `img/level6.webp` (o menino de moletom amarelo, a rua, o semáforo e a faixa), `img/guide.webp` (Robô-guia), `img/story1.webp` (as ruas e casas da cidade) e, quando existirem, as cartas `img/passos/rua-01.webp` a `rua-06.webp`.

**Consistência:** a mesma faixa de pedestres (listras brancas no asfalto cinza) e o mesmo semáforo de pedestres do `level6.webp` e das cartas (caixa escura com três luzes: vermelha em cima, amarela no meio e o boneco verde andando embaixo). O menino de moletom amarelo com a mochila azul nas costas.

**Cuidado com o tom:** o menino está sempre na calçada ou já do outro lado. Nenhum carro perto dela, nenhum susto.

### `pic6.webp` — ilustração do chamado

**Pronta:** a mini-cena com o menino e o Robô-guia já está no jogo.

```
Subject: The moment the call arrives: a street-corner diorama (a tile of light grey tiled sidewalk with a curb, and in front of it a piece of dark grey asphalt with a white zebra crossing). On the corner stands the pedestrian traffic light from the reference (dark grey box on a grey pole, three round lamps), with only the TOP lamp lit bright red with a standing figure. The boy from the reference (brown skin, curly dark brown hair, yellow hoodie, blue backpack, navy shorts, blue sneakers) stands still on the sidewalk right at the edge of the crossing, both feet together, looking up at the red light with a thoughtful face and one finger on his chin. The small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) floats beside him, pointing up at the traffic light. No cars anywhere.
Attached images: the level background (level6: the boy, the traffic light, the crossing), the robot (guide) and the other chamado illustrations as style references (pic1, pic5, pic7 and pic8: same diorama size, angle, outline and colors).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached character and card references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition (very important): a small floating diorama, like a thick square tile of floor cut out of the place and seen in a three-quarter view from slightly above, with only one low wall piece at the back where needed. Everything sits on this tile: one or two characters and three or four big, clear objects. The diorama is centered and fills about 90% of the image width, with a thin even margin. The main character is big (about half the height of the image) and is clearly doing something. A soft grey oval shadow under the tile. Background around the diorama: flat solid cream (#FDF3E6) from edge to edge, no sky, no scenery outside the tile, no frame, no border. Readability: it must be understandable at 190 px wide: big shapes, strong silhouettes, one clear action, no tiny details. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:10, landscape, 1240x784 px.
```

### `level6.webp` — fundo do nível (já pronto)

Já existe (o menino de moletom amarelo, o semáforo e a faixa). Não precisa gerar: ele é a referência das outras imagens da rua e da limonada.

### `win6.webp` — fundo da lição

```
Scene: The same calm street corner as the attached level background (light grey tiled sidewalk, white zebra stripes on dark grey asphalt, the pedestrian traffic light, a soft pastel city skyline, green trees and a bus stop far behind), now seen from the other sidewalk: the boy from the attached level background (brown skin, curly dark brown hair, yellow hoodie, navy shorts, blue sneakers, blue backpack on his back) has already crossed and stands safely on the sidewalk, giving a thumbs up with a big smile. Next to her the small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) cheers with its arms up and happy curved eyes. Above them, a round green badge with a white check mark and a shiny gold star with small sparkles and a few pieces of pastel confetti. Behind them, the zebra crossing he just used and the pedestrian traffic light with the green walking figure lit. The street and the houses continue to the right, soft and blurred, with no cars.
Attached images: composition reference (win3), the level background (the boy, the street, the traffic light), the robot.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A) on the characters and on the objects near them, soft warm pastel colors, simple flat shading, rounded friendly shapes. Layout (very important): the characters, the green check, the star and every sharp detail stay inside the LEFT 55% of the image, in its upper two thirds. The RIGHT 45% is the same place continuing, but soft, pale and heavily blurred, with no characters and no strong shapes: the game draws the lesson panel on top of that area. Mood: happy, a small celebration. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1600x893 px.
```

## Fazer uma limonada (Cozinha)

**Arquivos:** `pic7.webp`, `level7.webp`, `win7.webp`. **Prontos:** os três.

**Anexe como referência:** `img/pic3.webp` (estilo da ilustração do chamado), `img/level1.webp` e `img/win1.webp` (a mesma cozinha do sanduíche, e a composição dos fundos), `img/level6.webp` (o menino de moletom amarelo; só o menino, a rua não entra), `img/guide.webp` (Robô-guia) e, quando existirem, as cartas `img/passos/limonada-01.webp` a `limonada-07.webp`.

**Consistência:** a MESMA cozinha do sanduíche (bancada de madeira, janela, geladeira lilás). Os mesmos limões verdes, a mesma jarra de vidro com alça e o mesmo copo das cartas. O menino de moletom amarelo do `level6.webp`, sem a mochila, porque está em casa.

### `pic7.webp` — ilustração do chamado

```
Subject: The moment the call arrives: a kitchen diorama (a tile of warm wooden floor with a low wooden kitchen counter on it). The boy from the reference (brown skin, curly dark brown hair, yellow hoodie, navy shorts, blue sneakers, no backpack) stands at the counter, hot and thirsty: one hand fanning his face, a small drop of sweat on his forehead, the other hand holding up an empty drinking glass, with a hopeful smile. A small round cartoon sun with soft rays floats above him (no face). On the counter: three whole green limes, an empty clear glass pitcher with a handle and a glass citrus juicer. The small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) floats beside the counter, happily holding up one green lime.
Attached images: the boy (the level background level6, for his look only; do not copy the street), the robot (guide), the lemonade cards if they exist (limes, pitcher, juicer) and the style references (the street cards rua-01 and rua-05).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached character and card references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition (very important): a small floating diorama, like a thick square tile of floor cut out of the place and seen in a three-quarter view from slightly above, with only one low wall piece at the back where needed. Everything sits on this tile: one or two characters and three or four big, clear objects. The diorama is centered and fills about 90% of the image width, with a thin even margin. The main character is big (about half the height of the image) and is clearly doing something. A soft grey oval shadow under the tile. Background around the diorama: flat solid cream (#FDF3E6) from edge to edge, no sky, no scenery outside the tile, no frame, no border. Readability: it must be understandable at 190 px wide: big shapes, strong silhouettes, one clear action, no tiny details. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:10, landscape, 1240x784 px.
```

### `level7.webp` — fundo do nível

```
Scene: The same warm home kitchen as in the kitchen reference (wooden counter, window, lilac fridge). On the left, the boy from the attached level background (brown skin, curly dark brown hair, yellow hoodie, navy shorts, blue sneakers; no backpack, he is at home) stands at the counter looking thirsty and hopeful, holding an empty glass. On the counter in front of him are three whole green limes and an empty clear glass jug. Next to him floats the small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference). Above the boy, a soft cream thought bubble contains the jug of lemonade from the attached illustration. The rest of the kitchen continues to the right, soft and blurred.
Attached images: the chamado illustration (pic7), the kitchen and composition reference (level1), the level background (only for the boy's look; do not copy the street), the robot.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A) on the characters and on the objects near them, soft warm pastel colors, simple flat shading, rounded friendly shapes. Layout (very important): the characters, the thought bubble and every sharp detail stay inside the LEFT 40% of the image. The RIGHT 60% is the same room continuing, but soft, pale and heavily blurred, with no characters, no strong shapes and no strong colors: the game draws its board and cards on top of that area. Lighting: warm soft daylight coming from the left. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.
```

### `win7.webp` — fundo da lição

```
Scene: The same warm home kitchen as in the kitchen reference. On the left, the boy from the attached level background (brown skin, curly dark brown hair, yellow hoodie, navy shorts, blue sneakers; no backpack, he is at home) happily raises a glass of pale yellow-green lemonade with an ice cube and a lime slice on the rim, smiling with his mouth open. Next to him the small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) cheers with its arms up and happy curved eyes. Above them, a round green badge with a white check mark and a shiny gold star with small sparkles and a few pieces of pastel confetti. On the counter behind them, the glass jug of lemonade, half full. The rest of the kitchen continues to the right, soft and blurred.
Attached images: the kitchen and composition reference (win1), the level background (only for the boy's look; do not copy the street), the robot.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A) on the characters and on the objects near them, soft warm pastel colors, simple flat shading, rounded friendly shapes. Layout (very important): the characters, the green check, the star and every sharp detail stay inside the LEFT 55% of the image, in its upper two thirds. The RIGHT 45% is the same place continuing, but soft, pale and heavily blurred, with no characters and no strong shapes: the game draws the lesson panel on top of that area. Mood: happy, a small celebration. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1600x893 px.
```

## Escovar os dentes (Banheiro da Casa azul)

**Arquivos:** `who6.webp` (retrato da menina), `pic8.webp`, `level8.webp`, `win8.webp`.

**Prontos:** `who6`, `pic8`, `level8` e `win8`. Os prompts ficam como registro.

**Anexe como referência:** `img/level8.webp` (a menina, o banheiro, a escova e a pasta), `img/guide.webp` (Robô-guia), `img/win5.webp` (composição do fundo da lição) e, quando existirem, as cartas `img/passos/dentes-01.webp` a `dentes-08.webp`.

**Personagem:** a menina do `level8`: pele clara com bochechas rosadas, cabelo castanho ondulado com franja e um coque no alto preso com xuxinha rosa, pijama coral de manga curta com gola e um coelhinho branco no peito, short coral, meias brancas e sapatinhos coral.

**Consistência:** o MESMO banheiro do `level8` (paredes lilás-azuladas, azulejos azul-claros na metade de baixo, bancada de madeira com pia branca, janelinha, prateleira de madeira com planta, toalha azul-clara com dentinho, piso pêssego, tapete azul), de dia. A mesma escova azul de cerdas brancas, o mesmo tubo de pasta azul com dentinho branco e tampa cinza-clara e o copo de plástico azul-claro das cartas.

### `level8.webp` — fundo do nível (já pronto)

Já existe. É a referência das outras imagens deste chamado.

### `who6.webp` — retrato da menina (já pronto)

Recortado do `level8`. Não precisa gerar.

### `pic8.webp` — ilustração do chamado

```
Subject: The moment the call arrives: a diorama of the bathroom from the attached level background: a tile of pale peach floor, a low piece of lavender-blue wall with light blue tiles behind it, and on the tile the wooden vanity with the white sink and the silver tap. On the vanity: the light blue plastic cup holding the blue toothbrush (blue handle, white bristles) and the blue toothpaste tube with a white tooth emblem and a light grey cap, closed. The girl from the attached reference (about 7 years old, light skin with rosy cheeks, shoulder-length wavy brown hair with bangs and a messy bun on top tied with a pink scrunchie, coral-pink short-sleeved pajama top with a round collar and a small white bunny on the chest, coral-pink pajama shorts, white socks, coral-pink shoes with white soles) stands in front of the vanity, just after breakfast, with a tiny crumb on her cheek, pointing at her big open smile with one finger and holding the light blue towel in the other hand, with a cheerful 'my turn!' face. The small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) floats beside her, holding the toothbrush out to her. Two or three soap bubbles float near the sink.
Attached images: the level background level8 (the girl, the bathroom, the toothbrush and the toothpaste), the robot (guide), the cards dentes-01 to dentes-03 if they exist and the style references (the street cards rua-01 and rua-05).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached character and card references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition (very important): a small floating diorama, like a thick square tile of floor cut out of the place and seen in a three-quarter view from slightly above, with only one low wall piece at the back where needed. Everything sits on this tile: one or two characters and three or four big, clear objects. The diorama is centered and fills about 90% of the image width, with a thin even margin. The main character is big (about half the height of the image) and is clearly doing something. A soft grey oval shadow under the tile. Background around the diorama: flat solid cream (#FDF3E6) from edge to edge, no sky, no scenery outside the tile, no frame, no border. Readability: it must be understandable at 190 px wide: big shapes, strong silhouettes, one clear action, no tiny details. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:10, landscape, 1240x784 px.
```

### `win8.webp` — fundo da lição

```
Scene: The bathroom from the attached level background (lavender-blue walls, light blue tiles on the lower half of the wall, a wooden vanity with a white sink and a silver tap, a small window, a wooden shelf with a green plant, a light blue towel with a white tooth emblem on a rail, pale peach floor tiles, a blue bath mat), in soft daylight, the same room and the same camera angle as the attached level background. On the left, the girl from the attached reference (about 7 years old, light skin with rosy cheeks, shoulder-length wavy brown hair with bangs and a messy bun on top tied with a pink scrunchie, coral-pink short-sleeved pajama top with a round collar and a small white bunny on the chest, coral-pink pajama shorts, white socks, coral-pink shoes with white soles) gives a big proud smile showing clean, shiny teeth with small sparkles, holding the light blue towel. Behind her, the vanity is tidy: the blue toothbrush (blue handle, white bristles) standing clean in the light blue plastic cup and the blue toothpaste tube with a white tooth emblem and a light grey cap closed. Next to her the small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) cheers with its arms up and happy curved eyes. Above them, a round green badge with a white check mark and a shiny gold star with small sparkles and a few pieces of pastel confetti. The rest of the bathroom (the towel rail, the toilet, the shower) continues to the right, soft and blurred.
Attached images: the level background level8 (the room, the girl, the robot), composition reference (win5), the robot.
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached references exactly: thick dark brown outlines (#3B2A2A) on the characters and on the objects near them, soft warm pastel colors, simple flat shading, rounded friendly shapes. Layout (very important): the characters, the green check, the star and every sharp detail stay inside the LEFT 55% of the image, in its upper two thirds. The RIGHT 45% is the same place continuing, but soft, pale and heavily blurred, with no characters and no strong shapes: the game draws the lesson panel on top of that area. Mood: happy, a small celebration. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1600x893 px.
```

## Ilustrações dos quatro chamados originais (versão nova)

**Prontas:** as quatro já estão no jogo, no padrão das mini-cenas dos chamados novos. Os prompts ficam como registro.

**Dica:** gere as quatro na mesma conversa, uma depois da outra, e anexe a primeira que ficar boa nas seguintes. Assim a ilha de chão sai do mesmo tamanho e do mesmo ângulo em todas.

### `pic1.webp` — Fazer um sanduíche (Casa)

**Anexe:** `img/cliente0.webp` (o menino de avental), `img/guide.webp`, as cartas `img/passos/sanduiche-01.webp` a `sanduiche-04.webp` (pão, queijo, presunto) e, como modelo de estilo, `img/passos/rua-01.webp` e `img/passos/rua-05.webp`.

```
Subject: The moment the call arrives: a kitchen diorama (a tile of warm wooden floor with a low wooden kitchen counter on it and a small piece of wall with a window behind). The curly-haired boy from the reference (apron, striped shirt) stands at the counter holding out his empty white plate with both hands, his tummy rumbling (two small curved lines near his tummy) and a hungry, hopeful smile. On the counter, big and clear, the ingredients from the attached cards waiting in a row: two slices of white bread, a yellow slice of cheese and a pink slice of ham. The small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) floats beside the counter holding up one slice of bread, ready to help.
Attached images: the boy (cliente0), the robot (guide), the sandwich cards (bread, cheese, ham) and the style references (the street cards rua-01 and rua-05).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached character and card references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition (very important): a small floating diorama, like a thick square tile of floor cut out of the place and seen in a three-quarter view from slightly above, with only one low wall piece at the back where needed. Everything sits on this tile: one or two characters and three or four big, clear objects. The diorama is centered and fills about 90% of the image width, with a thin even margin. The main character is big (about half the height of the image) and is clearly doing something. A soft grey oval shadow under the tile. Background around the diorama: flat solid cream (#FDF3E6) from edge to edge, no sky, no scenery outside the tile, no frame, no border. Readability: it must be understandable at 190 px wide: big shapes, strong silhouettes, one clear action, no tiny details. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:10, landscape, 1240x784 px.
```

### `pic2.webp` — O robô e o cubo (Fábrica)

**Anexe:** `img/cliente1.webp` (o robô laranja), `img/guide.webp`, o fundo `img/level2.webp` (o cubo cinza e a base redonda verde) e, como modelo de estilo, `img/passos/rua-01.webp` e `img/passos/rua-05.webp`.

```
Subject: The moment the call arrives: a factory diorama (a tile of light grey factory floor with a yellow guide line painted on it and a low grey wall with a round porthole window behind). On the left of the tile sits a big grey cube. On the right, a round flat platform glowing soft green, empty. The orange boxy robot from the reference (screen face with a happy smile, grey claw hands, small black wheels) stands between them, one claw pointing at the cube and the other at the green platform, with a confused face and a small question mark above its head. A dotted arrow on the floor goes from the cube to the platform. The small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) floats beside it, giving a friendly thumbs up.
Attached images: the orange robot (cliente1), the Robô-guia (guide), the factory background (level2: the cube and the green platform) and the style references (the street cards rua-01 and rua-05).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached character and card references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition (very important): a small floating diorama, like a thick square tile of floor cut out of the place and seen in a three-quarter view from slightly above, with only one low wall piece at the back where needed. Everything sits on this tile: one or two characters and three or four big, clear objects. The diorama is centered and fills about 90% of the image width, with a thin even margin. The main character is big (about half the height of the image) and is clearly doing something. A soft grey oval shadow under the tile. Background around the diorama: flat solid cream (#FDF3E6) from edge to edge, no sky, no scenery outside the tile, no frame, no border. Readability: it must be understandable at 190 px wide: big shapes, strong silhouettes, one clear action, no tiny details. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:10, landscape, 1240x784 px.
```

### `pic3.webp` — Arrumar a mochila (Escola)

**Anexe:** `img/cliente2.webp` (a menina), `img/guide.webp`, as cartas `img/passos/mochila-01.webp` a `mochila-08.webp` (mochila azul e amarela, estojo lilás, caderno, lápis, borracha) e, como modelo de estilo, `img/passos/rua-01.webp` e `img/passos/rua-05.webp`.

```
Subject: The moment the call arrives: a classroom diorama (a tile of light wooden floor with a small school desk on it and a piece of pale green wall behind). The girl from the reference (black hair in two low pigtails, purple sailor school uniform with a red neckerchief, dark pleated skirt, white socks, black shoes) stands next to the desk with both hands on her cheeks, a little worried, looking at the mess on the desk: the open blue and yellow backpack from the attached cards, the lilac pencil case open, a notebook, a pencil and an eraser scattered around. The small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) floats beside the desk holding the lilac pencil case, smiling.
Attached images: the girl (cliente2), the robot (guide), the backpack cards (backpack, pencil case, notebook, pencil, eraser) and the style references (the street cards rua-01 and rua-05).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached character and card references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition (very important): a small floating diorama, like a thick square tile of floor cut out of the place and seen in a three-quarter view from slightly above, with only one low wall piece at the back where needed. Everything sits on this tile: one or two characters and three or four big, clear objects. The diorama is centered and fills about 90% of the image width, with a thin even margin. The main character is big (about half the height of the image) and is clearly doing something. A soft grey oval shadow under the tile. Background around the diorama: flat solid cream (#FDF3E6) from edge to edge, no sky, no scenery outside the tile, no frame, no border. Readability: it must be understandable at 190 px wide: big shapes, strong silhouettes, one clear action, no tiny details. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:10, landscape, 1240x784 px.
```

### `pic4.webp` — Ajudar as abelhas (Jardim)

**Anexe:** `img/cliente3.webp` (a abelha), `img/guide.webp`, o fundo `img/level4.webp` (colmeia, girassóis, favo) e, como modelo de estilo, `img/passos/rua-01.webp` e `img/passos/rua-05.webp`.

```
Subject: The moment the call arrives: a garden diorama (a tile of green grass with soft brown soil at the edges). On the left, two big sunflowers and one pink flower with yellow pollen. On the right, a small wooden post holding a round golden beehive with a little entrance hole, and next to it a piece of honeycomb with some empty cells. The fluffy round bee from the reference (yellow and dark grey stripes, white wings, rosy cheeks) hovers in the middle holding its small woven basket, empty, with a pleading, hopeful face. The small round white Robô-guia robot with a black face screen, green eyes and a small green antenna light (from the reference) floats beside the bee, pointing at the sunflowers.
Attached images: the bee (cliente3), the robot (guide), the garden background (level4: hive, sunflowers, honeycomb) and the style references (the street cards rua-01 and rua-05).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached character and card references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition (very important): a small floating diorama, like a thick square tile of floor cut out of the place and seen in a three-quarter view from slightly above, with only one low wall piece at the back where needed. Everything sits on this tile: one or two characters and three or four big, clear objects. The diorama is centered and fills about 90% of the image width, with a thin even margin. The main character is big (about half the height of the image) and is clearly doing something. A soft grey oval shadow under the tile. Background around the diorama: flat solid cream (#FDF3E6) from edge to edge, no sky, no scenery outside the tile, no frame, no border. Readability: it must be understandable at 190 px wide: big shapes, strong silhouettes, one clear action, no tiny details. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:10, landscape, 1240x784 px.
```

## Abertura (quadros 2, 3 e 4)

**Prontos:** os quatro quadros já usam a cidade e os alfinetes do mapa novo. Os prompts ficam como registro.

**Salve com o mesmo nome** (`story2.webp`, `story3.webp`, `story4.webp`). Formato 16:9. A legenda aparece numa faixa abaixo da imagem, sem cobrir nada.

### `story2.webp` — Quadro 2 — "Este é o Robô-guia. Ele sabe onde cada pessoa precisa de ajuda."

**Anexe:** `img/story1.webp` (a cidade), `img/guide.webp` (Robô-guia) e `docs/referencias/mapa-com-alfinetes.webp` (os rostos dos clientes).

```
Scene: A sunny street of the friendly cartoon town from the attached map, seen from the sidewalk at child height: the blue house with the orange roof, some trees and, far behind, the school with purple roofs, all a little soft. The small round white Robô-guia robot from the reference (egg-shaped white body, black face screen with green eyes and a small smile, two small round white arms, a thin antenna with a small green light on top) floats big in the center, waving hello with one hand and smiling, a soft glow around its antenna light. Around its head, in a gentle arc, six small round bubbles, each with the face of one of the town's clients from the attached map: the curly-haired boy with the striped shirt (Casa), the worker with a yellow hard hat (Fábrica), the girl with black hair (Escola), the boy with curly hair and a yellow hoodie (Faixa and Limonada), the girl with a brown bun and a pink scrunchie (Casa azul) and the fluffy bee (Jardim). Each bubble has a small orange pointer at the bottom, like a map pin, and a thin dotted line goes from each bubble to a different place in the town behind. The robot looks friendly and wise, like it knows where everyone is.
Attached images: the town map (story1), the robot (guide) and the map with the pins (mapa-com-alfinetes, for the faces only; do not copy the buttons or the panels).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached town map and character references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition: the whole image is shown; keep the robot, the faces, the badge and the pins well inside the frame, with a little margin from the edges. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.
```

### `story3.webp` — Quadro 3 — "Você vai ser o novo estagiário. Aqui está o seu crachá!"

**Anexe:** `img/story1.webp`, `img/guide.webp` e um print da tela do crachá do jogo ("Quem é você, agente?"), se quiser que o crachá saia parecido.

```
Scene: First-person view, as if the viewer is the new trainee: the small round white Robô-guia robot from the reference (egg-shaped white body, black face screen with green eyes and a small smile, two small round white arms, a thin antenna with a small green light on top) floats close in front of the viewer, in the same sunny town street, smiling warmly with happy curved eyes and holding out, with both hands, toward the viewer an agent badge on a light blue lanyard. The badge is a rounded rectangle card in light cream with a thick soft brown border, an empty round photo frame on the left and a row of five small gold stars on the right, with no letters at all. A few small sparkles around the badge. Behind the robot, the town street, a few houses and trees, soft and blurred, warm morning light.
Attached images: the town map (story1, for the town look) and the robot (guide).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached town map and character references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition: the whole image is shown; keep the robot, the faces, the badge and the pins well inside the frame, with a little margin from the edges. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.
```

### `story4.webp` — Quadro 4 — "No mapa, cada alfinete com um rosto é um chamado. Ajude os moradores, passo a passo."

**Anexe:** `docs/referencias/mapa-com-alfinetes.webp` (o mapa com os alfinetes, como aparece no jogo), `img/story1.webp` e `img/guide.webp`.

```
Scene: The same town map as the attached image, seen from above in the same three-quarter view, with the same places: the house with the dark roof and the vegetable garden, the factory, the crossing with the traffic lights, the blue house with the orange roof, the school with purple roofs, the garden with sunflowers and the beehive, and the lemonade stand. Above these places stand the same small round pins as in the attached map: a circle with a client's face inside, a white border and a small point at the bottom, but with NO name tags and NO numbers. The small round white Robô-guia robot from the reference (egg-shaped white body, black face screen with green eyes and a small smile, two small round white arms, a thin antenna with a small green light on top) floats big in the lower left part of the image, in front of the map, pointing with one arm at the pin above the blue house, which has a soft glow and a few sparkles. The robot looks excited and invites the viewer to start.
Attached images: the map with the pins (mapa-com-alfinetes: copy the town and the pins, but remove every button, panel, title, name tag and number), the town map (story1) and the robot (guide).
Style: cute flat cartoon illustration for a children's educational game (ages 8 to 10), matching the attached town map and character references exactly: thick, smooth dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with small white highlights, rounded friendly shapes, expressive faces. Composition: the whole image is shown; keep the robot, the faces, the badge and the pins well inside the frame, with a little margin from the edges. Never include: text, letters, numbers, speech bubbles with words, logos, watermarks, photorealism, 3D render. Aspect ratio 16:9, landscape, 1376x768 px.
```

## Sanduíche sem alface (correções)

O chamado do sanduíche usa só pão, manteiga, queijo e presunto, mas quatro imagens antigas mostravam alface. **Já corrigidas:** as quatro. Os prompts ficam como registro. São **edições**: anexe a própria imagem e peça só a troca do sanduíche. Salve com o mesmo nome. Se o gerador mudar mais coisas, peça de novo com "change only the sandwich".

### `level1.webp` — fundo do nível (o balão de pensamento)

**Anexe:** `img/level1.webp` (a imagem a corrigir) e as cartas `img/passos/sanduiche-01.webp`, `-02.webp` e `-03.webp` (o pão, o queijo e o presunto do jogo).

```
Edit the attached image: in the thought bubble above the boy, replace the sandwich with a sandwich of two slices of white bread with a pink slice of ham and a yellow slice of cheese between them, and NOTHING green: no lettuce, no leaves. The new sandwich has the same size, angle and place as the old one.
Keep everything else in the image exactly the same: same characters, same poses, same colors, same background, same composition, same size and aspect ratio. Only change the sandwich. Same flat cartoon style with thick dark brown outlines (#3B2A2A). Never add text, letters or numbers.
```

### `win1.webp` — fundo da vitória (o prato do menino)

**Anexe:** `img/win1.webp` (a imagem a corrigir) e as cartas `img/passos/sanduiche-01.webp`, `-02.webp` e `-03.webp` (o pão, o queijo e o presunto do jogo).

```
Edit the attached image: on the plate the boy is holding up, replace the sandwich with a sandwich of two slices of white bread with a pink slice of ham and a yellow slice of cheese between them, and NOTHING green: no lettuce, no leaves.
Keep everything else in the image exactly the same: same characters, same poses, same colors, same background, same composition, same size and aspect ratio. Only change the sandwich. Same flat cartoon style with thick dark brown outlines (#3B2A2A). Never add text, letters or numbers.
```

### `sanduiche-4.webp` — lição do nível 4 (o menino montando o sanduíche)

**Anexe:** `img/licoes/sanduiche-4.webp` (a imagem a corrigir) e as cartas `img/passos/sanduiche-01.webp`, `-02.webp` e `-03.webp` (o pão, o queijo e o presunto do jogo).

```
Edit the attached image: remove the green lettuce from the sandwich the boy is making; it must be a sandwich of two slices of white bread with a pink slice of ham and a yellow slice of cheese between them, and NOTHING green: no lettuce, no leaves.
Keep everything else in the image exactly the same: same characters, same poses, same colors, same background, same composition, same size and aspect ratio. Only change the sandwich. Same flat cartoon style with thick dark brown outlines (#3B2A2A). Never add text, letters or numbers.
```

### `sanduiche-5.webp` — lição do nível 5 (a última pedra da trilha)

**Anexe:** `img/licoes/sanduiche-5.webp` (a imagem a corrigir) e as cartas `img/passos/sanduiche-01.webp`, `-02.webp` e `-03.webp` (o pão, o queijo e o presunto do jogo).

```
Edit the attached image: on the last stepping stone, replace the sandwich with a sandwich of two slices of white bread with a pink slice of ham and a yellow slice of cheese between them, and NOTHING green: no lettuce, no leaves.
Keep everything else in the image exactly the same: same characters, same poses, same colors, same background, same composition, same size and aspect ratio. Only change the sandwich. Same flat cartoon style with thick dark brown outlines (#3B2A2A). Never add text, letters or numbers.
```
