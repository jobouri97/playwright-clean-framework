import { test as setup, expect } from '@playwright/test';
import { users } from '../../src/test-data/users';

setup('authenticate', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('username').fill(users.standard.username);
  await page.getByTestId('password').fill(users.standard.password);
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL(/inventory/);

  await page.context().storageState({ path: '.auth/standard.json' });
});