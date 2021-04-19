/// <reference types="Cypress"/>


describe('Registration Suite', ()=> {

    let details
    before(() => {

        cy.fixture('dibdataRegistration').then( (data) => {

            details=data
        })
    })

    beforeEach(()=> {

        cy.linkAddress(details.url)
        cy.accessRegistration()
    })

    it('ValidRegistrationTest', ()=> {

        cy.firstName(details.firstName)
        cy.lastName(details.lastName)
        cy.email(details.emailValid)
        cy.password(details.passwordValid)
        cy.phone(details.validPhone)
        cy.company(details.company)
        cy.registrationNo(details.companyNo)
        cy.signUp()
    })
    
    it('InvalidEmailRegistrationTest', ()=> {

        cy.firstName(details.firstName)
        cy.lastName(details.lastName)
        cy.email(details.emailIncorect)
        cy.password(details.passwordValid)
        cy.phone(details.validPhone)
        cy.company(details.company)
        cy.registrationNo(details.companyNo)
        cy.signUp()
    })

    it('InvalidPhoneRegistrationTest', ()=> {

        cy.firstName(details.firstName)
        cy.lastName(details.lastName)
        cy.email(details.emailValid)
        cy.password(details.passwordValid)
        cy.phone(details.invalidPhone)
        cy.company(details.company)
        cy.registrationNo(details.companyNo)
        cy.signUp()
    })

    it('HaveAccountOption', ()=> {

        cy.haveAccount()
    })

    afterEach(()=> {

        cy.title().should('eq', 'DIB Travel Netlify')
    })

})