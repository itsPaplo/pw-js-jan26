//Assignment: 4 Edit Individuals

import {test, expect} from '@playwright/test';

test("Edit Individial and verify the changes", async ({page}) => {
    await page.goto('https://login.salesforce.com/');
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//div[@aria-label="App"]//button').click()
    await page.locator('//button[text()="View All"]').click();
    await page.locator('//p[text()="Individuals"]').click();
    await expect(page.locator('//h1[text()="Individuals"]')).toBeVisible();
    await page.locator('//span[text()="Individuals List"]/preceding::span[text()="Individuals"]').click();
    await page.locator('//input[@aria-label="Search this list..."]').fill('jones');
    await page.locator('//input[@aria-label="Search this list..."]').press('Enter'); 
    await page.locator('//td[@role="gridcell"]').nth(5).click();
    await page.locator('//div[text()="Edit"]').click();
    await page.locator('//div[contains(@class,"salutation")]//a').click();
    const salutationText = await page.locator('(//li[contains(@class,"uiRadioMenuItem")])[2]/a').innerText();
    await page.locator('(//li[contains(@class,"uiRadioMenuItem")])[2]/a').click();
    await page.getByPlaceholder('First Name').fill('David');
    await page.locator('//span[text()="Save"]').click();
    await expect(page.locator('(//th[@role="rowheader"]//span)[2]')).toHaveText("David" + " " + "Jones");
    await page.locator('(//th[@role="rowheader"]//span)[2]').click();
    await expect(page.locator('//div[text()="Individual"]/following::span[1]')).toHaveText(`${salutationText} David Jones`);
});