import { test, expect } from '@playwright/test';

test('main page loads the Portfolio title', async ({ page }) => {
  await page.goto('/');

  const heading = page.locator('h1');
  await expect(heading).toHaveText('Portfolio');
});
