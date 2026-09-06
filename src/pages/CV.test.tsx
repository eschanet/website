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

  it('uses a single h1 and h2s for sections', () => {
    renderWithRouter(<CV />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 2, name: /experience/i })).toBeInTheDocument();
  });
});
