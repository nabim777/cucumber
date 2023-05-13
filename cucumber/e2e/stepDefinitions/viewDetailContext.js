const { Given, When, Then } = require('@cucumber/cucumber')
    // import expect for assertion
const { expect } = require("@playwright/test");

const ViewDetailPage = require("../pageObjects/ViewDetailPage.js")

const viewDetailPage = new ViewDetailPage

Given('search movie {string}', async function(movieName) {
    await viewDetailPage.searchMovie(movieName)
});


When('user views movie {string} in the list', async function(search) {
    const text = await viewDetailPage.getListText()
    expect(text.trim()).toBe(search);
});


When('user selects movie {string} on the list', async function(string) {
    await viewDetailPage.selectMovie()
});


Then('the user should be redirected to the detail page of {string}', async function(movieName) {
    text = await viewDetailPage.getMovieTitle()
    expect(text.trim()).toBe(movieName)
})