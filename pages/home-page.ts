import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly pageTitle: RegExp;
    readonly inputFieldName : Locator;
    readonly inputField: Locator;
    readonly goButton: Locator;
    readonly responseAreaField: Locator;
    readonly responseField: Locator;
    readonly validReponseField: Locator;


    constructor(page: Page) {
        this.page = page;
        this.pageTitle = /Get Github Repos/;
        this.inputFieldName = page.locator('label');
        this.inputField= page.locator('input#username');
        this.goButton= page.locator('button.submit');
        this.responseAreaField= page.locator('section.output-area');
        this.responseField= page.locator('p.output-status-text');
        this.validReponseField = page.locator('div.repo-list-container');

    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async assertInputFieldName() {
        await expect(this.inputFieldName).toHaveText('Github Username');
    }

    async assertInputField() {
        await expect(this.inputField).toBeVisible();
    }

    async writeInputField(userName: string) {
        await this.inputField.fill(userName);
    }

    async assertButton() {
        await expect(this.goButton).toBeVisible();
    }

    async clickGoButton(){
        await this.goButton.click();
    }

    async assertResponseField() {
        await expect(this.responseAreaField).toBeVisible();
    }

    async assertValidResponse(){
        await expect(this.validReponseField).toBeVisible();
    }

    async assertInvalidResponse(){
        await expect(this.responseField).toHaveText('No repos');
    }



}

export default HomePage;