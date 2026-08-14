import { test, expect } from "@playwright/test";

const countryData : Record<string, string[]> = { 
  Brazil : ["Rio de Janerio", "Salvador", "Sao Paulo"], 
  Germany : ["Berlin", "Frankfurt" , "Munich"],
  India : ["Bengaluru","Chennai","Delhi"],
  USA : ["Denver","New York","San Francisco"],
};
  const countryObjKeys  = Object.keys(countryData)
  const keyCount = countryObjKeys.length;  

test("Validate the Dropdown in Leaftap Playground", async ({ page }) => {
  await page.goto("https://leafground.com/select.xhtml");
  
  //Get the count and print of all the values
  await page.selectOption('//select[@class="ui-selectonemenu"]', { index: 2 });
  const dropDownOptions = page.locator('//select[@class="ui-selectonemenu"]/option');
  const optionsCount = await dropDownOptions.count();
  console.log(`The total number of options in the dropdown is: ${optionsCount} and the options are below:`);
  for (let index = 0; index < optionsCount; index++) {
    console.log(await dropDownOptions.nth(index).innerText());
  }

  //Confirm Cities belongs to Country is loaded
  await expect(page.locator('(//h5[text()="Choose your preferred country."]/following::label)[1]')).toHaveText('Select Country');
  await page.locator('(//h5[text()="Choose your preferred country."]/following::label)[1]').click();
  const countryDropdown = page.locator('(//ul[contains(@class,"ui-selectonemenu-list")])[1]/li');
  
  for (let index = 1; index <= keyCount; index++){       
    await expect(countryDropdown.nth(index)).toHaveText(countryObjKeys[index-1]);
  }
  await expect(page.locator('(//h5[contains(text(),"Country is loaded")]/following::label)[1]')).toHaveText('Select City');

 for (const key of countryObjKeys){
    await countryDropdown.filter({hasText: `${key}`}).click();
  
    await page.locator('(//h5[contains(text(),"Country is loaded")]/following::label)[1]').click({delay:1000});
    const cityDropdown = page.locator('(//ul[contains(@class,"ui-selectonemenu-list")])[2]/li');
    const cityOptionsCount = await cityDropdown.count();
    const cityOptions: any = [];
    for(let index = 1; index < cityOptionsCount ; index++){
      cityOptions.push(await cityDropdown.nth(index).innerText())      
    }
    const areEqual = countryData[key].length === cityOptions.length && countryData[key].every((val, index) => val === cityOptions[index]);
    
    if(areEqual === true){
      console.log(`\n The generated City options: ${cityOptions} matches the Country selection ${key}`);
    }
    else{
      console.log(`The generated City options: ${cityOptions} does not match the Country selection ${key}`);
    }
    await page.locator('(//h5[text()="Choose your preferred country."]/following::label)[1]').click({delay:1000});        
  } 

  //6. Choose any three courses from the dropdown
  const langDropdown = page.locator('//button[@aria-label="Show Options"]');
  await langDropdown.click();
  await page.locator('//li[text()="ReactJs"]').click();
  await langDropdown.click({delay:500});
  await page.locator('//li[text()="Playwright"]').click();
  await langDropdown.click({delay:500});
  await page.locator('//li[text()="Selenium WebDriver"]').click({delay:800});
  let count = 3;
  await expect(page.locator('//span[contains(@class,"ui-autocomplete-token-label")]')).toHaveCount(count);
  while(count>=0){
      await page.locator('(//span[contains(@class,"ui-icon-close")])').nth(count-1).click({delay:500});
      count--;
  }
  
  //8. Select 'Two' irrespective of the language chosen
  const randomNumber = Math.floor(Math.random() * 5);
  await page.locator('(//h5[contains(text(),"language randomly")]/following::label)[1]').click({delay:3000});
  const languageOptions = page.locator('(//ul[contains(@class,"ui-selectonemenu-list")])[2]/li');
  const langCount = await languageOptions.count();
  console.log(`\n The Language options shown in language dropdown are: `);
  for(let index=1;index<langCount;index++){
    console.log(`  ${await languageOptions.nth(index).innerText()}`);
  }
  const selectedLanguage = await languageOptions.nth(randomNumber).innerText();
  await languageOptions.nth(randomNumber).click();
  if(selectedLanguage === "English" || "Telugu" || "Malayalam" || "Hindi"){
    await page.locator('(//h5[contains(text(),"language chose")]/following::label)[1]').click();
    const optionTwo = page.locator('(//ul[contains(@class,"ui-selectonemenu-list")])[4]/li').nth(3);
    await optionTwo.click({delay:1000});   
    console.log(`\n The Selected Language is : "${selectedLanguage}" and the selected option "Two" is: ${await optionTwo.innerText()}`);
  }
  else{
    await page.locator('(//h5[contains(text(),"language chose")]/following::label)[1]').click();
    const optionTwo = page.locator('(//ul[contains(@class,"ui-selectonemenu-list")])[4]/li').nth(1);
    await optionTwo.click({delay:1000});   
    console.log(`\n The Selected Language is : "${selectedLanguage}" and the selected option "Two" is: ${await optionTwo.innerText()}`);
  }  
  await page.waitForTimeout(3000);
});
