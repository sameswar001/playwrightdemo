const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage{
    constructor(page){
            this.page = page;
            this.loginLink ="#login2";
            this.userName ='#loginusername'
            this.password ='#loginpassword';
            this.loginBtn ='//button[normalize-space()="Log in"]';
            this.loginUser ='#nameofuser';
    }

async openBlaze(){
   await this.page.goto('https://www.demoblaze.com/index.html');
}

async doLogin(userName, password){

    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.userName).fill(userName);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginBtn).click()

}

async verifyLoginBennaer(){
        await expect(this.page.locator(this.loginUser)).toBeVisible();
}

}