import { describe, expect, it } from 'vitest';

import { Header } from './Header';
import { navRoutes } from '@/routes';
import { renderWithRouter, screen } from '@/test/render';

describe('Header', () => {
  it('renders a link for every nav route', () => {
    renderWithRouter(<Header />);
    for (const route of navRoutes) {
      expect(screen.getByRole('link', { name: route.label })).toHaveAttribute('href', route.path);
    }
  });

  it('exposes a named primary navigation landmark', () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
  });

  it('marks the active route with aria-current', () => {
    renderWithRouter(<Header />, { route: '/cv' });
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute('aria-current', 'page');
  });
});
