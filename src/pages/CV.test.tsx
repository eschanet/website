import { describe, expect, it } from 'vitest';

import { CV } from './CV';
import { education, positions } from '@/data/cv';
import { renderWithRouter, screen } from '@/test/render';

describe('CV page', () => {
  it('renders every organisation', () => {
    renderWithRouter(<CV />);
    for (const p of positions) {
      expect(screen.getByRole('heading', { name: p.org })).toBeInTheDocument();
    }
  });

  it('shows the current role as Present and dated ones as a range', () => {
    renderWithRouter(<CV />);
    expect(screen.getByText(/Jul 2026 — Present/)).toBeInTheDocument();
    expect(screen.getByText(/Feb 2024 — Jun 2026/)).toBeInTheDocument();
    expect(screen.getByText(/Oct 2021 — Jan 2024/)).toBeInTheDocument();
  });

  it('renders exactly one Present marker', () => {
    renderWithRouter(<CV />);
    expect(screen.getAllByText(/— Present/)).toHaveLength(1);
  });

  it('renders every highlight for a position that has them', () => {
    renderWithRouter(<CV />);
    const ubs = positions.find((p) => p.org === 'UBS Switzerland AG');
    for (const h of ubs?.highlights ?? []) {
      expect(screen.getByText(h)).toBeInTheDocument();
    }
  });

  it('renders education entries with their grades', () => {
    renderWithRouter(<CV />);
    for (const d of education) {
      expect(screen.getByRole('heading', { name: d.degree })).toBeInTheDocument();
      expect(screen.getByText(d.grade)).toBeInTheDocument();
    }
  });

  it('gives every position its own collapsible', () => {
    const { container } = renderWithRouter(<CV />);
    const orgHeadings = positions.map((p) => p.org);
    for (const org of orgHeadings) {
      expect(screen.getByRole('heading', { level: 3, name: org })).toBeInTheDocument();
    }
    // 3 sections + one nested entry per position.
    expect(container.querySelectorAll('details')).toHaveLength(3 + positions.length);
  });

  it('opens only the current position by default', () => {
    const { container } = renderWithRouter(<CV />);
    // Scope to each element's OWN summary: a section <details> also contains
    // descendant h3s, so an unscoped query matches sections too.
    const entries = [...container.querySelectorAll('details')].filter(
      (d) => d.querySelector(':scope > summary h3') !== null,
    );
    const open = entries.filter((d) => d.hasAttribute('open'));
    expect(open).toHaveLength(1);
    expect(open[0]?.querySelector('h3')?.textContent).toBe('Bank Vontobel AG');
  });

  it('shows per-role dates only where a position has several roles', () => {
    renderWithRouter(<CV />);
    // UBS has two roles, so each carries its own range.
    expect(screen.getByText(/Feb 2024 — Jun 2026/)).toBeInTheDocument();
    expect(screen.getByText(/Oct 2021 — Jan 2024/)).toBeInTheDocument();
    // Vontobel has one role, so the range appears once (in the summary meta).
    expect(screen.getAllByText(/Jul 2026 — Present/)).toHaveLength(1);
  });

  it('uses a single h1 and h2s for sections', () => {
    renderWithRouter(<CV />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 2, name: /experience/i })).toBeInTheDocument();
  });
});
