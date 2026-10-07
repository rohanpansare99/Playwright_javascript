//import { test, expect } from '@playwright/test';
import { test, expect } from '@playwright/test';

test('Create Order Unique Order- Verify Order @smoke', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("h2")).toContainText("List of All Orders")
  //await page.pause();
  // Create Order Part
  await page.getByRole('link', { name: 'Order', exact: true }).click();
  await page.getByRole('combobox', { name: 'Product:*' }).selectOption('FamilyAlbum');
  await page.getByLabel('Quantity:*').fill('5');
  //await page.getByLabel('Customer name:*').click();
  
  const d = new Date();
  let ms = d.getTime();
  // Local variable declaration - let, var and const
  const ExpUserName = 'Dixit' + ms;
  //Dixit6546567
  await page.getByLabel('Customer name:*').fill(ExpUserName);
  await page.waitForTimeout(5000);
  //await page.pause()
  await page.getByLabel('Street:*').fill('BTM')
  //await page.waitForTimeout(2000);
    //await page.waitForLoadState();
  //await page.getByLabel('Street:*').isEditable().fill('BTM');
  await page.getByLabel('City:*').fill('Bangalore');
  await page.getByLabel('Zip:*').click();
  await page.getByLabel('Zip:*').fill('560076');
  await page.getByLabel('Visa').check();
  await page.getByLabel('Card Nr:*').click();
  await page.getByLabel('Card Nr:*').fill('1234567891');
  await page.getByLabel('Expire date (mm/yy):*').fill('12/23');
  await page.getByRole('link', { name: 'Process' }).click();
 
  const neworder = await page.locator("//strong[normalize-space()='New order has been successfully added.']")
  await expect(neworder).toContainText('New order has been successfully added.')

  await page.getByRole('link', { name: 'View all orders' }).click();
  await expect(page.getByText(ExpUserName)).toHaveText(ExpUserName)
  //await expect(page.locator("//td[text()='"+ExpUserName+"']")).toHaveText(ExpUserName)
  
  await page.getByRole('link', { name: 'Logout' }).click()
  await expect(page).toHaveURL('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx')
});

