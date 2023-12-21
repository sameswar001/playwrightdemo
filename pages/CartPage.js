exports.CartPage = class CartPage{

    constructor(page){

        this.page = page ;
        this.cartLandingPage = '#cartur'
    }


    async goToCartPage(){
        await this.page.locator(this.cartLandingPage).click();

    }




}