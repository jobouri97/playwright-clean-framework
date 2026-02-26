import { test } from '@fixtures/test';
import { users } from '@data/users';

test('user can add product to cart', async ({ loginPage, productsPage }) => {
  await loginPage.goto();
  await loginPage.login(users.standard);

  await productsPage.assertOnProductsPage();
  await productsPage.addBackpackToCart();
  await productsPage.assertCartCount('1');
});