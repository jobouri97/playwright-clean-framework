import { test as base } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { ProductsPage } from '@pages/ProductsPage';
import { CartPage } from '@pages/CartPage';
import { CheckoutPage } from '@pages/CheckoutPage';
import { UserClient } from '@api/clients/UserClient';

type Pages = {
  homePage: HomePage;
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  userClient: UserClient;

};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  userClient: async ({ request }, use) => {
    const client = new UserClient(request);
    await use(client);
  },
});

export { expect } from '@playwright/test';