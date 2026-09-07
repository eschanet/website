# eschanet.com

Personal website. Static site prerendered to HTML, hosted on S3 behind CloudFront.

## Stack

| Concern    | Choice                                      |
| ---------- | ------------------------------------------- |
| Build      | Vite 8                                      |
| UI         | React 19 + TypeScript 6 (strict)            |
| Routing    | React Router 7                              |
| Styling    | Tailwind CSS 4, monochrome OKLCH token ramp |
| Icons      | lucide-react, brand marks inlined           |
| Content    | MDX with Zod-validated frontmatter          |
| Unit tests | Vitest + Testing Library                    |
| E2E / a11y | Playwright + axe-core                       |

## Commands

```sh
npm run dev          # dev server
npm run build        # client build, SSR build, prerender to dist/
npm run verify       # typecheck + lint + format check + unit tests
npm run test:e2e     # Playwright against the built output
```

## How prerendering works

`npm run build` runs three steps: a normal client build, an SSR build of
`src/entry-server.tsx`, then `scripts/prerender.mjs`, which renders every path in
`src/routes.ts` to static HTML and writes `dist/<route>/index.html` plus a
`404.html`.

We do not use `vite-react-ssg`: it pins `react-router` to a range carrying two
moderate advisories with no fix available on that major
(GHSA-wrjc-x8rr-h8h6, GHSA-337j-9hxr-rhxg). Owning ~40 lines of prerender keeps
us on a patched React Router.

## The URL rewrite rule

Prerendering emits `/about/index.html`, but visitors request `/about`. That
mapping lives in exactly one place, `scripts/rewrite.mjs`, and is consumed by:

- `scripts/serve.mjs`, the static server Playwright runs against, and
- the CloudFront Function in front of S3 (see `infra/`).

The file is deliberately dependency-free and ES5-ish so the body transplants
into a CloudFront Function unchanged. `src/test/rewrite.test.ts` pins it.

E2E deliberately does **not** use `vite preview`, whose SPA fallback serves
`index.html` for any unmatched path and would mask a broken prerender.

## Version ceilings

Three dependencies are held below latest on purpose:

- **TypeScript 6.0.x** — `typescript-eslint` declares `typescript <6.1.0`, so
  TS 7 has no typed-linting support yet.
- **No `eslint-plugin-jsx-a11y`** — it caps at ESLint 9, which is EOL.
  Accessibility is covered at runtime by axe in Playwright instead.
- **`@types/node` 22.x** — matches the Node 22 runtime rather than latest.
