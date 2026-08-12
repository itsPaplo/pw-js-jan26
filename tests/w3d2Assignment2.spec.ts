//Home Assignment: Leafground Checkbox
import { test, expect } from "@playwright/test";

test("Assert webelements in Leaftaps", async ({ page }) => {
  /* const browser = await chromium.launch({channel:"msedge", headless:false});
     const context = await browser.newContext();
     const page = await context.newPage(); */

  await page.goto("https://leafground.com/checkbox.xhtml");

  //2. Click on the "Basic Checkbox.”
  await expect(page.locator('//span[text()="Basic"]/preceding::span[1]')).toContainClass('ui-icon-blank');
  await page.locator('//span[text()="Basic"]').click();
  await expect(page.locator('//span[text()="Basic"]/preceding::span[contains(@class,"c ui-icon")]')).toContainClass('ui-icon-check');

  // 3. Click on the "Notification Checkbox."
  await expect(page.locator('//span[text()="Ajax"]/preceding::span[1]')).toContainClass('ui-icon-blank');
  await page.locator('//span[text()="Ajax"]').click();
  await expect(page.locator('//span[text()="Ajax"]/preceding::span[1]')).toContainClass('ui-icon-check');
  //4. Verify that the expected message is displayed.
  await expect(page.locator('//span[text()="Checked"]')).toBeVisible();
  await page.locator('//span[text()="Ajax"]').click();
  await expect(page.locator('//span[text()="Unchecked"]')).toBeVisible();
  await expect(page.locator('//span[text()="Ajax"]/preceding::span[1]')).toContainClass('ui-icon-blank');

  //5. Click on your favorite language (assuming it's related to checkboxes).
  await page.locator('//label[text()="Java"]').click();
  await page.locator('//label[text()="Python"]').click();
  await page.locator('//label[text()="Javascript"]').click();
  await expect(page.locator('//label[text()="Java"]/preceding::span[1]')).toContainClass('ui-icon-check');
  await expect(page.locator('//label[text()="Python"]/preceding::span[1]')).toContainClass('ui-icon-check');
  await expect(page.locator('//label[text()="Javascript"]/preceding::span[1]')).toContainClass('ui-icon-check');
  await expect(page.locator('//label[text()="C-Sharp"]/preceding::span[1]')).toContainClass('ui-icon-blank');
  await expect(page.locator('//label[text()="Others"]/preceding::span[1]')).toContainClass('ui-icon-blank');

  //6. Click on the "Tri-State Checkbox."
  await expect(page.locator('//h5[text()="Tri State Checkbox"]/following::span[1]')).not.toContainClass('ui-icon-check');
  await page.locator('//h5[text()="Tri State Checkbox"]/following::div[3]').click();
  await expect(page.locator('//h5[text()="Tri State Checkbox"]/following::span[1]')).toContainClass('ui-icon-check');
  //7. Verify which tri-state option has been chosen.
  await expect(page.locator('//span[text()="State has been changed."]')).toBeVisible();
  await expect(page.locator('//span[text()="State has been changed."]/following-sibling::p')).toHaveText('State = 1');

  await page.locator('//h5[text()="Tri State Checkbox"]/following::div[3]').click();
  await expect(page.locator('//span[text()="State has been changed."]')).toBeVisible();  
  await expect(page.locator('//span[text()="State has been changed."]/following-sibling::p')).toHaveText('State = 2');
  await expect(page.locator('//h5[text()="Tri State Checkbox"]/following::span[1]')).toContainClass('ui-icon-closethick');
  
  await page.locator('//h5[text()="Tri State Checkbox"]/following::div[3]').click();
  await expect(page.locator('//span[text()="State has been changed."]')).toBeVisible();
  await expect(page.locator('//span[text()="State has been changed."]/following-sibling::p')).toHaveText('State = 0');
  await expect(page.locator('//h5[text()="Tri State Checkbox"]/following::span[1]')).not.toContainClass('ui-icon-check');
  
  //8. Click on the "Toggle Switch."  
  await page.locator('//div[@class="ui-toggleswitch-slider"]').click();
  await expect(page.locator('//div[contains(@class,"toggleswitch ui")]')).toContainClass('ui-toggleswitch-checked');  
  //9. Verify that the expected message is displayed.
  await expect(page.locator('//span[text()="Checked"]')).toBeVisible();
  await page.locator('//div[@class="ui-toggleswitch-slider"]').click();
  await expect(page.locator('//div[contains(@class,"toggleswitch ui")]')).not.toHaveClass('ui-toggleswitch-checked');
  await expect(page.locator('//span[text()="Unchecked"]')).toBeVisible();

  //10. Verify if the Checkbox is disabled.
  await expect(page.locator('//h5[text()="Verify if check box is disabled"]/following::div[5]')).toContainClass('ui-state-disabled');

  //11. Select multiple options on the page (details may be needed).
  await page.locator('//ul[contains(@class,"selectcheckboxmenu-multiple-container")]').click();
  const option1 = await page.locator('(//li[contains(@class,"selectcheckboxmenu")]//label)[1]').innerText();
  const option2 = await page.locator('(//li[contains(@class,"selectcheckboxmenu")]//label)[4]').innerText();
  const option3 = await page.locator('(//li[contains(@class,"selectcheckboxmenu")]//label)[8]').innerText();
  
  await page.locator('(//li[contains(@class,"selectcheckboxmenu")]//label)[1]').click();
  await page.locator('(//li[contains(@class,"selectcheckboxmenu")]//label)[4]').click();
  await page.locator('(//li[contains(@class,"selectcheckboxmenu")]//label)[8]').click();

  await expect(page.locator('(//span[@class="ui-selectcheckboxmenu-token-label"])[1]')).toHaveText(option1);
  await expect(page.locator('(//span[@class="ui-selectcheckboxmenu-token-label"])[2]')).toHaveText(option2);
  await expect(page.locator('(//span[@class="ui-selectcheckboxmenu-token-label"])[3]')).toHaveText(option3);
  //12. Perform any additional actions or verifications required.
  //13. Close the web browser when done.
});
