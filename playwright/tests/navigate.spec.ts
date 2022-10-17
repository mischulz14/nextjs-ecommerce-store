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
  await page.locator('.modal-btn').click();
  await page
    .locator(
      'li:has-text("Added to cart!DoveDifficulty: 110$") [data-test-id="product-add-to-cart"]',
    )
    .click();

  await expect(page.locator(':nth-match(.cart-test, 1)')).toHaveText('1');
});

test('test price after adding to cart', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page.locator('.modal-btn').click();
  await page
    .locator(
      'li:has-text("Added to cart!DoveDifficulty: 110$") [data-test-id="product-add-to-cart"]',
    )
    .click();
  await page.goto('http://localhost:3000/cart');

  await expect(page.locator('.cart-total')).toHaveText('10');
});

test('test changing quantity in the single product page', async ({ page }) => {
  await page.goto('http://localhost:3000/products/19');
  await page.locator('.modal-btn').click();
  await page.locator('.increase-btn').click();
  await page.locator('.add-to-cart-btn').click();
  await expect(page.locator(':nth-match(.cart-test, 1)')).toHaveText('2');
});

test('test changing quantity in the cart', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page.locator('.modal-btn').click();
  await page.locator(':nth-match(.add-to-cart-btn, 1)').click();
  await page.goto('http://localhost:3000/cart');
  await page.locator('.increase-btn-cart').click();
  await expect(page.locator(':nth-match(.cart-test, 1)')).toHaveText('2');
});

test('test removing item from cart', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page.locator('.modal-btn').click();
  await page.locator(':nth-match(.add-to-cart-btn, 1)').click();
  await page.goto('http://localhost:3000/cart');
  await page.locator('.remove-btn').click();
  await expect(page.locator('.cart-total')).toHaveText('0');
});

test('test checkout button', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page.locator('.modal-btn').click();
  await page.locator(':nth-match(.add-to-cart-btn, 1)').click();
  await page.goto('http://localhost:3000/cart');
  await page.locator('.checkout-btn').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
});

// TODO fix this test (doesn't work)
test('test checkout form', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page.locator('.modal-btn').click();
  await page.locator(':nth-match(.add-to-cart-btn, 1)').click();
  await page.goto('http://localhost:3000/cart');
  await page.locator('.checkout-btn').click();
  await page.fill('#first-name', 'test');
  await page.fill('#last-name', 'test');
  await page.fill('#email', 'test@test.com');
  await page.fill('#address', 'test');
  await page.fill('#city', 'test');
  await page.selectOption('#country', 'Austria');
  await page.fill('#zip', 'test');
  await page.fill('#ccn', '4242424242424242');
  await page.fill('#expiration-date', '1111');
  await page.fill('#security-code', '111');
  await page.locator('.checkout-confirm-order').click();
  await expect(page).toHaveURL('http://localhost:3000/thankyou');
});

test('test thank you page', async ({ page }) => {
  await page.goto('http://localhost:3000/thankyou');
  await expect(page.locator('h1')).toHaveText('Thank you for your order!');
});
