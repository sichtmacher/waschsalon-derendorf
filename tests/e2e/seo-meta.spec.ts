import { test, expect } from '@playwright/test';

const pages = ['/', '/impressum', '/datenschutz'];

for (const path of pages) {
  test(`canonical + description + og tags on ${path}`, async ({ page }) => {
    await page.goto(path);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toContain('waschsalon-derendorf.de');
    const desc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(desc?.length).toBeGreaterThan(20);
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
    const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');
    expect(ogType).toBe('website');
    const ogLocale = await page.locator('meta[property="og:locale"]').getAttribute('content');
    expect(ogLocale).toBe('de_DE');
  });
}

test('sitemap-index.xml lists /, /impressum, /datenschutz', async ({ request }) => {
  const indexRes = await request.get('/sitemap-index.xml');
  expect(indexRes.status()).toBe(200);
  const indexBody = await indexRes.text();
  const mapMatch = indexBody.match(/<loc>(.*?sitemap-0\.xml.*?)<\/loc>/);
  expect(mapMatch).not.toBeNull();
  const mapRes = await request.get(mapMatch![1].replace('https://waschsalon-derendorf.de', ''));
  expect(mapRes.status()).toBe(200);
  const mapBody = await mapRes.text();
  expect(mapBody).toMatch(/<loc>[^<]*\/<\/loc>|<loc>[^<]*waschsalon-derendorf\.de\/<\/loc>/);
  expect(mapBody).toContain('/impressum');
  expect(mapBody).toContain('/datenschutz');
});
