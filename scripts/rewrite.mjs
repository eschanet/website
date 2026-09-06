/**
 * The canonical URL-rewrite rule for this site.
 *
 * Prerendering emits /about/index.html but visitors request /about, so
 * something must map one to the other. The S3 *website* endpoint does this
 * implicitly; the REST endpoint behind CloudFront OAC does not. Defining the
 * rule here lets the local preview server and the CloudFront Function share
 * one definition, so what CI tests is what production runs.
 *
 * Kept dependency-free and ES5-ish: CloudFront Functions run a constrained
 * JS runtime, so this body is transplantable into one.
 */
export function rewritePath(uri) {
  if (uri.endsWith('/')) return `${uri}index.html`;
  const lastSegment = uri.slice(uri.lastIndexOf('/') + 1);
  if (!lastSegment.includes('.')) return `${uri}/index.html`;
  return uri;
}
