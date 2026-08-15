import {test, expect} from '@playwright/test';

test("Handle Windows", async ({page, context}) => {
  await page.goto('https://leafground.com/window.xhtml');

  const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator('//span[text()="Open"]').click()]);

  await childPage.waitForLoadState('load');
 
  console.log(`The parent page title is: ${await page.title()}`);
  console.log(`The new tab title is: ${await childPage.title()}`);

});