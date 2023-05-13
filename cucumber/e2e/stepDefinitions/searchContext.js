const { Given, When, Then } = require('@cucumber/cucumber')
    // import expect for assertion
const { expect } = require("@playwright/test");
//new
//addition of format
const { format } = require("util")
const SearchPage = require("../pageObjects/SearchPage.js")

const searchPage = new SearchPage

Given('user has browsed the homepage', async function() {
    await searchPage.goToHomeUrl()
    await expect(page).toHaveURL(searchPage.homeUrl);
});


Given('the user has browsed to the details page of {string}', async function(movieName) {
    await searchPage.goToDetailsPage(movieName)
    expect(await page.locator(searchPage.movieTitleSelector)).toHaveText(movieName);
});


When('user searches for movie {string}', async function(movieName) {
    await searchPage.searchMovie(movieName)
});


Then('user should see the movie {string} in the search list', async function(search) {
    //const text = await page.innerText(format(listSelector, search));
    const text = await searchPage.getTitleFromSearchList(search)
    expect(text.trim()).toBe(search);
});