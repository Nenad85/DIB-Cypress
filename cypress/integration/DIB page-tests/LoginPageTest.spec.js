/// <reference types="Cypress"/>

describe('Login Suite', ()=> {

    let details
    before(() => {

        cy.fixture('dibdataLogin').then( (data) => {

            details=data
        })
    })

    beforeEach(()=> {

        cy.linkAddress(details.url)
        cy.accessLogin()
    })

    it('EmptyFormTest', ()=> {

        cy.loginButton()
    })
    
    it.only('C101 ValidLoginTest', ()=>{

        cy.userEmail(details.emailValid)
        cy.userPassword(details.passwordValid)
        cy.loginButton()
    })

    it('InvalidEmailTest', ()=>{

        cy.userEmail(details.emailInvalid)
        cy.userPassword(details.passwordValid)
    })

    it('InvalidPasswordTest', ()=>{

        cy.userEmail(details.emailValid)
        cy.userPassword(details.passwordInvalid)
    })

    it('CheckForgotPasswordTest', ()=> {

        cy.forgotPass()
        cy.userEmail(details.emailValid)
        cy.loginButton()
    })

    it('CheckAgentLoginTest', ()=> {

        cy.linkAgentLogin()
        cy.checkboxAgentLogin()
    })

    it('EmptyFormAgentLoginTest', ()=> {

        cy.linkAgentLogin()
        cy.checkboxAgentLogin()
        cy.loginButton()
    })

    it('ValidAgentLoginTest', ()=> {

        cy.linkAgentLogin()
        cy.userEmailAgent(details.emailUserAgentValid)
        cy.agentEmail(details.agentEmailValid)
        cy.agentPassword(details.agentPassValid)
        cy.checkboxAgentLogin()
        cy.loginButton()
    })

    it('InvalidEmailAgentLoginTest', ()=> {

        cy.linkAgentLogin()
        cy.userEmailAgent(details.emailUserAgentValid)
        cy.agentEmail(details.agentEmailInvalid)
        cy.agentPassword(details.agentPassValid)
        cy.checkboxAgentLogin()
        cy.loginButton()
    })

    it('InvalidPassAgentLoginTest', ()=> {

        cy.linkAgentLogin()
        cy.userEmailAgent(details.emailUserAgentValid)
        cy.agentEmail(details.agentEmailValid)
        cy.agentPassword(details.agentPassInvalid)
        cy.checkboxAgentLogin()
        cy.loginButton()
    })

    it('CheckNewAccountTest', ()=> {

        cy.linkNewAccount()
    })

    afterEach(()=> {

        cy.title().should('eq', 'DIB Travel Netlify')
    })

})