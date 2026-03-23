import { test, expect } from '@playwright/test';

test.describe('Terminal Window', () => {
  test('Terminal is hidden on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const appContainer = page.locator('#root > div');
    await expect(appContainer).toBeVisible();

    const terminalTitle = page.getByText('Terminal ~ JoaoVMarques@Portfolio');
    await expect(terminalTitle).toBeHidden();
  });

  test('Terminal is visible on desktop viewport and animates welcome message', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    const terminalTitle = page.getByText('Terminal ~ JoaoVMarques@Portfolio');
    await expect(terminalTitle).toBeVisible();

    const welcomeMessage = page.getByText('Welcome to my Portfolio!');
    await expect(welcomeMessage).toBeVisible({ timeout: 10000 });

    const cursor = page.locator('text="_"');
    await expect(cursor).toBeVisible();
  });
});
