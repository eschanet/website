import { describe, expect, it } from 'vitest';

import { rewritePath } from '../../scripts/rewrite.mjs';

/**
 * This rule is shared between the e2e preview server and the CloudFront
 * Function that will sit in front of S3. A regression here breaks every clean
 * URL in production, so it is pinned hard.
 */
describe('rewritePath', () => {
  it('maps extensionless paths to their directory index', () => {
    expect(rewritePath('/about')).toBe('/about/index.html');
    expect(rewritePath('/cv')).toBe('/cv/index.html');
  });

  it('maps trailing-slash paths to their directory index', () => {
    expect(rewritePath('/')).toBe('/index.html');
    expect(rewritePath('/about/')).toBe('/about/index.html');
  });

  it('leaves real files untouched', () => {
    expect(rewritePath('/assets/index-abc123.js')).toBe('/assets/index-abc123.js');
    expect(rewritePath('/favicon.svg')).toBe('/favicon.svg');
    expect(rewritePath('/404.html')).toBe('/404.html');
    expect(rewritePath('/assets/inter-latin.woff2')).toBe('/assets/inter-latin.woff2');
  });

  it('handles nested paths', () => {
    expect(rewritePath('/blog/some-post')).toBe('/blog/some-post/index.html');
    expect(rewritePath('/blog/some-post/')).toBe('/blog/some-post/index.html');
  });

  it('treats a dot only in the last segment as a file extension', () => {
    expect(rewritePath('/v1.0/notes')).toBe('/v1.0/notes/index.html');
  });

  it('is idempotent on already-rewritten paths', () => {
    const once = rewritePath('/about');
    expect(rewritePath(once)).toBe(once);
  });
});
