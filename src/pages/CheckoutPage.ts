import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByTestId('firstName');
    this.lastName = page.getByTestId('lastName');
    this.postalCode = page.getByTestId('postalCode');
    this.continueBtn = page.getByTestId('continue');
    this.finishBtn = page.getByTestId('finish');
    this.completeHeader = page.locator('.complete-header');
  }

  async fillInformation(data: { first: string; last: string; zip: string }) {
    await this.firstName.fill(data.first);
    await this.lastName.fill(data.last);
    await this.postalCode.fill(data.zip);
    await this.continueBtn.click();
  }

  async finishOrder() {
    await this.finishBtn.click();
  }

  async assertOrderComplete() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}