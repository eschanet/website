/**
 * Renders every route to static HTML.
 *
 * Replaces vite-react-ssg, which pinned react-router to a range carrying two
 * unfixable moderate advisories (GHSA-wrjc-x8rr-h8h6, GHSA-337j-9hxr-rhxg).
 * Owning this keeps us on a patched react-router for ~40 lines.
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const SSR_DIST = 'dist-ssr';
const MOUNT = '<div id="root"></div>';

const template = await readFile(join(DIST, 'index.html'), 'utf8');
if (!template.includes(MOUNT)) {
  throw new Error(`index.html no longer contains the expected mount point: ${MOUNT}`);
}

const bundle = pathToFileURL(join(process.cwd(), SSR_DIST, 'entry-server.js')).href;
const { render, prerenderPaths } = await import(bundle);

for (const path of prerenderPaths) {
  const page = template.replace(MOUNT, `<div id="root">${render(path)}</div>`);
  const outFile = path === '/' ? join(DIST, 'index.html') : join(DIST, path, 'index.html');
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, page, 'utf8');
}

// CloudFront serves this for unmatched paths.
await writeFile(
  join(DIST, '404.html'),
  template.replace(MOUNT, `<div id="root">${render('/__not_found__')}</div>`),
  'utf8',
);

await rm(SSR_DIST, { recursive: true, force: true });
console.log(`prerendered ${String(prerenderPaths.length)} routes + 404.html`);
