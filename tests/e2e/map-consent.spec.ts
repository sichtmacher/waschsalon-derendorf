import { test, expect } from '@playwright/test';

test('consent gate: no iframe before click', async ({ page }) => {
  await page.goto('/#kontakt');
  await expect(page.getByRole('button', { name: 'Karte laden' })).toBeVisible();
  const iframes = page.locator('iframe[src*="google.com/maps"]');
  await expect(iframes).toHaveCount(0);
});

test('loads iframe on click', async ({ page }) => {
  await page.goto('/#kontakt');
  await page.getByRole('button', { name: 'Karte laden' }).click();
  const iframe = page.locator('iframe[src*="google.com/maps"]');
  await expect(iframe).toHaveCount(1);
  const src = await iframe.getAttribute('src');
  expect(src).toContain('Münsterstr');
});
