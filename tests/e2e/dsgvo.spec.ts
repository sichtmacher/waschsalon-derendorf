import { test, expect } from '@playwright/test';

test('no external font requests on initial load', async ({ page }) => {
  const fontRequests: string[] = [];
  page.on('request', (req) => {
    const url = req.url();
    if (
      url.includes('fonts.googleapis.com') ||
      url.includes('fonts.gstatic.com') ||
      url.includes('use.typekit.net')
    ) {
      fontRequests.push(url);
    }
  });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  expect(fontRequests).toEqual([]);
});

test('no requests to google.com/gstatic.com before Maps consent', async ({ page }) => {
  const googleRequests: string[] = [];
  page.on('request', (req) => {
    const url = req.url();
    if (url.match(/(maps\.googleapis|maps\.gstatic|google\.com\/maps)/)) {
      googleRequests.push(url);
    }
  });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  expect(googleRequests).toEqual([]);
});
