import { Link } from 'react-router';

export function NotFound() {
  return (
    <>
      <p className="label mb-4">404</p>
      <h1 className="mb-6 text-xl font-medium tracking-tight">Page not found</h1>
      <Link
        to="/"
        className="text-[15px] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--fg)]"
      >
        Back home
      </Link>
    </>
  );
}
