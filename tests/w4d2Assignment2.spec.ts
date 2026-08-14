import { test, chromium, expect } from "@playwright/test";

test("Handling iframes in leaftap playground", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://leafground.com/frame.xhtml");

  //Assert the text changed after clicking the button
  const frame1 = page.frameLocator('[src="default.xhtml"]');
  const defaultButtontxt1 = await frame1.locator("#Click").innerText();
  await frame1.locator("#Click").click();
  await expect(frame1.locator("#Click")).not.toHaveText(defaultButtontxt1);
  await expect(frame1.locator("#Click")).toHaveText("Hurray! You Clicked Me.");
  await page.waitForTimeout(3000);

  //Get the total count of frames present in the page
  const allFrames = page.frames();
  const frameCount = allFrames.length;
  console.log(`Total number of frames in this page: ${frameCount}`);

  //Interact with the Click Me button present inside the nested frames
  const outerFrame = page.frameLocator('[src="page.xhtml"]');
  const innerFrame = outerFrame.frameLocator('[src="framebutton.xhtml"]');
  const defaultButtontxt2 = await innerFrame.locator("#Click").innerText();
  await innerFrame.locator("#Click").click();
  await expect(innerFrame.locator("#Click")).not.toHaveText(defaultButtontxt2);
  await expect(innerFrame.locator("#Click")).toHaveText("Hurray! You Clicked Me.");
});
