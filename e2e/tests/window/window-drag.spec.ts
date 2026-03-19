import { test, expect } from '@playwright/test';

test('window can be dragged by the title bar', async ({ page }) => {
  await page.goto('/');

  const title = page.getByText('Terminal ~ JoaoVMarques@Portfolio');
  const titleBar = title.locator('..');

  const initialBox = await titleBar.boundingBox();
  expect(initialBox).not.toBeNull();
  if (!initialBox) {return;}

  await page.mouse.move(initialBox.x + 10, initialBox.y + 10);
  await page.mouse.down();
  await page.mouse.move(initialBox.x + 110, initialBox.y + 110, { steps: 10 });
  await page.mouse.up();

  await page.waitForTimeout(100);

  const newBox = await titleBar.boundingBox();
  expect(newBox).not.toBeNull();
  if (!newBox) {return;}

  expect(newBox.x).toBeGreaterThan(initialBox.x);
  expect(newBox.y).toBeGreaterThan(initialBox.y);
});
