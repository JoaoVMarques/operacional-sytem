import { test, expect } from '@playwright/test';

test('window can be resized from the right edge', async ({ page }) => {
  await page.goto('/');

  const title = page.getByText('Terminal ~ JoaoVMarques@Portfolio');
  const titleBar = title.locator('..');
  const windowContainer = titleBar.locator('..');

  const initialBox = await windowContainer.boundingBox();
  expect(initialBox).not.toBeNull();
  if (!initialBox) {return;}

  const dragStartX = initialBox.x + initialBox.width - 2;
  const dragStartY = initialBox.y + initialBox.height / 2;

  await page.mouse.move(dragStartX, dragStartY);
  await page.mouse.down();
  await page.mouse.move(dragStartX + 100, dragStartY, { steps: 10 });
  await page.mouse.up();

  await page.waitForTimeout(100);

  const newBox = await windowContainer.boundingBox();
  expect(newBox).not.toBeNull();
  if (!newBox) {return;}

  expect(newBox.width).toBeGreaterThan(initialBox.width + 50);
});
