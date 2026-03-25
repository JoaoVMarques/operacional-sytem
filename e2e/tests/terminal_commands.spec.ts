import { test, expect } from '@playwright/test';

test.describe('Terminal Command Execution', () => {
  test('should execute the help command and display history', async ({ page }) => {
    await page.goto('/'); 

    const inputLocator = page.locator('input[type="text"]');
    await inputLocator.waitFor({ state: 'attached', timeout: 10000 });

    await inputLocator.fill('help');
    await inputLocator.press('Enter');

    await expect(page.locator('input[type="text"]')).toBeHidden();

    await expect(page.locator('input[type="text"]')).toBeAttached({ timeout: 10000 });
    
    await expect(page.locator('text=$> help')).toBeVisible();

    await expect(page.locator('text=Utilities:')).toBeVisible();
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

  test('should allow vertical scrolling when output exceeds terminal height', async ({ page }) => {
    await page.goto('/');

    const inputLocator = page.locator('input[type="text"]');
    await inputLocator.waitFor({ state: 'attached', timeout: 10000 });

    for (let i = 0; i < 5; i++) {
        await inputLocator.fill('help');
        await inputLocator.press('Enter');
    }

    const terminalContainer = page.locator('.bg-slate-950');
    await expect(terminalContainer).toHaveCSS('overflow-y', 'auto');
    
    const dragHandle = page.locator('.window-drag-handle');
    await expect(dragHandle).toBeVisible();
  });

  test('should clear the terminal on clear command', async ({ page }) => {
    await page.goto('/');

    const inputLocator = page.locator('input[type="text"]');
    await inputLocator.waitFor({ state: 'attached', timeout: 10000 });

    await inputLocator.fill('help');
    await inputLocator.press('Enter');

    await expect(page.locator('text=$> help')).toBeVisible();
    await expect(page.locator('text=Utilities:')).toBeVisible();

    await inputLocator.fill('clear');
    await inputLocator.press('Enter');

    await expect(page.locator('text=$> help')).toBeHidden();
    await expect(page.locator('text=Utilities:')).toBeHidden();
  });

  test('should display contact information', async ({ page }) => {
    await page.goto('/');

    const inputLocator = page.locator('input[type="text"]');
    await inputLocator.waitFor({ state: 'attached', timeout: 10000 });

    await inputLocator.fill('contact');
    await inputLocator.press('Enter');

    await expect(page.locator('text=$> contact')).toBeVisible();
    await expect(page.locator('text=Available contacts:')).toBeVisible();
    await expect(page.locator('text=GitHub:')).toBeVisible();
  });
});
