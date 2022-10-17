import { expect, test } from '@playwright/test';

// E2E tests for the app

test('navigate to home page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toHaveText('DO YOU LOVE ORIGAMI?');

  await page.locator('role=link[name="PRODUCTS"]').click();
  await expect(page).toHaveURL('http://localhost:3000/products');
});

test('add to cart button', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page
    .locator(
      'li:has-text("Added to cart!DoveDifficulty: 110$") [data-test-id="product-add-to-cart"]',
    )
    .click();

  await expect(page.locator(':nth-match(.cart-test, 1)')).toHaveText('1');
});

test('test price after adding to cart', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page
    .locator(
      'li:has-text("Added to cart!DoveDifficulty: 110$") [data-test-id="product-add-to-cart"]',
    )
    .click();
  await page.goto('http://localhost:3000/cart');

  await expect(page.locator('.cart-total')).toHaveText('10');
});

test('test changing quantity in the cart', async ({ page }) => {
  await page.goto('http://localhost:3000/products/19');
  await page.locator('.increase-btn').click();
  await page.locator('.add-to-cart-btn').click();
  await expect(page.locator(':nth-match(.cart-test, 1)')).toHaveText('2');
});
