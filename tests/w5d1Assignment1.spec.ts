import {test, expect} from '@playwright/test';

test("Handling alert in w3 page", async ({page})=>{

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

    page.once('dialog', async (alert) => {
        console.log(`The alert message in the pop-up is: ${alert.message()}`);
        console.log(`The alert type is: ${alert.type()}`);
        alert.accept();
    });

    const frame = await page.frameLocator('//iframe[@id="iframeResult"]');
    await frame.locator('//button[text()="Try it"]').click();
    await expect(frame.locator('//p[@id="demo"]')).toContainText('OK');

    await frame.locator('//button[text()="Try it"]').click();
    await expect(frame.locator('//p[@id="demo"]')).toContainText('Cancel');

});