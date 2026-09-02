import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

import { Section } from '@/components/Section';
import { positions, profile } from '@/data/cv';

export function Home() {
  const current = positions[0];

  return (
    <>
      <section className="mb-16">
        <h1 className="mb-3 text-2xl font-medium tracking-tight">{profile.name}</h1>
        <p className="mb-6 font-mono text-sm text-[var(--muted)]">{profile.title}</p>
        <p className="text-[15px] leading-relaxed">{profile.summary}</p>
      </section>

      {current && (
        <Section label="Now">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="text-[15px]">
                {current.roles[0]?.title} at{' '}
                {current.href ? (
                  <a
                    href={current.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--fg)]"
                  >
                    {current.org}
                  </a>
                ) : (
                  current.org
                )}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">{current.location}</p>
            </div>
          </div>
        </Section>
      )}

      <Section label="Elsewhere">
        <Link
          to="/cv"
          className="group inline-flex items-center gap-1 text-[15px] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--fg)]"
        >
          Full CV
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </Section>
    </>
  );
}
