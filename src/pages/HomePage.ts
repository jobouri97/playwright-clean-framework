import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async assertTitleContains(text: string | RegExp) {
    await expect(this.page).toHaveTitle(text);
  }
}