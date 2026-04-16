import { test, expect } from '@playwright/test';

test.describe('Home page @smoke', () => {
  test('loads with 200 and has expected <title>', async ({ page }) => {
    const res = await page.goto('/');
    expect(res?.status()).toBe(200);
    await expect(page).toHaveTitle(/Waschsalon Derendorf/);
  });

  test('has lang="de" on <html>', async ({ page }) => {
    await page.goto('/');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('de');
  });

  test('sticky nav appears after hero scroll', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('#sticky-nav');
    // Before scroll: hidden (opacity-0 pointer-events-none)
    await expect(nav).toHaveClass(/opacity-0/);
    // After scrolling past hero (80vh)
    await page.evaluate(() => window.scrollTo(0, window.innerHeight));
    await expect(nav).toHaveClass(/opacity-100/);
  });
});
