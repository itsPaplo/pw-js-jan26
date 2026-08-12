//Assignment: 2 Edit Lead
import {test, expect} from '@playwright/test';

test("Edit Lead validation", async ({page}) => {
  await page.goto('https://leaftaps.com/opentaps/control/main');
  await page.locator('//input[@id="username"]').fill('democsr2');
  await page.locator('//input[@id="password"]').fill('crmsfa');
  await page.locator('//input[@class="decorativeSubmit"]').click();
  await page.locator('//a[contains(text(),"CRM")]').click();
  await page.locator('//a[text()="Leads"]').click();
  await page.locator('//a[text()="Create Lead"]').click();
  await page.locator('//input[contains(@id,"companyName")]').fill('TestLeaf');
  await page.locator('//input[@id="createLeadForm_firstName"]').fill('Dave');
  await page.locator('//input[@id="createLeadForm_lastName"]').fill('Jones');
  await page.locator('//input[@class="smallSubmit"]').click();
  await expect(page.locator('//div[text()="View Lead"]')).toBeVisible();
  await page.locator('//a[text()="Edit"]').click();
  await page.locator('//input[contains(@id,"companyName")]').fill('TLF');
  await page.locator('//span[text()="New Data Source"]/preceding::input[@class="smallSubmit"]').click();
});
