import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

import { Collapsible } from '@/components/Collapsible';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import { links, positions, profile } from '@/data/cv';

const elsewhere = [
  { href: links.github, label: 'GitHub', handle: '@eschanet', Icon: GitHubIcon },
  { href: links.linkedin, label: 'LinkedIn', handle: '/in/eschanet', Icon: LinkedInIcon },
] as const;

function years(start: string, end: string | null): string {
  const startYear = start.slice(0, 4);
  const endYear = end === null ? 'Now' : end.slice(0, 4);
  return startYear === endYear ? startYear : `${startYear}—${endYear}`;
}

export function Home() {
  return (
    <>
      <section className="mb-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tight">{profile.name}</h1>
        <p className="label mb-6">{profile.title}</p>
        <p className="text-[15px] leading-relaxed">{profile.summary}</p>
      </section>

      <Collapsible label="Experience" defaultOpen>
        <ol className="space-y-4">
          {positions.map((p) => {
            const roles = [...p.roles];
            const earliest = roles.reduce((a, b) => (a.start <= b.start ? a : b));
            const latest = roles.reduce((a, b) => (a.end === null ? a : b.end === null ? b : a));
            return (
              <li key={p.org} className="flex items-baseline justify-between gap-4">
                <span className="text-[15px]">
                  {p.href !== undefined ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline decoration-[var(--rule)] underline-offset-4 transition-colors hover:decoration-[var(--fg)]"
                    >
                      {p.org}
                    </a>
                  ) : (
                    p.org
                  )}
                </span>
                <span className="label shrink-0">{years(earliest.start, latest.end)}</span>
              </li>
            );
          })}
        </ol>
        <Link
          to="/cv"
          className="group mt-6 inline-flex items-center gap-1 text-sm underline decoration-[var(--rule)] underline-offset-4 transition-colors hover:decoration-[var(--fg)]"
        >
          Full CV
          <ArrowUpRight
            size={13}
            strokeWidth={1.75}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </Collapsible>

      <Collapsible label="Elsewhere">
        <ul className="space-y-3">
          {elsewhere.map(({ href, label, handle, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-baseline justify-between gap-4"
              >
                <span className="flex items-center gap-2 text-[15px]">
                  <Icon size={14} className="text-[var(--muted)]" />
                  <span className="underline decoration-[var(--rule)] underline-offset-4 transition-colors group-hover:decoration-[var(--fg)]">
                    {label}
                  </span>
                </span>
                <span className="label shrink-0">{handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </Collapsible>
    </>
  );
}
