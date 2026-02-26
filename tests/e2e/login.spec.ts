import { test } from '@fixtures/test';
import { users } from '@data/users';

test('user can login @smoke @auth', async ({ loginPage, productsPage }) => {
  await loginPage.goto();
  await loginPage.login(users.standard);

  await productsPage.assertOnProductsPage();
});


