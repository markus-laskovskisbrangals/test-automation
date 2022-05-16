import BasePage from "./basePage";

class FormPage extends BasePage{
    static get url(){
        return '/automation-practice-form/'
    }

    static get firstNameInput(){
        return cy.get('#firstName')
    }

    static get lastNameInput(){
        return cy.get('#lastName')
    }

    static get emailInput(){
        return cy.get('#userEmail')
    }

    static get genderInput(){
        return cy.get('[for="gender-radio-3"]')
    }

    static get phoneInput(){
        return cy.get('#userNumber')
    }

    static get birthdayInput(){
        return cy.get('#dateOfBirthInput')
    }

    static get monthInput(){
        return cy.get('.react-datepicker__month-select')
    }

    static get yearInput(){
        return cy.get('.react-datepicker__year-select')
    }

    static get dayInput(){
        return cy.get('[aria-label="Choose Friday, February 28th, 1930"]')
    }

    static get subjectsInput(){
        return cy.get('#subjectsInput')
    }

    static get hobbiesInput(){
        return cy.get('[for="hobbies-checkbox-3"]')
    }
    
    static get fileInput(){
        return cy.get('input[type=file]')
    }

    static get currentAddressInput(){
        return cy.get('#currentAddress')
    }

    static get stateInput(){
        return cy.get('.css-1wa3eu0-placeholder')
    }

    static get cityInput(){
        return cy.get('.css-1wa3eu0-placeholder').contains('Select City')
    }
    
    static get submitButton(){
        return cy.get('#submit')
    }

    static get tableBody(){
        return cy.get('tbody')
    }
}

export default FormPage