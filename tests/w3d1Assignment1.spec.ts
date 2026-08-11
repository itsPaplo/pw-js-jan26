import {test, expect} from '@playwright/test';

test("Create Lead", async ({page})=> {
    await page.goto(' https://login.salesforce.com');
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//div[@aria-label="App"]//button').click()
    await page.locator('//button[contains(@aria-label,"View All")]').click();
    await page.locator('//p[contains(text(),"Manage your sales")]').click();
    await page.locator('//nav[@aria-label="Global"]//span[text()="Leads"]').click();
    await page.locator('//div[text()="New"]').click();
    await page.locator('//button[@aria-label="Salutation"]').click();
    const dropDpwnValue = await page.locator('//span[text()="Mr."]').innerText();
    await page.locator('//span[text()="Mr."]').click();
    await page.locator('//input[@placeholder="Last Name"]').fill('Dave');
    await page.locator('//label[text()="Company"]/following::input[1]').fill('RTA');
    await page.locator('//div[@class="footer-full-width"]//button[text()="Save"]').click();
    await expect(page.locator('//span[text()="Lead"]')).toBeVisible();
    await expect(page.locator('//div[contains(@class,"entityNameTitle")]/following::lightning-formatted-name[1]')).toHaveText(dropDpwnValue+' '+'Dave');
    await expect(page.locator('//p[text()="Company"]/following::lightning-formatted-text[1]')).toHaveText('RTA');
    
});