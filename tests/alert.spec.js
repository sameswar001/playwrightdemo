import {test, expect} from '@playwright/test';

test.skip('alert testing', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
page.on('dialog',async dialog=>{
expect (dialog.type()).toContain('alert');
expect(dialog.message()).toContain('I am an alert box!');
await dialog.accept();
})
await page.click('//button[normalize-space()="Alert"]');

})

test.skip('confirmation alert testing', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
    expect (dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button');
    await dialog.accept();
    })
    await page.click('//button[@onclick="myFunctionConfirm()"]');
    
})


test('prompt alert testing', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
    expect (dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('sameswar');
    })
    await page.click('//button[normalize-space()="Prompt"]');
    
})