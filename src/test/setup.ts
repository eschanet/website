import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';

beforeEach(() => {
  // Theme lives on <html>; reset it so tests never leak state into each other.
  document.documentElement.classList.remove('dark');
  localStorage.clear();
});

afterEach(() => {
  cleanup();
});
