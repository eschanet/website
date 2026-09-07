/** Single source of truth for routing, nav and the prerender crawl. */
export interface RouteDef {
  readonly path: string;
  readonly label: string;
  readonly inNav: boolean;
}

export const routes: readonly RouteDef[] = [
  { path: '/', label: 'Home', inNav: false },
  { path: '/about', label: 'About', inNav: true },
  { path: '/cv', label: 'CV', inNav: true },
  { path: '/projects', label: 'Projects', inNav: true },
  { path: '/blog', label: 'Writing', inNav: true },
];

export const navRoutes = routes.filter((r) => r.inNav);

/** Paths the prerenderer emits as static HTML. 404 is emitted separately. */
export const prerenderPaths: readonly string[] = routes.map((r) => r.path);
