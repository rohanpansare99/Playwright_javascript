
//import { expect, Locator, Page } from '@playwright/test'
import { expect, Locator, Page } from '@playwright/test';
export class ForgetPasswordPage {
   page= Page
   emailIDTextbox= Locator
   sendPasswordButton= Locator
   message= Locator

  constructor(page= Page) {
    this.page = page
    this.emailIDTextbox = page.getByRole('textbox', { name: 'Email' })
    this.sendPasswordButton = page.getByRole('button')
    this.message = page.locator('div.offset3.span6')   
  }

  async EnterEmailId(emailID = string) {
  
    await this.emailIDTextbox.type(emailID);

  }


  async clickOnSendPasswordButton() {
    await this.sendPasswordButton.click();
  }

  async assertSuccessMessage(emailID= string) {
    await expect(this.message).toBeVisible()
    await expect(this.message).toContainText(`Your password will be sent to the following email: ${emailID}`)
  }
}
