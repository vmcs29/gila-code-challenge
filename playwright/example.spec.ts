import { test, expect } from '@playwright/test';
import HomePage from '../pages/home-page';
import { assert } from 'console';


let homePage: HomePage; 

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:3000/');
  homePage = new HomePage(page);
})

test('page is fully loaded', async ({ page }) => {
  await homePage.assertPageTitle();
  await homePage.assertInputFieldName();
  await homePage.assertInputField();
  await homePage.assertButton();
  await homePage.assertResponseField();
});

test('validate unsuccessful search', async ({ page }) => {
  await homePage.assertPageTitle();
  await homePage.writeInputField('234dfwerwer');
  await homePage.clickGoButton();
  await homePage.assertInvalidResponse();

});

test('validate successful search', async ({ page }) => {
  await homePage.assertPageTitle();
  await homePage.writeInputField('vmcs29');
  await homePage.clickGoButton();
  await homePage.assertValidResponse();

});