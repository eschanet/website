import { describe, expect, it } from 'vitest';

import { Footer } from './Footer';
import { links } from '@/data/cv';
import { renderWithRouter, screen } from '@/test/render';

describe('Footer', () => {
  it('links to GitHub, LinkedIn and email', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', links.github);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', links.linkedin);
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      `mailto:${links.email}`,
    );
  });

  it('opens external links safely', () => {
    renderWithRouter(<Footer />);
    for (const name of ['GitHub', 'LinkedIn']) {
      const link = screen.getByRole('link', { name });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link.getAttribute('rel')).toMatch(/noopener/);
      expect(link.getAttribute('rel')).toMatch(/noreferrer/);
    }
  });

  it('gives every icon link an accessible name', () => {
    renderWithRouter(<Footer />);
    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAccessibleName();
    }
  });
});
