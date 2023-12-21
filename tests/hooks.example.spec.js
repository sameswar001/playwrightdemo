/*
beforeEach: This hooks executed before each test
AfterEach: This hooks executed after each test
beforeAll: This hook is executed once before any of the tests start running
AfterAll: This hook is executed once after all the tests have been run
*/

import {test, expect} from '@playwright/test';

let page;

test.beforeEach(async({browser})=>{
 page = await browser.newPage()
   await page.goto('https://www.demoblaze.com/index.html')
   //login
   await page.locator('#login2').click()
   await page.locator('#loginusername').fill('auto-bot')
   await page.locator('#loginpassword').fill('123')
   await page.locator('//button[normalize-space()="Log in"]').click()
   

});

test.afterEach(async()=>{
//logout
await page.locator('#logout2').click()

})


test('Home page test', async()=>{

const products = await page.$$('.hrefch')
expect(products).toHaveLength(9)


});

test('add product to cart', async()=>{
   
    //add product to cart 
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()
    page.on('dialog', async dialog=>{

       await dialog.accept();
    })

    
    })