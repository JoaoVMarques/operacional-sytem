import { test, expect } from '@playwright/test';
import { DesktopApps } from '../../../src/data/desktop/Icons';

test('Desktop renders all desktop icons correctly', async ({ page }) => {
  await page.goto('/');

  for (const app of DesktopApps) {
    const appLocator = page.getByText(app.label, { exact: true });
    await expect(appLocator).toBeVisible();
  }
});
