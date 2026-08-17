import {test} from '@playwright/test';
import path from 'path';

test("Validating file download" , async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    const filePromise = page.waitForEvent('download');
    await page.locator('//a[text()="testUpload.json"]').click();
    const fileDownload = await filePromise;
    await fileDownload.saveAs(path.join(__dirname,'../Data/FileDownloaded.json'));    
});