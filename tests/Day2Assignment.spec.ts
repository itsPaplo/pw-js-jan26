import { test, chromium, webkit } from "@playwright/test";

test("Launch Red Bus in Edge", async () => {
  const browser1 = await chromium.launch({channel: "msedge", headless: false});
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();

  await page1.goto("https://www.redbus.in/");
  console.log(page1.title());

  const browser2 = await webkit.launch({ headless: false });
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();

  await page2.goto("https://www.flipkart.com/");
  console.log(page2.title());
});
