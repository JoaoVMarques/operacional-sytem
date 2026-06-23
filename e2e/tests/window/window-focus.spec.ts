import { test, expect } from '@playwright/test';

test.describe('Window Focus (z-index)', () => {
  test.use({ viewport: { width: 1280, height: 720 }, isMobile: false });

  test('clicking a window brings it to the front', async ({ page }) => {
    await page.goto('/');

    const projectsIcon = page.getByText('Projects', { exact: true });
    await projectsIcon.click();

    const terminalRnd = page.locator('.window-drag-handle', { hasText: 'Terminal ~ JoaoVMarques@Portfolio' }).locator('xpath=ancestor::div[contains(@style,"z-index")]').first();
    const projectsRnd = page.locator('.window-drag-handle', { hasText: 'Projects' }).locator('xpath=ancestor::div[contains(@style,"z-index")]').first();

    await page.locator('.window-drag-handle', { hasText: 'Projects' }).dispatchEvent('mousedown');

    const projectsZIndex = await projectsRnd.evaluate((el) => window.getComputedStyle(el).zIndex);
    const terminalZIndex = await terminalRnd.evaluate((el) => window.getComputedStyle(el).zIndex);

    expect(Number(projectsZIndex)).toBeGreaterThan(Number(terminalZIndex));

    await page.locator('.window-drag-handle', { hasText: 'Terminal ~ JoaoVMarques@Portfolio' }).dispatchEvent('mousedown');

    const terminalZIndexAfter = await terminalRnd.evaluate((el) => window.getComputedStyle(el).zIndex);
    const projectsZIndexAfter = await projectsRnd.evaluate((el) => window.getComputedStyle(el).zIndex);

    expect(Number(terminalZIndexAfter)).toBeGreaterThan(Number(projectsZIndexAfter));
  });
});
