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
