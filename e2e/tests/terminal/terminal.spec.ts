import { test, expect } from '@playwright/test';

test('has terminal window with correct title', async ({ page }) => {
  await page.goto('/');

  const windowTitle = page.getByText('Terminal ~ JoaoVMarques@Portfolio');
  await expect(windowTitle).toBeVisible();
});
