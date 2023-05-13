const { Given, When, Then } = require('@cucumber/cucumber')
    // import expect for assertion
const { expect } = require("@playwright/test");

const SignupPage = require("../pageObjects/SignupPage.js")
const signupPage = new SignupPage



Given('user browsed to sign up page', async function() {
    await signupPage.goToSignupURL()
    await expect(page).toHaveURL(signupPage.signupUrl);
});


When('user enters the following details', async function(dataTable) {
    await signupPage.fillForm(dataTable)
});


Then('user should see the message {string}', async function(sucessMessage) {
    const text = await signupPage.getSucessMessage()
    expect(text.trim()).toBe(sucessMessage);
});