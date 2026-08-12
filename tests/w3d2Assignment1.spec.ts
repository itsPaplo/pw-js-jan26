//Assignment: 2 Edit Lead

import {test,expect} from '@playwright/test';

test("Edit leads in salesforce and verify update", async ({page}) => {
    
    await page.goto('https://login.salesforce.com/');
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[@id="Login"]').click();
    await page.waitForSelector('//div[@aria-label="App"]//button');
    await page.locator('//div[@aria-label="App"]//button').click()
    await page.locator('//button[text()="View All"]').click();
    await page.locator('//p[text()="Sales"]').click();
    await page.locator('//div[contains(@class,"oneAppNavContainer")]//span[text()="Leads"]').click();
    await page.locator('//input[@aria-label="Search this list..."]').fill('Jones');
    await page.locator('//input[@aria-label="Search this list..."]').press('Enter');
    await page.locator('//td[@role="gridcell"]').nth(9).click();
    await page.locator('//div[text()="Edit"]').click();
    await page.locator('//button[@aria-label="Salutation"]').click();
    const salutaionValue = await page.locator('//div[@aria-label="Salutation"]//span[@class="slds-media__body"]').nth(1).innerText();
    await page.locator('//div[@aria-label="Salutation"]//span[@class="slds-media__body"]').nth(1).click();
    const oldLastName = await page.locator('//input[@placeholder="Last Name"]').innerText();
    await page.locator('//input[@placeholder="Last Name"]').fill('Jason');
    const oldCompanyName = await page.locator('//label[text()="Company"]/following::input[1]').innerText();
    await page.locator('//label[text()="Company"]/following::input[1]').fill('TLF');
    await page.locator('//ul[contains(@class,"group-row")]//button[text()="Save"]').click();
    await expect(page.locator('(//a[@class="slds-truncate"])[1]//span')).not.toHaveText(oldLastName);
    await expect(page.locator('(//a[@class="slds-truncate"])[1]//span')).toHaveText('Jason');
    await expect(page.locator('(//a[@class="slds-truncate"])[2]//span')).not.toHaveText(oldCompanyName);
    await expect(page.locator('(//a[@class="slds-truncate"])[2]//span')).toHaveText('TLF');
    await page.locator('(//a[@class="slds-truncate"])[1]//span').click();
    await expect(page.locator('//div[contains(@class,"entityNameTitle")]/following::lightning-formatted-name')).toHaveText(`${salutaionValue} Jason`);
    await expect(page.locator('(//p[text()="Company"]/following::lightning-formatted-text)[1]')).not.toHaveText(oldCompanyName);
    await expect(page.locator('(//p[text()="Company"]/following::lightning-formatted-text)[1]')).toHaveText('TLF');
});