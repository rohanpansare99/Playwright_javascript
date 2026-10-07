import { test, expect } from '@playwright/test';

test('web Order Login Functionality', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx');
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('List of All Orders');
  await expect(page.locator('h2')).toMatchAriaSnapshot(`- heading "List of All Orders" [level=2]`);
  await page.locator('#ctl00_MainContent_orderGrid_ctl02_OrderSelector').check();
  await page.locator('#ctl00_MainContent_orderGrid_ctl02_OrderSelector').uncheck();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});