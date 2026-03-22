import { test, expect } from '@playwright/test';
import { DesktopApps } from '../../../src/data/desktop/Icons';

test.describe('Window Maximize', () => {
  test.use({ viewport: { width: 1280, height: 720 }, isMobile: false });

  test('Window can be maximized and restored', async ({ page }) => {
    await page.goto('/');

    const terminalApp = DesktopApps.find(app => app.id === 'terminal');
    if (!terminalApp) throw new Error('Terminal app not found');

    const terminalWindow = page.getByText('Terminal ~ JoaoVMarques@Portfolio', { exact: true });
    await expect(terminalWindow).toBeVisible();

    const windowInner = page.locator('.bg-stone-700').first();
    const windowContainer = windowInner.locator('..');
    
    await page.waitForTimeout(500);

    const initialBox = await windowContainer.boundingBox();
    expect(initialBox).toBeDefined();
    const maximizeButton = page.locator('button.bg-green-500').first();

    await maximizeButton.click();
    await page.waitForTimeout(500);

    const maximizedBox = await windowContainer.boundingBox();
    expect(maximizedBox).toBeDefined();
    
    expect(maximizedBox!.width).toBeGreaterThan(initialBox!.width);
    expect(maximizedBox!.x).toBe(0);
    expect(maximizedBox!.y).toBe(0);
    await maximizeButton.click();
    await page.waitForTimeout(500);

    const restoredBox = await windowContainer.boundingBox();
    expect(restoredBox).toBeDefined();

    expect(restoredBox!.width).toBe(initialBox!.width);
    expect(restoredBox!.height).toBe(initialBox!.height);
    expect(restoredBox!.x).toBe(initialBox!.x);
    expect(restoredBox!.y).toBe(initialBox!.y);
  });
});
