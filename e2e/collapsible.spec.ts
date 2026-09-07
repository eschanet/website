import { expect, test } from '@playwright/test';

test('Experience is open on arrival, Education and Skills are collapsed', async ({ page }) => {
  await page.goto('/cv');
  await expect(page.getByRole('heading', { name: 'UBS Switzerland AG' })).toBeVisible();
  await expect(page.getByText('Summa cum laude')).toBeHidden();
  // Scoped to the Skills section: "Kubernetes" also appears in UBS highlights.
  await expect(
    page.getByRole('group').filter({ hasText: 'Skills' }).getByText('Cloud & Platform'),
  ).toBeHidden();
});

test('clicking a section header expands and collapses it', async ({ page }) => {
  await page.goto('/cv');
  const education = page.getByRole('group').filter({ hasText: 'Education' });
  const grade = page.getByText('Summa cum laude');

  await education.locator('summary').click();
  await expect(grade).toBeVisible();

  await education.locator('summary').click();
  await expect(grade).toBeHidden();
});

test('sections are keyboard operable', async ({ page }) => {
  await page.goto('/cv');
  const grade = page.getByText('Summa cum laude');
  await page.getByRole('group').filter({ hasText: 'Education' }).locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(grade).toBeVisible();
});

test('collapsed sections do not trap the chevron rotation state', async ({ page }) => {
  await page.goto('/cv');
  const skills = page.getByRole('group').filter({ hasText: 'Skills' });
  await expect(skills).not.toHaveAttribute('open', '');
  await skills.locator('summary').click();
  await expect(skills).toHaveAttribute('open', '');
});

test('each position inside Experience is its own disclosure', async ({ page }) => {
  await page.goto('/cv');
  for (const org of ['Bank Vontobel AG', 'UBS Switzerland AG', 'LMU Munich, CERN']) {
    await expect(page.getByRole('heading', { level: 3, name: org })).toBeVisible();
  }
});

test('only the current position is expanded on arrival', async ({ page }) => {
  await page.goto('/cv');
  // Vontobel is current, so its detail is visible.
  await expect(page.getByText('Platform and delivery engineering')).toBeVisible();
  // UBS and CERN are collapsed, so their highlights are hidden.
  await expect(page.getByText('Technical lead for the migration')).toBeHidden();
  await expect(page.getByText('Petabyte-scale statistical data analysis')).toBeHidden();
});

test('expanding a past position reveals its highlights', async ({ page }) => {
  await page.goto('/cv');
  await page.getByRole('heading', { level: 3, name: 'UBS Switzerland AG' }).click();
  await expect(page.getByText('Technical lead for the migration')).toBeVisible();
  await expect(page.getByText(/Reduced the portfolio data pipeline lag/)).toBeVisible();
});

test('nested positions expand without JavaScript', async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const p = await ctx.newPage();
  await p.goto('/cv');
  const detail = p.getByText('Petabyte-scale statistical data analysis');
  await expect(detail).toBeHidden();
  // Click the heading itself: filtering groups by text also matches the
  // enclosing Experience section, which would collapse everything instead.
  await p.getByRole('heading', { level: 3, name: 'LMU Munich, CERN' }).click();
  await expect(detail).toBeVisible();
  await ctx.close();
});

test('collapsing Experience hides every nested position', async ({ page }) => {
  await page.goto('/cv');
  await expect(page.getByRole('heading', { level: 3, name: 'UBS Switzerland AG' })).toBeVisible();
  await page.getByRole('heading', { level: 2, name: 'Experience' }).click();
  await expect(page.getByRole('heading', { level: 3, name: 'UBS Switzerland AG' })).toBeHidden();
});

test('a collapsed nested entry shows an unrotated chevron', async ({ page }) => {
  await page.goto('/cv');
  // Regression guard: unnamed Tailwind groups compile to a descendant
  // selector, so a nested chevron would rotate whenever the enclosing
  // Experience section was open, regardless of its own state.
  const chevronOf = (org: string) =>
    page.locator(`details:has(> summary h3:text-is("${org}")) > summary svg`);

  // Tailwind v4 emits the standalone `rotate` property, not a `transform`,
  // so reading .transform here would report `none` in both states.
  const unrotated = (r: string) => r === 'none' || r === '0deg';

  const ubs = chevronOf('UBS Switzerland AG');
  expect(unrotated(await ubs.evaluate((el) => getComputedStyle(el).rotate))).toBe(true);

  // The open one is rotated.
  const vontobel = chevronOf('Bank Vontobel AG');
  expect(await vontobel.evaluate((el) => getComputedStyle(el).rotate)).toBe('90deg');

  // And it rotates once expanded.
  await page.getByRole('heading', { level: 3, name: 'UBS Switzerland AG' }).click();
  await page.waitForTimeout(300);
  expect(await ubs.evaluate((el) => getComputedStyle(el).rotate)).toBe('90deg');
});

test('expanding one position collapses the others', async ({ page }) => {
  await page.goto('/cv');
  const vontobelDetail = page.getByText('Platform and delivery engineering');
  const ubsDetail = page.getByText('Technical lead for the migration');

  await expect(vontobelDetail).toBeVisible();
  await expect(ubsDetail).toBeHidden();

  await page.getByRole('heading', { level: 3, name: 'UBS Switzerland AG' }).click();
  await expect(ubsDetail).toBeVisible();
  await expect(vontobelDetail).toBeHidden();

  await page.getByRole('heading', { level: 3, name: 'LMU Munich, CERN' }).click();
  await expect(page.getByText('Petabyte-scale statistical data analysis')).toBeVisible();
  await expect(ubsDetail).toBeHidden();
  await expect(vontobelDetail).toBeHidden();
});

test('accordion exclusivity works without JavaScript', async ({ browser }) => {
  // Native <details name> is browser behaviour, not script.
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const p = await ctx.newPage();
  await p.goto('/cv');
  await p.getByRole('heading', { level: 3, name: 'UBS Switzerland AG' }).click();
  await expect(p.getByText('Technical lead for the migration')).toBeVisible();
  await expect(p.getByText('Platform and delivery engineering')).toBeHidden();
  await ctx.close();
});

test('only the expanded position carries the highlight background', async ({ page }) => {
  await page.goto('/cv');
  const entry = (org: string) => page.locator(`details:has(> summary h3:text-is("${org}"))`);
  const bg = (org: string) => entry(org).evaluate((el) => getComputedStyle(el).backgroundColor);

  const open = await bg('Bank Vontobel AG');
  const closed = await bg('UBS Switzerland AG');

  // Closed entries inherit the page background (transparent).
  expect(closed).toBe('rgba(0, 0, 0, 0)');
  expect(open).not.toBe('rgba(0, 0, 0, 0)');

  // The highlight follows the open entry.
  await page.getByRole('heading', { level: 3, name: 'UBS Switzerland AG' }).click();
  await page.waitForTimeout(300);
  expect(await bg('UBS Switzerland AG')).toBe(open);
  expect(await bg('Bank Vontobel AG')).toBe('rgba(0, 0, 0, 0)');
});

test('the highlight is lighter than the page in both themes', async ({ page }) => {
  await page.goto('/cv');
  const luminance = (rgb: string): number => {
    const parts = rgb.match(/\d+/g)?.map(Number) ?? [];
    const [r = 0, g = 0, b = 0] = parts;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const read = async () => ({
    page: await page.locator('body').evaluate((el) => getComputedStyle(el).backgroundColor),
    box: await page
      .locator('details:has(> summary h3:text-is("Bank Vontobel AG"))')
      .evaluate((el) => getComputedStyle(el).backgroundColor),
  });

  const light = await read();
  expect(luminance(light.box)).toBeGreaterThan(luminance(light.page));

  await page.getByRole('button', { name: /switch to dark theme/i }).click();
  await page.waitForTimeout(300);
  const dark = await read();
  expect(luminance(dark.box)).toBeGreaterThan(luminance(dark.page));
});
