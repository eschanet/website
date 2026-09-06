import { Collapsible } from '@/components/Collapsible';
import { education, positions, skills } from '@/data/cv';

function formatRange(start: string, end: string | null): string {
  const fmt = (iso: string) => {
    const parts = iso.split('-');
    const y = parts[0] ?? '';
    const m = parts[1] ?? '01';
    return new Date(Number(y), Number(m) - 1, 1).toLocaleDateString('en-GB', {
      month: 'short',
      year: 'numeric',
    });
  };
  return `${fmt(start)} — ${end === null ? 'Present' : fmt(end)}`;
}

export function CV() {
  return (
    <>
      <h1 className="mb-10 text-xl font-medium tracking-tight">CV</h1>

      <Collapsible label="Experience" defaultOpen meta={String(positions.length)}>
        <ol className="space-y-10">
          {positions.map((p) => (
            <li key={p.org}>
              <div className="mb-1 flex items-baseline justify-between gap-4">
                <h3 className="text-[15px] font-medium">{p.org}</h3>
                <span className="label shrink-0">{p.location}</span>
              </div>
              <ul className="mb-3">
                {p.roles.map((r) => (
                  <li key={r.title} className="flex items-baseline justify-between gap-4 text-sm">
                    <span>{r.title}</span>
                    <span className="label shrink-0">{formatRange(r.start, r.end)}</span>
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
            </li>
          ))}
        </ol>
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
