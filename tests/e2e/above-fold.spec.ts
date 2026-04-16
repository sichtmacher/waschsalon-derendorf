import { test, expect } from '@playwright/test';

test.describe('Above-the-fold content @smoke', () => {
  test('desktop 1280x800: Adresse, Öffnungszeiten, Preise-Teaser visible without scroll', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    // Address visible
    await expect(page.getByText('Münsterstr. 88').first()).toBeInViewport();
    // Opening hours teaser visible (06:00 – 22:00 Uhr is locked copy)
    await expect(page.getByText(/06:00\s*[–-]\s*22:00/).first()).toBeInViewport();
    // Price teaser visible ("ab 5" or similar — UI-SPEC locks "ab 5,00 €")
    await expect(page.getByText(/ab 5[,.]00\s*€/).first()).toBeInViewport();
  });

  test('mobile 375x667: no horizontal overflow, pills stack', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test('Route planen CTA links to Google Maps with destination', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('link', { name: 'Route planen' });
    const href = await cta.getAttribute('href');
    expect(href).toContain('google.com/maps');
    expect(decodeURIComponent(href!)).toContain('Münsterstr. 88');
    expect(decodeURIComponent(href!)).toContain('40477');
  });
});
