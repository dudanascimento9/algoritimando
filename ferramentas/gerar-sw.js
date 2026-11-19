#!/usr/bin/env node
/* ============================================================
   ferramentas/gerar-sw.js — escreve o sw.js (modo instalável)

   O sw.js guarda no aparelho todos os arquivos do jogo, para ele
   abrir e funcionar sem internet depois de instalado. A lista de
   arquivos e a versão saem daqui:

     - a versão é o mesmo ?v=AAAAMMDDHHMM do index.html;
     - os arquivos são os do repositório (git ls-files), menos a
       documentação, o editor e as próprias ferramentas;
     - CSS e JS entram com o ?v= exato com que o index.html os
       carrega, para o aparelho nunca misturar versões.

   Rode depois de atualizar o ?v= no index.html (a cada mudança
   publicada):  node ferramentas/gerar-sw.js
   ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const raiz = path.join(__dirname, '..');
const index = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');

const versao = (index.match(/\?v=(\d{12})/) || [])[1];
if (!versao) {
  console.error('Não achei o ?v=AAAAMMDDHHMM no index.html.');
  process.exit(1);
}

// os arquivos que o index.html carrega com ?v= (CSS e JS)
const comVersao = new Map();
for (const m of index.matchAll(/(?:href|src)="([^"?]+)\?v=(\d+)"/g)) comVersao.set(m[1], `${m[1]}?v=${m[2]}`);

const fora = [/^docs\//, /^ferramentas\//, /\.md$/, /^\./, /^editor\./, /^js\/editor\.js$/, /^LICENSE$/, /^sw\.js$/];
const arquivos = execSync('git ls-files', { cwd: raiz, encoding: 'utf8' })
  .split('\n').filter(Boolean)
  .filter(f => !fora.some(r => r.test(f)))
  .filter(f => /\.(html|css|js|webmanifest|webp|png|jpg|svg|mp3|woff2)$/.test(f));

const lista = ['./', ...arquivos.map(f => comVersao.get(f) || f)];

const sw = `/* sw.js — gerado por ferramentas/gerar-sw.js. Não edite à mão:
   rode "node ferramentas/gerar-sw.js" depois de mudar o ?v= do index.html. */
'use strict';

const VERSAO = '${versao}';
const CACHE = 'algoritimando-' + VERSAO;
const ARQUIVOS = ${JSON.stringify(lista, null, 2)};

// instala: baixa tudo de novo (sem usar o cache do navegador)
self.addEventListener('install', ev => {
  ev.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // um arquivo que falhar não impede os outros
    await Promise.all(ARQUIVOS.map(url =>
      fetch(new Request(url, { cache: 'reload' }))
        .then(r => (r.ok ? cache.put(url, r) : null))
        .catch(() => null)));
    await self.skipWaiting();
  })());
});

// ativa: apaga as versões antigas
self.addEventListener('activate', ev => {
  ev.waitUntil((async () => {
    for (const nome of await caches.keys()) {
      if (nome.startsWith('algoritimando-') && nome !== CACHE) await caches.delete(nome);
    }
    await self.clients.claim();
  })());
});

// a música pede pedaços do arquivo (Range): monta o pedaço a partir do arquivo guardado
async function pedaco(pedido, resposta) {
  const blob = await resposta.blob();
  const m = /bytes=(\\d*)-(\\d*)/.exec(pedido.headers.get('range') || '');
  const inicio = m && m[1] ? Number(m[1]) : 0;
  const fim = m && m[2] ? Number(m[2]) : blob.size - 1;
  return new Response(blob.slice(inicio, fim + 1), {
    status: 206,
    headers: {
      'Content-Type': resposta.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': \`bytes \${inicio}-\${fim}/\${blob.size}\`,
      'Content-Length': String(fim - inicio + 1),
      'Accept-Ranges': 'bytes',
    },
  });
}

self.addEventListener('fetch', ev => {
  const pedido = ev.request;
  if (pedido.method !== 'GET') return;
  const url = new URL(pedido.url);
  if (url.origin !== self.location.origin) return;

  // a página: tenta a internet primeiro (versão nova), senão a guardada
  if (pedido.mode === 'navigate') {
    ev.respondWith((async () => {
      try {
        const r = await fetch(pedido);
        // guarda só a página do jogo (não o editor)
        if (r.ok && (url.pathname.endsWith('/') || url.pathname.endsWith('/index.html'))) (await caches.open(CACHE)).put('./', r.clone());
        return r;
      } catch {
        return (await caches.match(pedido)) || (await caches.match('./'));
      }
    })());
    return;
  }

  // o resto: o guardado primeiro; o que faltar vem da internet e fica guardado
  ev.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const semRange = new Request(pedido.url);
    const guardado = await cache.match(semRange);
    if (guardado) return pedido.headers.has('range') ? pedaco(pedido, guardado) : guardado;
    const r = await fetch(pedido);
    if (r.ok && r.status === 200) cache.put(semRange, r.clone());
    return r;
  })());
});
`;

fs.writeFileSync(path.join(raiz, 'sw.js'), sw);
console.log(`sw.js: versão ${versao}, ${lista.length} arquivos.`);
