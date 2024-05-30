import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '/Users/haniapn/Documents/login-facebook-automation/features/pageobjects/login.page.js'

Given('I am on the Facebook login page', async () => {
    await loginPage.open();
    await expect(browser).toHaveTitle('facebook');
});

When('I enter an email {string} and password {string}', async function (email, password) {
    await loginPage.emailInput.setValue(email);
    await loginPage.passwordInput.setValue(password);
});

When('And I click on the "Log In" button', async () => {
    await loginPage.loginButton.click();
});

// success login
Then('I should be redirected to my Facebook homepage', async () => {
    await expect(loginPage.homepageElement).toBeDisplayed();
});

// failed login
Then('I should see an error message "<error_message>"', async function (error_message) {
    await expect(loginPage.errorMsg).toExist();
    await expect(loginPage.errorMsg).toHaveTextContaining(error_message);
});