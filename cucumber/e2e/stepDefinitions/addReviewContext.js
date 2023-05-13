const { When, Then } = require('@cucumber/cucumber')
    // import expect for assertion
const { expect } = require("@playwright/test");
// import AddReviewPage
const AddReviewPage = require("../pageobjects/AddReviewPage.js")

const addReviewPage = new AddReviewPage

When('the user adds a review with the content {string}', async function(review) {
    await addReviewPage.addReview(review)
});


Then('review {string} should be displayed at reviews list', async function(review) {
    const text = await addReviewPage.getReviewText()
    expect(text.trim()).toBe(review);
});