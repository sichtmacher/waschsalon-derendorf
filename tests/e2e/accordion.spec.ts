import { test, expect } from '@playwright/test';

test.describe('FAQ accordion @smoke', () => {
  test('renders 12 <details> elements with name="faq-group"', async ({ page }) => {
    await page.goto('/#faq');
    const details = page.locator('details[name="faq-group"]');
    await expect(details).toHaveCount(12);
  });

  test('single-open: opening one collapses siblings', async ({ page }) => {
    await page.goto('/#faq');
    const first = page.locator('details[name="faq-group"]').nth(0);
    const second = page.locator('details[name="faq-group"]').nth(1);
    await first.locator('summary').click();
    await expect(first).toHaveAttribute('open', '');
    await second.locator('summary').click();
    await expect(second).toHaveAttribute('open', '');
    // single-open via name attribute closes first
    await expect(first).not.toHaveAttribute('open', '');
  });

  test('category headers render three groups', async ({ page }) => {
    await page.goto('/#faq');
    await expect(page.getByRole('heading', { name: 'Bedienung & Technik' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Preise & Bezahlung' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Service & Standort' })).toBeVisible();
  });
});
