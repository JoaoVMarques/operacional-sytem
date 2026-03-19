import { test, expect } from '@playwright/test';

test.describe('Responsive Terminal', () => {
  test('Terminal is hidden on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('http://localhost:5173/');

    const appContainer = page.locator('#root > div');
    await expect(appContainer).toBeVisible();

    const terminalTitle = page.getByText('Terminal ~ JoaoVMarques@Portfolio');
    const terminalContent = page.getByText('Content');

    await expect(terminalTitle).toBeHidden();
    await expect(terminalContent).toBeHidden();
  });

  test('Terminal is visible on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('http://localhost:5173/');

    const terminalTitle = page.getByText('Terminal ~ JoaoVMarques@Portfolio');
    const terminalContent = page.getByText('Content');

    await expect(terminalTitle).toBeVisible();
    await expect(terminalContent).toBeVisible();
  });
});
