import { Collapsible } from '@/components/Collapsible';
import { education, positions, skills } from '@/data/cv';
import type { Position } from '@/data/cv';

function formatMonth(iso: string): string {
  const parts = iso.split('-');
  const y = parts[0] ?? '';
  const m = parts[1] ?? '01';
  return new Date(Number(y), Number(m) - 1, 1).toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric',
  });
}

function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} — ${end === null ? 'Present' : formatMonth(end)}`;
}

/** The span across every role held at one organisation. */
function positionRange(p: Position): string {
  const starts = p.roles.map((r) => r.start).sort((a, b) => a.localeCompare(b));
  const isCurrent = p.roles.some((r) => r.end === null);
  const latestEnd = p.roles
    .map((r) => r.end)
    .filter((e): e is string => e !== null)
    .sort((a, b) => b.localeCompare(a))[0];
  return formatRange(starts[0] ?? '', isCurrent ? null : (latestEnd ?? null));
}

function isCurrent(p: Position): boolean {
  return p.roles.some((r) => r.end === null);
}

export function CV() {
  return (
    <>
      <h1 className="mb-10 text-xl font-medium tracking-tight">CV</h1>

      <Collapsible label="Experience" defaultOpen meta={String(positions.length)}>
        <div className="-mt-3">
          {positions.map((p) => (
            <Collapsible
              key={p.org}
              label={p.org}
              meta={positionRange(p)}
              level={3}
              variant="entry"
              name="experience"
              defaultOpen={isCurrent(p)}
            >
              <p className="label mb-3">{p.location}</p>
              <ul className="mb-3">
                {p.roles.map((r) => (
                  <li key={r.title} className="flex items-baseline justify-between gap-4 text-sm">
                    <span>{r.title}</span>
                    {/* With a single role the summary's meta already shows the
                        range, so repeating it here would be noise. */}
                    {p.roles.length > 1 && (
                      <span className="label shrink-0">{formatRange(r.start, r.end)}</span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mb-3 text-sm leading-relaxed text-[var(--muted)]">{p.summary}</p>
              {p.highlights.length > 0 && (
                <ul className="space-y-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="border-l border-[var(--rule)] pl-4 text-sm leading-relaxed"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </Collapsible>
          ))}
        </div>
      </Collapsible>

      <Collapsible label="Education" meta={String(education.length)}>
        <ol className="space-y-6">
          {education.map((d) => (
            <li key={d.degree}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[15px] font-medium">{d.degree}</h3>
                <span className="label">{String(d.year)}</span>
              </div>
              <p className="text-sm text-[var(--muted)]">{d.institution}</p>
              <p className="mt-1 text-sm leading-relaxed">{d.thesis}</p>
              <p className="label mt-1">{d.grade}</p>
            </li>
          ))}
        </ol>
      </Collapsible>

      <Collapsible label="Skills" meta={String(skills.length)}>
        <dl className="space-y-4">
          {skills.map((s) => (
            <div key={s.group}>
              <dt className="mb-1 text-sm font-medium">{s.group}</dt>
              <dd className="label leading-relaxed">{s.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </Collapsible>
    </>
  );
}
