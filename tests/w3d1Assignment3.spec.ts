//Assignment: 3 Create Individuals
import {test, expect} from '@playwright/test';

test("Create Individuals and verify created Individual name", async ({page}) => {
    await page.goto('https://login.salesforce.com/');
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//div[@aria-label="App"]//button').click()
    await page.locator('//button[contains(@aria-label,"View All")]').click();
    await page.locator('//p[text()="Individuals"]').click();
    await expect(page.locator('//h1[text()="Individuals"]')).toBeVisible();
    await page.locator('//span[text()="Individuals List"]').click();
    await page.locator('//span[text()="New Individual"]').click();
    await expect(page.locator('//h2[text()="New Individual"]')).toBeVisible();
    await page.getByPlaceholder('Last Name').fill('Jones');
    await page.locator('//div[contains(@class,"button-container-inner")]//span[text()="Save"]').click();
    await expect(page.locator('//div[contains(@class,"profilePicWrapper")]/following::span[1]')).toHaveText('Jones');
    await page.locator('//span[text()="Details"]').click();
    await expect(page.locator('(//span[@class="uiOutputText"])[4]')).toHaveText('Jones');
});