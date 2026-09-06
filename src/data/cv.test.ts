import { describe, expect, it } from 'vitest';

import { education, links, positions, profile, skills } from './cv';

const MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;

describe('cv data', () => {
  it('has exactly one current role', () => {
    const current = positions.flatMap((p) => p.roles).filter((r) => r.end === null);
    expect(current).toHaveLength(1);
    expect(current[0]?.title).toBe('Senior DevOps Engineer');
  });

  it('lists positions newest first', () => {
    const starts = positions.map((p) => {
      const earliest = [...p.roles].sort((a, b) => a.start.localeCompare(b.start))[0];
      return earliest?.start ?? '';
    });
    expect([...starts].sort((a, b) => b.localeCompare(a))).toEqual(starts);
  });

  it('uses well-formed YYYY-MM dates everywhere', () => {
    for (const role of positions.flatMap((p) => p.roles)) {
      expect(role.start).toMatch(MONTH);
      if (role.end !== null) expect(role.end).toMatch(MONTH);
    }
  });

  it('never has a role ending before it starts', () => {
    for (const role of positions.flatMap((p) => p.roles)) {
      if (role.end !== null) expect(role.end.localeCompare(role.start)).toBeGreaterThanOrEqual(0);
    }
  });

  it('has no gap or overlap between the two UBS roles', () => {
    const ubs = positions.find((p) => p.org === 'UBS Switzerland AG');
    expect(ubs).toBeDefined();
    const sorted = [...(ubs?.roles ?? [])].sort((a, b) => a.start.localeCompare(b.start));
    const [first, second] = sorted;
    expect(first?.end).toBe('2024-01');
    expect(second?.start).toBe('2024-02');
  });

  it('starts Vontobel after UBS ends', () => {
    const ubs = positions.find((p) => p.org === 'UBS Switzerland AG');
    const vontobel = positions.find((p) => p.org === 'Bank Vontobel AG');
    const ubsEnd = [...(ubs?.roles ?? [])].sort((a, b) =>
      (b.end ?? '').localeCompare(a.end ?? ''),
    )[0];
    expect(ubsEnd?.end).toBe('2026-06');
    expect(vontobel?.roles[0]?.start).toBe('2026-07');
  });

  it('does not leak a phone number into public data', () => {
    const serialised = JSON.stringify({ profile, links, positions, education, skills });
    expect(serialised).not.toMatch(/\+41|\d{3}\s?\d{2}\s?\d{2}/);
  });

  it('exposes only https or mailto links', () => {
    for (const [key, value] of Object.entries(links)) {
      if (key === 'email') continue;
      expect(value).toMatch(/^https:\/\//);
    }
  });

  it('lists education newest first with unique degrees', () => {
    const years = education.map((d) => d.year);
    expect([...years].sort((a, b) => b - a)).toEqual(years);
    expect(new Set(education.map((d) => d.degree)).size).toBe(education.length);
  });

  it('has no empty skill groups', () => {
    for (const group of skills) expect(group.items.length).toBeGreaterThan(0);
  });
});
