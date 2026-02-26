import { test, expect } from '@fixtures/test';

test('home page has title', async ({ homePage }) => {
  await homePage.goto();
  await homePage.assertTitleContains(/Swag Labs/);
});