import { expect, test } from '@playwright/test';

/**
 * These run with JavaScript disabled, so they can only pass if the HTML was
 * genuinely prerendered — the whole point of the SSG step.
 */
test.use({ javaScriptEnabled: false });

const routes = [
  { path: '/', heading: 'Eric Schanet' },
  { path: '/about', heading: 'About' },
  { path: '/cv', heading: 'CV' },
  { path: '/projects', heading: 'Projects' },
  { path: '/blog', heading: 'Writing' },
];

for (const { path, heading } of routes) {
  test(`${path} is served as prerendered HTML`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
  });
}

test('CV content is in the static HTML, not injected by JS', async ({ page }) => {
  await page.goto('/cv');
  // Experience is open by default, so this is visible.
  await expect(page.getByRole('heading', { name: 'Bank Vontobel AG' })).toBeVisible();
  await expect(page.getByText('Jul 2026 — Present')).toBeVisible();
});

test('collapsed section content is still present in the HTML', async ({ page }) => {
  await page.goto('/cv');
  // Education defaults collapsed, so it is hidden but must still be in the
  // markup: <details> content is served and indexed whether open or not.
  const grade = page.getByText('Summa cum laude');
  await expect(grade).toBeAttached();
  await expect(grade).toBeHidden();
});

test('sections expand without JavaScript', async ({ page }) => {
  await page.goto('/cv');
  const grade = page.getByText('Summa cum laude');
  await expect(grade).toBeHidden();
  // Native <details> toggles with no script at all.
  await page.getByRole('group').filter({ hasText: 'Education' }).locator('summary').click();
  await expect(grade).toBeVisible();
});

test('navigation is crawlable without JS', async ({ page }) => {
  await page.goto('/');
  const cv = page.getByRole('link', { name: 'CV', exact: true });
  await expect(cv).toHaveAttribute('href', '/cv');
});
