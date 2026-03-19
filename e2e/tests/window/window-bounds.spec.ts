import { test, expect } from '@playwright/test';

test('window cannot be dragged off the screen to cause scrollbars', async ({ page }) => {
  await page.goto('/');

  const title = page.getByText('Terminal ~ JoaoVMarques@Portfolio');
  const titleBar = title.locator('..');

  const initialBox = await titleBar.boundingBox();
  expect(initialBox).not.toBeNull();
  if (!initialBox) {return;}

  await page.mouse.move(initialBox.x + 10, initialBox.y + 10);
  await page.mouse.down();
  await page.mouse.move(initialBox.x + 3000, initialBox.y + 3000, { steps: 10 });
  await page.mouse.up();

  await page.waitForTimeout(100);

  const hasScrollbars = await page.evaluate(() => {
    return (
      document.documentElement.scrollHeight > document.documentElement.clientHeight ||
      document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
  });
  
  expect(hasScrollbars).toBeFalsy();
});
