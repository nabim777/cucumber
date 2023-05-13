class AddReviewPage {
    constructor() {
        this.reviewSelector = "#exampleFormControlTextarea1"
        this.addReviewButtonSelector = '#commentaddbtn'
        this.reviewListSelector = "//div[@id='reviewsHome']//p[@class='content text-break']"
        this.addToListBtn = "#titleaddBtn"
    }

    async addReview(review) {
        await page.locator(this.addToListBtn).click();
        await page.fill(this.reviewSelector, review)
        await page.click(this.addReviewButtonSelector)
    }

    async getReviewText() {
        return await page.innerText(this.reviewListSelector);
    }
}

module.exports = AddReviewPage