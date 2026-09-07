import { profile, spokenLanguages } from '@/data/cv';

export function About() {
  return (
    <>
      <h1 className="mb-8 text-xl font-medium tracking-tight">About</h1>
      <p className="mb-6 text-[15px] leading-relaxed">{profile.summary}</p>
      <p className="mb-10 text-[15px] leading-relaxed">
        Before moving into platform and infrastructure work, I spent several years in experimental
        particle physics at CERN, where I built distributed data pipelines and statistical tooling
        over petabyte-scale datasets. That background still shapes how I approach systems: measure
        first, optimise the thing that actually dominates, and make the result reproducible.
      </p>
      <h2 className="label mb-4">Languages</h2>
      <ul className="space-y-1">
        {spokenLanguages.map((l) => (
          <li key={l.language} className="flex justify-between text-sm">
            <span>{l.language}</span>
            <span className="font-mono text-xs text-[var(--muted)]">{l.level}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
