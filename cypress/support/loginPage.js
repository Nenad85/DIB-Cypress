//--------------------------------------LOGIN PAGE----------------------------------------

Cypress.Commands.add("linkAddress", (url)=> {
    cy.visit(url)
})

Cypress.Commands.add("accessRegistration", ()=> {
    cy.get('body > app-root > dib-layout > dib-navbar > div > div > div > div > div > div > a:nth-child(1)').click()
})

Cypress.Commands.add("userEmail", (emailValue)=> {
    cy.get('input[type=email]').type(emailValue)
 })

Cypress.Commands.add("userPassword", (passValue) => { 
    cy.get('input[type=password]').type(passValue)
 })

 Cypress.Commands.add("userEmailAgent", (emailUserAgentValue)=> {
    cy.get('input[name=userEmail]').type(emailUserAgentValue)
 })

 Cypress.Commands.add("agentEmail", (agentEmailValue)=> {
    cy.get('input[name=agentEmail]').type(agentEmailValue)
 })

 Cypress.Commands.add("agentPassword", (agentPassValue)=> {
    cy.get('input[type=password]').type(agentPassValue)
 })

 Cypress.Commands.add("loginButton", ()=> {

    cy.get('button[type=submit]').click({force:true})
 })

 Cypress.Commands.add("forgotPass", ()=> {
    cy.get('body > app-root > login > dib-split-auth-content > div.main-section > div > form > a').click()
 })

 Cypress.Commands.add("linkAgentLogin", ()=> {

    cy.get('body > app-root > login > dib-split-auth-content > div.main-section > div > div.footer-section > a.float-right > span').click()
 })

 Cypress.Commands.add("checkboxAgentLogin", ()=> {

    cy.get('body > app-root > dib-agent-login > dib-split-auth-content > div.main-section > div > form > dib-checkbox > label > span').click()
 })

 Cypress.Commands.add("linkNewAccount", ()=> {

    cy.get('body > app-root > login > dib-split-auth-content > div.main-section > div > div.footer-section > a.ng-star-inserted > span').click()
 })
// Validation
//  Cypress.Commands.add("assertValidationLogin", ()=> {

//     cy.get('body > app-root > dib-layout > div > home > section > dib-all-products-product-picker > dib-product-pickers > div > div.title.ng-star-inserted')
//  })

//  Cypress.Commands.add("assertValidationNotLogin", ()=> {
     
//     cy.get('body > app-root > login > dib-split-auth-content > div.main-section > div > span')
//  })

//  Cypress.Commands.add("assertValidationForgotPassword", ()=> {

//      cy.get('body > app-root > dib-forgot-password > dib-split-auth-content > div.main-section > div > span')
//  })

//  Cypress.Commands.add("assertAgentLogin", ()=> {

//      cy.get('body > app-root > dib-agent-login > dib-split-auth-content > div.main-section > div > span')
//  })

//  Cypress.Commands.add("assertNewAccount", ()=> {

//     cy.get('body > app-root > dib-sign-up > dib-split-auth-content > div.main-section > div > span')

//  })
