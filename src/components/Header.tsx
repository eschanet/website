import { NavLink } from 'react-router';

import { ThemeToggle } from '@/components/ThemeToggle';
import { navRoutes } from '@/routes';

export function Header() {
  return (
    <header className="border-b border-[var(--rule)]">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5"
      >
        <NavLink to="/" className="font-mono text-sm font-medium tracking-tight">
          eschanet
        </NavLink>
        <div className="flex items-center gap-5">
          {navRoutes.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? 'text-[var(--fg)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`
              }
            >
              {r.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
