import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = page.getByTestId('checkout');
  }

  async goto() {
    await this.page.goto('/cart.html');
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }

  async assertOnCartPage() {
    await expect(this.page).toHaveURL(/cart/);
  }
}