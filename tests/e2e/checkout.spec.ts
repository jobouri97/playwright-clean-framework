import { test } from '@fixtures/test';

test('user can complete checkout flow @e2e @checkout', async ({
  page,
  productsPage,
  cartPage,
  checkoutPage,
}) => {
  // Auto-login is already applied via storageState

  await page.goto('/inventory.html');

  await productsPage.addBackpackToCart();
  await cartPage.goto();
  await cartPage.assertOnCartPage();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillInformation({
    first: 'Ali',
    last: 'QA',
    zip: '12345',
  });

  await checkoutPage.finishOrder();
  await checkoutPage.assertOrderComplete();
});