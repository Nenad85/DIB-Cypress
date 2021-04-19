// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//--------------------------------------REGISTRTION PAGE----------------------------------------

Cypress.Commands.add("accessLogin", ()=> {
    cy.get('body > app-root > dib-layout > dib-navbar > div > div > div > div > div > div > a:nth-child(2)').click()
})

Cypress.Commands.add("firstName", (firstNameValue)=> {
    cy.get('input[name=firstName').type(firstNameValue)
})

Cypress.Commands.add("lastName", (lastNameValue)=> {
    cy.get('input[name=lastName').type(lastNameValue)
})

Cypress.Commands.add("email", (emailValue)=> {
    cy.get('input[type=email]').type(emailValue)
 })

 Cypress.Commands.add("password", (passValue) => { 
    cy.get('input[type=password]').type(passValue)
}) 

Cypress.Commands.add("phone", (phoneValue)=> {
    cy.get('input[name=cellphone]').type(phoneValue)
})

Cypress.Commands.add("company", (valueCompany)=> {
    cy.get('input[type=companyName').type(valueCompany)

})
Cypress.Commands.add("registrationNo", (regNo)=> {
    cy.get('input[type=companyRegistrationNumber').type(regNo)

})

Cypress.Commands.add("country", (valueCountry)=> {
    cy.get('body > app-root > dib-sign-up > dib-split-auth-content > div.main-section > div > form > div > dib-searchable-select > dib-input > input').select(valueCountry)
})

Cypress.Commands.add("goToLogin", ()=> {
    cy.get('body > app-root > dib-sign-up > dib-split-auth-content > div.main-section > div > span').click()
})

Cypress.Commands.add("signUp", ()=> {
    cy.get('button[type=undefined').click({force:true})
})

Cypress.Commands.add("haveAccount", ()=> {
    cy.get('body > app-root > dib-sign-up > dib-split-auth-content > div.main-section > div > a > span').click()
})

//Validation

// Cypress.Commands.add('assertValidationRegister', ()=> {

//     cy.get('body > app-root > dib-sign-up > dib-split-auth-content > div.main-section > div > span')
// })


