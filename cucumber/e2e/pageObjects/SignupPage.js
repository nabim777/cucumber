class SignupPage {
    constructor() {
        this.signupUrl = 'http://localhost:8000/signup'
        this.dateSelector = '#validationDefault03'
        this.submitSelector = "//button[@class='btn btn-primary']"
        this.sucessSelector = "//div[@class='alert alert-info']"
        this.usernameSelector = '//input[@id="validationDefault01"]';
    }

    async goToSignupURL() {
        await page.goto(this.signupUrl)
    }

    async fillForm(dataTable) {
        const userDetails = []
        for (userData of dataTable.raw()) {
            userDetails.push(userData[1])
        }
        await page.fill(this.usernameSelector, userDetails[0]);
        await page.getByLabel('E-mail').fill(userDetails[1]);
        await page.getByText('Male', { exact: true }).click();
        await page.locator('#validationDefault011').fill(userDetails[3]);
        await page.locator('#validationDefault003').fill(userDetails[4]);
        await page.type(this.dateSelector, userDetails[5])
        await page.click(this.submitSelector)
    }

    async getSucessMessage() {
        return await page.innerText(this.sucessSelector);
    }

}

module.exports = SignupPage