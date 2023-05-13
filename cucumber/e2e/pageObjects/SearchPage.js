const { format } = require("util")
class SearchPage {
    constructor() {
        this.homeUrl = 'http://localhost:8000'
        this.searchBoxSelector = "//input[@id='searchTextBox']"
        this.searchButtonSelector = "//button[@class='btn btn-outline-light m-1']";
        this.listSelector = "//a[contains(text(), '%s')]"
        this.movieTitleSelector = "//div[@class='title']//h1"
    }

    async goToHomeUrl() {
        await page.goto(this.homeUrl)
    }

    async goToDetailPage(movieName) {
        await page.fill(this.searchBoxSelector, movieName)
        await page.click(this.searchButtonSelector);
        await page.locator(format(this.listSelector, movieName)).click()
    }

    async searchMovie(movieName) {
        await page.fill(this.searchBoxSelector, movieName);
        await page.click(this.searchButtonSelector)
    }

    async getTitleFromSearchList(search) {
        await page.innerText(format(this.listSelector, search))
    }
}