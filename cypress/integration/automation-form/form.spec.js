import FormPage from "../../../pageObjects/formPage";

describe('Form page automated testing', () => {
    beforeEach(() => {
        FormPage.visit()
    })

    it('Fill and submit form', () => {
        // TODO: Fill out the form and werify that all data are submited
        // - Enter required information in first name, last name, email and phone input fields
        // - Set date of birth from calendar widget
        // - Set gender
        // - Set Subjects to Economics
        // - For hobbies choose Music
        // - Set address, state and city
        FormPage.firstNameInput.type('Sergejs')
        FormPage.lastNameInput.type('Ozols')
        FormPage.emailInput.type('sergejs.ozols@capymail.cb')
        FormPage.genderInput.click()
        FormPage.phoneInput.type('67042069')
        FormPage.birthdayInput.click()
        FormPage.monthInput.select('February')
        FormPage.yearInput.select('1930')
        FormPage.dayInput.click()
        FormPage.subjectsInput.type('Economics{enter}')
        FormPage.hobbiesInput.click()
        FormPage.fileInput.selectFile('files/capybara4.jfif')
        FormPage.currentAddressInput.type('Miera iela 24')
        FormPage.stateInput.first().click().type('NCR{enter}')
        FormPage.cityInput.click().type('Delhi{enter}')
        FormPage.submitButton.click()
        FormPage.tableBody.contains('Student Name').closest('tr').should('contain.text', 'Sergejs Ozols')
        FormPage.tableBody.contains('Student Email').closest('tr').should('contain.text', 'sergejs.ozols@capymail.cb')
        FormPage.tableBody.contains('Gender').closest('tr').should('contain.text', 'Other')
        FormPage.tableBody.contains('Mobile').closest('tr').should('contain.text', '67042069')
        FormPage.tableBody.contains('Date of Birth').closest('tr').should('contain.text', '28 February,1930')
        FormPage.tableBody.contains('Subjects').closest('tr').should('contain.text', 'Economics')
        FormPage.tableBody.contains('Hobbies').closest('tr').should('contain.text', 'Music')
        FormPage.tableBody.contains('Picture').closest('tr').should('contain.text', 'capybara4.jfif')
        FormPage.tableBody.contains('Address').closest('tr').should('contain.text', 'Miera iela 24')
        FormPage.tableBody.contains('State and City').closest('tr').should('contain.text', 'NCR Delhi')
    })
})