import type { ReactNode } from 'react';

export function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="label mb-6">{label}</h2>
      {children}
    </section>
  );
}
