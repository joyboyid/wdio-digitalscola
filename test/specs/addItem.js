import assert from 'assert'

describe('saucecode test', () => {
    it('Add Item succsed', async () => {
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
        expect(browser).toHaveUrlContaining('dashboard')

        await expect(cartIcon).toBeDisplayed()
        await addItem.click()
        await addItem1.click()
        await cartIcon.click()
        await expect(valItem).toBeDisplayed()
        expect(browser).toHaveUrlContaining('cart')
        
        var pageUrl = browser.getUrl();
        assert.notEqual(pageUrl, 'https://www.saucedemo.com/');
    });
});