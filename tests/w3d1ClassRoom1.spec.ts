import { test, chromium } from "@playwright/test";

test("filling login fields in CRMSFA", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://login.salesforce.com/?locale=in");
  await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
  await page.locator("#password").fill("TestLeaf@2025");
  await page.locator("#Login").click();

  await page.waitForTimeout(3000);
});
