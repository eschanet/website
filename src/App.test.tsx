import { describe, expect, it } from 'vitest';

import { App } from './App';
import { renderWithRouter, screen } from '@/test/render';

describe('App routing', () => {
  it.each([
    ['/', 'Eric Schanet'],
    ['/about', 'About'],
    ['/cv', 'CV'],
    ['/projects', 'Projects'],
    ['/blog', 'Writing'],
  ])('renders %s with heading %s', (route, heading) => {
    renderWithRouter(<App />, { route });
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  });

  it('renders the 404 page for an unknown route', () => {
    renderWithRouter(<App />, { route: '/no-such-page' });
    expect(screen.getByRole('heading', { level: 1, name: /page not found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back home/i })).toHaveAttribute('href', '/');
  });

  it('provides a skip link as the first focusable element', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#main');
  });

  it('renders a main landmark on every page', () => {
    renderWithRouter(<App />, { route: '/cv' });
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
