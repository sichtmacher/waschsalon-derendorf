import { test, expect } from '@playwright/test';

test.describe('JSON-LD structured data', () => {
  test('LocalBusiness: @type LaundryService, address, openingHoursSpecification', async ({ page }) => {
    await page.goto('/');
    const blobs = await page.locator('script[type="application/ld+json"]').allTextContents();
    const parsed = blobs.map(b => JSON.parse(b));
    const business = parsed.find(p => p['@type'] === 'LaundryService' || p['@type'] === 'LocalBusiness');
    expect(business).toBeDefined();
    expect(business['@type']).toBe('LaundryService');
    expect(business.address?.streetAddress).toBe('Münsterstr. 88');
    expect(business.address?.postalCode).toBe('40477');
    expect(business.address?.addressLocality).toBe('Düsseldorf');
    expect(business.address?.addressCountry).toBe('DE');
    expect(business.telephone).toBe('+49 211 54202673');
    expect(business.openingHoursSpecification).toBeDefined();
    expect(business.openingHoursSpecification.opens).toBe('06:00');
    expect(business.openingHoursSpecification.closes).toBe('22:00');
    expect(business.openingHoursSpecification.dayOfWeek).toContain('Monday');
    expect(business.openingHoursSpecification.dayOfWeek).toContain('Sunday');
    expect(business.openingHoursSpecification.dayOfWeek).toHaveLength(7);
  });

  test('FAQPage: mainEntity has 12 Question/Answer pairs', async ({ page }) => {
    await page.goto('/');
    const blobs = await page.locator('script[type="application/ld+json"]').allTextContents();
    const parsed = blobs.map(b => JSON.parse(b));
    const faq = parsed.find(p => p['@type'] === 'FAQPage');
    expect(faq).toBeDefined();
    expect(Array.isArray(faq.mainEntity)).toBe(true);
    expect(faq.mainEntity).toHaveLength(12);
    for (const entry of faq.mainEntity) {
      expect(entry['@type']).toBe('Question');
      expect(entry.name).toBeTruthy();
      expect(entry.acceptedAnswer?.['@type']).toBe('Answer');
      expect(entry.acceptedAnswer?.text).toBeTruthy();
    }
  });
});
