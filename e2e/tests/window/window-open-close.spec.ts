import { test, expect } from '@playwright/test';
import { DesktopApps } from '../../../src/data/desktop/Icons';

test.describe('PC Viewport', () => {
  test.use({ viewport: { width: 1280, height: 720 }, isMobile: false });

  test('App can be closed and opened through desktop icon', async ({ page }) => {
    await page.goto('/');

    const terminalApp = DesktopApps.find(app => app.id === 'terminal');
    if (!terminalApp) throw new Error('Terminal app not found');
    
    const terminalWindow = page.getByText('Terminal ~ JoaoVMarques@Portfolio', { exact: true });
    const desktopIcon = page.getByText(terminalApp.label, { exact: true }).first();

    await expect(terminalWindow).toBeVisible();

    const closeButton = page.locator('button.bg-red-500').first();
    await closeButton.click();
    await expect(terminalWindow).toBeHidden();

    await desktopIcon.click();
    await expect(terminalWindow).toBeVisible();

    await closeButton.click();
    await expect(terminalWindow).toBeHidden();
  });
});

test.describe('Mobile Viewport', () => {
  test.skip(({ browserName }) => browserName === 'firefox', 'Firefox does not support isMobile emulation in Playwright');
  test.use({ viewport: { width: 375, height: 667 }, isMobile: true, hasTouch: true });

  test('App can be opened and closed through desktop icon', async ({ page }) => {
    await page.goto('/');

    const terminalApp = DesktopApps.find(app => app.id === 'terminal');
    if (!terminalApp) throw new Error('Terminal app not found');
    
    const terminalWindow = page.getByText('Terminal ~ JoaoVMarques@Portfolio', { exact: true });
    const desktopIcon = page.getByText(terminalApp.label, { exact: true }).first();

    await expect(terminalWindow).toBeHidden();

    await desktopIcon.click();
    await expect(terminalWindow).toBeVisible();

    const maximizeButton = page.locator('button.bg-green-500').first();
    await expect(maximizeButton).toBeHidden();

    const closeButton = page.locator('button.bg-red-500').first();
    await expect(closeButton).toBeInViewport();
    await closeButton.click();
    await expect(terminalWindow).toBeHidden();
  });
});
