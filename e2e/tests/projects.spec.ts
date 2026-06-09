import { test, expect } from '@playwright/test';

test.describe('Projects Window E2E', () => {
  test('should open Projects window and show projects', async ({ page }) => {
    await page.goto('/');

    const projectsIcon = page.getByText('Projects', { exact: true });
    await expect(projectsIcon).toBeVisible();
    await projectsIcon.click();

    const projectsWindowHeader = page.locator('.window-drag-handle').filter({ hasText: 'Projects' });
    await expect(projectsWindowHeader).toBeVisible();

    const projectsGrid = page.locator('[data-testid="projects-grid"]');
    await expect(projectsGrid).toBeVisible();

    const portfolioHeading = projectsGrid.locator('h3', { hasText: 'Portfolio OS' });
    await expect(portfolioHeading).toBeVisible();

    const portfolioLink = portfolioHeading.locator('xpath=ancestor::a');
    await expect(portfolioLink).toHaveAttribute('href', 'https://github.com/JoaoVMarques/operacional-sytem');
    await expect(portfolioLink).toHaveAttribute('target', '_blank');

    const placeholderHeadings = projectsGrid.locator('h3', { hasText: 'Placeholder Project' });
    const count = await placeholderHeadings.count();
    expect(count).toBeGreaterThanOrEqual(1);

    for (let i = 0; i < count; i++) {
      const heading = placeholderHeadings.nth(i);
      const card = heading.locator('xpath=ancestor::div[contains(@class,"rounded-xl")]');
      await expect(card.locator('a')).toHaveCount(0);
    }
  });
});
