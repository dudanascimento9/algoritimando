# Prompts das imagens do fim do jogo

7 imagens: os 4 selos das ideias, o crachá de Agente Sênior e os 2 personagens de corpo inteiro que faltam na tela final.

**Nenhuma é obrigatória.** O jogo já funciona sem elas:

| Imagem | Onde aparece | Enquanto não existe |
|---|---|---|
| 4 selos (`img/selos/`) | lição do último nível de cada chamado novo, crachá, "Minhas ideias" e tela final | o jogo desenha o selo em linhas (seta em volta, caminho que se divide, caminhos que se juntam, par de colchetes) |
| `img/ui/cracha-senior.webp` | promoção a Agente Sênior | aparece o crachá de Agente |
| `img/cliente4.webp` e `img/cliente5.webp` | tela final, ao lado dos outros personagens | o personagem não aparece (os outros seis continuam lá) |

Todas **entram sozinhas**: basta salvar o arquivo com o nome e na pasta indicados, sem mexer no código.

## Antes de começar

- **Gere cada grupo na mesma conversa**, anexando as referências indicadas (estão no repositório).
- **Fundo branco liso** em todas. Ele é removido depois e a imagem vira WebP transparente, como nas cartas.
- **Nada de texto** em nenhuma delas.
- Se preferir, mande as imagens no chat com o nome de cada uma: o recorte, o ajuste de tamanho e a conversão são feitos na hora de aplicar.

**Se sair errado:** "remove all text", "plain white background", "simpler, one bold shape", "same badge as the reference", "full body, do not crop the feet", "same boy as the reference".

## Os 4 selos das ideias

**Arquivos:** em `img/selos/`, WebP transparente, 400 × 400 px, redondo.

**Anexe como referência:** `img/ui/estrela.webp` (o dourado e o contorno do jogo) e `img/passos/sanduiche-03.webp` (estilo).

**Consistência:** os quatro são a MESMA medalha redonda dourada; só muda o desenho do meio. Gere o primeiro, e nos seguintes anexe-o e peça "same medal, same gold, same outline; change only the drawing in the middle". No jogo o selo aparece pequeno (de 40 a 60 px), então o desenho do meio precisa ser uma forma só, bem grossa.

### `repeticao.webp` — Repetição (Lavar as mãos)

```
Subject: A round golden medal. In the middle, one thick dark brown circular arrow that goes almost all the way around and ends in an arrowhead (the 'repeat' symbol), with two small white soap bubbles inside the circle.
Attached images: style and color references.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. Shape (very important): one perfectly round medal seen straight from the front, filling about 90% of the frame, centered: a golden-yellow disc (#FFD76A) with a thin lighter inner ring (#FFF3C4) and a thick dark brown outer outline. The drawing sits in the middle of the disc and uses at most three colors. No ribbon, no stars around it, no shadow under it. Background: plain pure white (#FFFFFF), nothing else. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 50 px wide): one bold simple shape, no small details. Aspect ratio 1:1, 800x800 px.
```

### `condicao.webp` — Condição (Atravessar a rua)

```
Subject: A round golden medal. In the middle, one thick dark brown path that comes up from the bottom and splits into two branches like the letter Y; the left branch ends in a small round red dot and the right branch ends in a small round green dot.
Attached images: style and color references.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. Shape (very important): one perfectly round medal seen straight from the front, filling about 90% of the frame, centered: a golden-yellow disc (#FFD76A) with a thin lighter inner ring (#FFF3C4) and a thick dark brown outer outline. The drawing sits in the middle of the disc and uses at most three colors. No ribbon, no stars around it, no shadow under it. Background: plain pure white (#FFFFFF), nothing else. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 50 px wide): one bold simple shape, no small details. Aspect ratio 1:1, 800x800 px.
```

### `ao-mesmo-tempo.webp` — Ao mesmo tempo (Fazer uma limonada)

```
Subject: A round golden medal. In the middle, two thick dark brown paths that start side by side at the top, one with a small green lime at its start and the other with a small light blue water drop at its start, and curve toward each other to join into one single path that ends in an arrowhead pointing down.
Attached images: style and color references.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. Shape (very important): one perfectly round medal seen straight from the front, filling about 90% of the frame, centered: a golden-yellow disc (#FFD76A) with a thin lighter inner ring (#FFF3C4) and a thick dark brown outer outline. The drawing sits in the middle of the disc and uses at most three colors. No ribbon, no stars around it, no shadow under it. Background: plain pure white (#FFFFFF), nothing else. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 50 px wide): one bold simple shape, no small details. Aspect ratio 1:1, 800x800 px.
```

### `abre-e-fecha.webp` — Abre e fecha (Escovar os dentes)

```
Subject: A round golden medal. In the middle, two thick dark brown square brackets facing each other, like [ ], with a small white toothpaste tube cap between them.
Attached images: style and color references.
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. Shape (very important): one perfectly round medal seen straight from the front, filling about 90% of the frame, centered: a golden-yellow disc (#FFD76A) with a thin lighter inner ring (#FFF3C4) and a thick dark brown outer outline. The drawing sits in the middle of the disc and uses at most three colors. No ribbon, no stars around it, no shadow under it. Background: plain pure white (#FFFFFF), nothing else. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Must stay readable when shown very small (about 50 px wide): one bold simple shape, no small details. Aspect ratio 1:1, 800x800 px.
```

## Crachá de Agente Sênior

**Arquivo:** `img/ui/cracha-senior.webp`, WebP transparente, 314 × 555 px (o mesmo tamanho de `img/ui/cracha-agente.webp`).

**Anexe como referência:** `img/ui/cracha-agente.webp`. O crachá de Sênior é esse mesmo crachá, com três diferenças: as três estrelas acesas, a faixa diagonal dourada no lugar da lilás e um fio dourado em volta do cartão.

Se o arquivo `cracha_nivel3_senior` do Drive já estiver nesse desenho, ele serve: é só salvar com este nome.

### `cracha-senior.webp` — crachá da promoção a Agente Sênior

```
Subject: The SAME ID badge as the attached reference, same shape, same size, same grey metal clip on top, same dark grey frame, same cream card with a blank portrait silhouette and the same small gear-with-lightbulb emblem at the bottom. Change only three things: (1) all THREE stars in the row are lit, bright gold with a small white highlight; (2) the diagonal stripe across the card is warm gold (#F2C24B) instead of lilac; (3) a thin gold line runs around the edge of the cream card. Nothing else changes.
Attached images: the agent badge (shape and layout reference).
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. Composition: the badge alone, seen straight from the front, centered, filling about 90% of the frame height. Background: plain pure white (#FFFFFF), no shadow, no scenery. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Aspect ratio 9:16, portrait, 900x1600 px.
```

## Personagens de corpo inteiro para a tela final

**Arquivos:** `img/cliente4.webp` e `img/cliente5.webp`, WebP transparente, 700 px de altura (como `img/cliente0.webp` e `img/cliente2.webp`).

**Anexe como referência:** `img/cliente0.webp` e `img/cliente2.webp` (proporção, pose e traço do corpo inteiro) e a cena de onde vem cada personagem, para ele sair igual.

Na tela final eles ficam em fila com os outros, por isso precisam da mesma proporção e de estar em pé, de frente.

### `cliente4.webp` — o menino de Atravessar a rua e Fazer uma limonada

```
Subject: The boy from the attached scene, standing and smiling, giving a thumbs up with one hand. He has brown skin, big round curly dark brown hair, rosy cheeks, a yellow hooded sweatshirt, dark blue shorts and blue sneakers, and a blue backpack on his back with the straps visible on his shoulders.
Attached images: `img/win6.webp` and `img/who5.webp` (the boy), `img/cliente0.webp` and `img/cliente2.webp` (full-body proportion and line).
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. Pose and framing (very important): ONE character only, full body from head to shoes, standing, seen from the front, in the same chibi proportions as the attached full-body references (big head, small body, about 2.5 heads tall), centered, with a little empty margin on all sides. Feet flat on the ground, no shadow under them. Background: plain pure white (#FFFFFF), no scenery, no floor line. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Aspect ratio 3:5, portrait, 840x1400 px.
```

### `cliente5.webp` — a menina de Escovar os dentes

```
Subject: The girl from the attached scene, standing and smiling with her mouth open, holding a toothbrush up in one hand. She has light skin, wavy brown hair down to her shoulders with a small bun on top tied with a pink scrunchie, rosy cheeks, coral pink pajamas with a small white bunny on the shirt, and coral slippers.
Attached images: `img/win8.webp` and `img/who6.webp` (the girl), `img/cliente0.webp` and `img/cliente2.webp` (full-body proportion and line).
Style: cute flat cartoon sticker illustration for a children's educational game (ages 8 to 10), matching the attached style references exactly: thick dark brown outlines (#3B2A2A), soft warm pastel colors, simple flat shading with one small white highlight, rounded friendly shapes. Pose and framing (very important): ONE character only, full body from head to shoes, standing, seen from the front, in the same chibi proportions as the attached full-body references (big head, small body, about 2.5 heads tall), centered, with a little empty margin on all sides. Feet flat on the ground, no shadow under them. Background: plain pure white (#FFFFFF), no scenery, no floor line. Never include: text, letters, numbers, logos, watermarks, photorealism, 3D render, heavy gradients. Aspect ratio 3:5, portrait, 840x1400 px.
```
