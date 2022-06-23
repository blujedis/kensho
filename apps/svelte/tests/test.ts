import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/started');
	expect(await page.textContent('h1')).toBe('Kensho Form Controller & Validation');
});
