import { describe, expect, it } from 'vitest';

import { navRoutes, prerenderPaths, routes } from './routes';

describe('routes', () => {
  it('prerenders every declared route', () => {
    expect(prerenderPaths).toEqual(routes.map((r) => r.path));
  });

  it('has unique paths', () => {
    expect(new Set(routes.map((r) => r.path)).size).toBe(routes.length);
  });

  it('uses absolute paths without trailing slashes', () => {
    for (const r of routes) {
      expect(r.path.startsWith('/')).toBe(true);
      if (r.path !== '/') expect(r.path.endsWith('/')).toBe(false);
    }
  });

  it('keeps home out of the nav but in the prerender set', () => {
    expect(navRoutes.some((r) => r.path === '/')).toBe(false);
    expect(prerenderPaths).toContain('/');
  });
});
