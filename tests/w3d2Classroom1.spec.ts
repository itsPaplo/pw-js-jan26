import { test } from "@playwright/test";

test("To locate Dropdown elements", async ({ page }) => {
  await page.goto("https://leaftaps.com/opentaps/control/main");
  await page.locator('//input[@id="username"]').fill("democsr2");
  await page.locator('//input[@id="password"]').fill("crmsfa");
  await page.locator('//input[contains(@class, "Submit")]').click();
  await page.locator('//a[contains(text(),"CRM")]').click();
  await page.locator('//div[contains(@id,"left")]//a[contains(text(),"Lead")]').click();
  await page.locator('//input[contains(@id,"companyName")]').fill('TestLeaf');
  await page.locator('//input[@id="createLeadForm_firstName"]').fill('Phill');
  await page.locator('//input[@id="createLeadForm_lastName"]').fill('C');
  await page.selectOption('//select[contains(@id,"SourceId")]',{index: 3});
  const options = page.locator('//select[contains(@id,"SourceId")]/option');
  const length = await options.count();
  for(let index = 0 ; index < length; index++){
    console.log(await options.nth(index).innerText());
  }

  const options2 = page.locator('//select[contains(@id,"currency")]/option');
  const length2 = await options.count();
  for (let index =0; index< length2; index++){
    console.log(await options2.nth(index).innerText());
  }
  await page.waitForTimeout(3000);
});
