import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly addBackpackBtn: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByTestId('title');
    this.addBackpackBtn = page.getByTestId('add-to-cart-sauce-labs-backpack');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async assertOnProductsPage() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.title).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.addBackpackBtn.click();
  }

  async assertCartCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }
}