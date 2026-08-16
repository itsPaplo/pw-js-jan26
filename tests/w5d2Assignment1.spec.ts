import {test, expect} from '@playwright/test';
import path from 'path';

test("Validating file upload", async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    
    //setInputFiles for direct upload if element has type = file
    await page.locator('//input[@id="file-upload"]').setInputFiles(path.join(__dirname,'../Data/TestLeaf Logo1.png'));

    //First create promise without await before click
    const filePromise = page.waitForEvent('filechooser');

    await page.locator('//div[@id="drag-drop-upload"]').click();
    
    //Then store locator after resolving promise, after click
    const fileUpload = await filePromise;
    
    //setFile for click upload
    await fileUpload.setFiles(path.join(__dirname,'../Data/TestLeaf Logo 2.png'));

    await page.locator('//input[@id="file-submit"]').click();

    await page.waitForLoadState('load');

    await expect(page.locator('//div[@class="example"]/h3')).toContainText('Uploaded');

    await expect(page.locator('//div[@id="uploaded-files"]')).toContainText('.png');


});