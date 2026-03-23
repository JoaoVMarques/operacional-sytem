import { test, expect } from '@playwright/test';

test.describe('Terminal Command Execution', () => {
  test('should execute the help command and display history', async ({ page }) => {
    await page.goto('/'); 

    const inputLocator = page.locator('input[type="text"]');
    await inputLocator.waitFor({ state: 'attached', timeout: 10000 });

    await inputLocator.fill('help');
    await inputLocator.press('Enter');

    await expect(page.locator('text=$> help')).toBeVisible();

    await expect(page.locator('text=help').nth(1)).toBeVisible();
  });

  test('should display error for unknown commands', async ({ page }) => {
    await page.goto('/');

    const inputLocator = page.locator('input[type="text"]');
    await inputLocator.waitFor({ state: 'attached', timeout: 10000 });

    await inputLocator.fill('notacommand');
    await inputLocator.press('Enter');

    await expect(page.locator('text=$> notacommand')).toBeVisible();
    await expect(page.locator('text=Command not found: notacommand')).toBeVisible();
  });
});
