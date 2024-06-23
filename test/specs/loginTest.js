import assert from 'assert'

describe('saucecode test', () => {
    it('Login succsed', async () => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextbox = await browser.$('#user-name')
        const passwordTextbox = await browser.$('#password')
        const loginButton = await browser.$('//input[@value="Login"]')
        const  cartIcon = await browser.$('#shopping_cart_container')
        const addItem = await browser.$('//*[@id="add-to-cart-sauce-labs-backpack"]')
        const addItem1 = await browser.$('#add-to-cart-sauce-labs-bike-light')
        const valItem = await browser.$('#cart_contents_container > div > div.cart_list')

        await usernameTextbox.setValue("standard_user")
        await passwordTextbox.setValue("secret_sauce")
        console.log(await loginButton.getValue())
        await loginButton.click()

        await expect(cartIcon).toBeDisplayed()
        await addItem.click()
        await addItem1.click()
        await cartIcon.click()
        await expect(valItem).toBeDisplayed()
        
        
        var pageUrl = browser.getUrl();
        assert.notEqual(pageUrl, 'https://www.saucedemo.com/');
    });
});