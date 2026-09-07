import { expect, test } from '@playwright/test';

test('navigates between pages client-side', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'CV', exact: true }).click();
  await expect(page).toHaveURL('/cv');
  await expect(page.getByRole('heading', { level: 1, name: 'CV' })).toBeVisible();
});

test('theme choice survives a reload', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /switch to dark theme/i }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
});

test('renders the local time in the footer', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText(/Zurich · \d{2}:\d{2}/)).toBeVisible();
});

test('unknown paths render the 404 page', async ({ page }) => {
  await page.goto('/definitely-not-a-page');
  await expect(page.getByRole('heading', { level: 1, name: /page not found/i })).toBeVisible();
});

test('skip link moves focus to main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: /skip to content/i })).toBeFocused();
});
