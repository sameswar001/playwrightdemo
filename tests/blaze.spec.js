import{test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('login to blaze',async({page})=>{

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    await loginPage.openBlaze();
    await loginPage.doLogin('auto-bot','123')
    await loginPage.verifyLoginBennaer('auto-bot')
 
    homePage.addProductToCart("Nexus 6")
   // cartPage.goToCartPage();


});
