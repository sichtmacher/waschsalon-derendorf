import { test, expect } from '@playwright/test';

test.describe('Impressum', () => {
  test('contains Laura Maskos, Heyestr. 152, GmbH in Gründung, telefon', async ({ page }) => {
    const res = await page.goto('/impressum');
    expect(res?.status()).toBe(200);
    const body = await page.locator('body').innerText();
    expect(body).toContain('Laura Maskos');
    expect(body).toContain('Heyestr. 152');
    expect(body).toContain('40625 Düsseldorf');
    expect(body).toContain('GmbH in Gründung');
    expect(body).toContain('+49 211 54202673');
    expect(body).toContain('haftet Laura Maskos als natürliche Person');
  });

  test('does NOT list Münsterstr. 88 as operator address (Pitfall 3)', async ({ page }) => {
    await page.goto('/impressum');
    const body = await page.locator('body').innerText();
    // Münsterstr. 88 must NOT appear in the Angaben-Block (operator address). A link to / is OK.
    // Simplest check: whole page text should not contain "Münsterstr. 88" at all.
    expect(body).not.toContain('Münsterstr. 88');
  });
});

test.describe('Datenschutz', () => {
  test('contains Google Fonts self-hosted clause + Videoüberwachung section', async ({ page }) => {
    const res = await page.goto('/datenschutz');
    expect(res?.status()).toBe(200);
    const body = await page.locator('body').innerText();
    expect(body).toMatch(/Google\s*Fonts/i);
    expect(body).toMatch(/lokal.*gehostet|self.hosted|auf unserem Server/i);
    expect(body).toMatch(/keine Daten an Google/i);
    expect(body).toMatch(/Videoüberwachung/);
    expect(body).toMatch(/Art\.\s*6\s*Abs\.\s*1\s*lit\.\s*f\s*DSGVO/);
  });
});
