import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('ra');
  await page.waitForTimeout(5000);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  // await page.getByRole('option', { name: 'Ranga  Akunuri' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(2).click();
   const d = new Date();
  let ms = d.getTime();
  // Local variable declaration - let, var and const
  const ExpUserName = 'Rajesh' + ms;
  await page.getByRole('textbox').nth(2).fill(ExpUserName);
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Raj@123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('Raj@123');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('table')).toContainText(ExpUserName);

//   await page.locator("//td[normalize-space()='"+ExpUserName+"']//following-sibling::td/input[@type='image']").click();
  await page.locator("//div[normalize-space()='"+ExpUserName+"']/parent::div[@role='cell']/following-sibling::div//i[@class='oxd-icon bi-pencil-fill']").click();
  await page.waitForTimeout(3000)
  await page.getByText('Enabled').click();
  await page.getByRole('option', { name: 'Disabled' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(50000);

  await expect(page.locator("//div[normalize-space()='"+ExpUserName+"']/parent::div/following-sibling::div/div[text()='Disabled']")).toHaveText('Disabled');

//div[text()='Agus Salim2']/parent::div/following-sibling::div/div[text()='Enabled']




  //logout
  await page.getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});