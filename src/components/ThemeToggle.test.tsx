import { describe, expect, it, vi } from 'vitest';

import { ThemeToggle } from './ThemeToggle';
import { render, screen, userEvent } from '@/test/render';

describe('ThemeToggle', () => {
  it('reflects the light theme by default and offers dark', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: /switch to dark theme/i })).toBeInTheDocument();
  });

  it('toggles the html class when clicked', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    expect(document.documentElement).not.toHaveClass('dark');

    await user.click(screen.getByRole('button'));
    expect(document.documentElement).toHaveClass('dark');

    await user.click(screen.getByRole('button'));
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('persists the choice to localStorage', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    await user.click(screen.getByRole('button'));
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('updates its label to match the current theme', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('button', { name: /switch to light theme/i })).toBeInTheDocument();
  });

  it('still toggles when localStorage throws', async () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    try {
      const user = userEvent.setup();
      render(<ThemeToggle />);
      await user.click(screen.getByRole('button'));
      expect(document.documentElement).toHaveClass('dark');
    } finally {
      spy.mockRestore();
    }
  });
});
