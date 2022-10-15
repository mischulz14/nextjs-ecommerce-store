import { expect, test } from '@playwright/test';

// E2E tests for the app

test('navigate to home page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toHaveText('DO YOU LOVE ORIGAMI?');

  await expect(page.locator('role=button[name="light dark"]')).toBeVisible();

  await page.locator('role=link[name="PRODUCTS"]').click();
  await expect(page).toHaveURL('http://localhost:3000/products');
});
