class ViewDetailPage {
    constructor() {
        //define Selectors
        this.searchBoxSelector = "//input[@id='searchTextBox']"
        this.searchButtonSelector = "//button[@class='btn btn-outline-light m-1']";
        this.listSelector = '//div[@id="searchTitle"]/div/div/div/a'
        this.movieNameSelector = '//div[@class="title"]/h1'

    }

    async searchMovie(movieName) {
        await page.fill(this.searchBoxSelector, movieName)
        await page.click(this.searchButtonSelector)
    }

    async getListText() {
        await page.innerText(this.listSelector)
    }

    async selectMovie() {
        await page.click(this.listSelector)
    }

    async getMovieTitle() {
        await page.innerText(this.movieNameSelector)
    }
}


module.exports = ViewDetailPage