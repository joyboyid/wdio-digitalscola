import assert from 'assert'

describe('saucecode test', () => {
    it('Login succsed', async () => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextbox = await browser.$('#user-name')
        const passwordTextbox = await browser.$('#password')
        const loginButton = await browser.$('//input[@value="Login"]')

        await usernameTextbox.setValue("standard_user")
        await passwordTextbox.setValue("secret_sauce")
        console.log(await loginButton.getValue())
        await loginButton.click()
        expect(browser).toHaveUrlContaining('dashboard')
   
        var pageUrl = browser.getUrl();
        assert.notEqual(pageUrl, 'https://www.saucedemo.com/');
    });
});