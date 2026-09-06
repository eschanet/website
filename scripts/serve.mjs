/**
 * Static server for e2e, applying the same rewrite rule as production.
 * Deliberately not `vite preview`: its SPA fallback masks prerendering bugs
 * by serving index.html for any unmatched path.
 */
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

import { rewritePath } from './rewrite.mjs';

const ROOT = new URL('../dist/', import.meta.url).pathname;
const PORT = Number(process.env.PORT ?? 4173);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
  '.map': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

async function send(res, filePath, status) {
  res.writeHead(status, { 'content-type': TYPES[extname(filePath)] ?? 'application/octet-stream' });
  createReadStream(filePath).pipe(res);
}

createServer((req, res) => {
  void (async () => {
    const uri = decodeURIComponent((req.url ?? '/').split('?')[0]);
    // normalize() collapses any ../ before it can escape ROOT.
    const target = join(ROOT, normalize(rewritePath(uri)));

    if (!target.startsWith(ROOT)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    try {
      await stat(target);
      await send(res, target, 200);
    } catch {
      await send(res, join(ROOT, '404.html'), 404);
    }
  })();
}).listen(PORT, () => {
  console.log(`serving dist/ on http://localhost:${String(PORT)} (production rewrite rules)`);
});
