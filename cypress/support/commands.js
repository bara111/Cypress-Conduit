// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
	cy.visit('/login')
	cy.get(':nth-child(2) > .form-control').type(email)
	cy.get(':nth-child(3) > .form-control').type(password)
	cy.get('.btn')
		.click({ force: true })
		.should(() => {
			expect(localStorage.getItem('jwtToken')).to.not.be.null
		})
	cy.url().should('eq', 'https://demo.productionready.io/#/')
})
Cypress.Commands.add('addProductToCart', () => {
	cy.get('.product-left')
	cy.get('#product-addtocart-button').click()
	cy.get('#product-addtocart-button span').contains('إضافة...')
})

Cypress.Commands.add(
	'elementShouldHaveClass',
	(elementAlias, typeValue, className) => {
		cy.get(elementAlias)
			.type(typeValue)
			.then(Field => {
				expect(Field).to.have.class(className)
			})
	}
)
Cypress.Commands.add(
	'emptyFieldShouldShowErrorAfterSubmit',
	(fieldAlias, aliasOfSubmit, error) => {
		cy.get(fieldAlias).clear()
		cy.get(aliasOfSubmit).click()
		cy.contains(error)
	}
)
Cypress.Commands.add(
	'fieldValueMatch',
	(fieldAlias, value,aliasOfSubmit, error) => {
    cy.get(fieldAlias).type(value)
    cy.get(aliasOfSubmit).click()
    cy.contains(error)
	}
)
Cypress.Commands.add(
	'fieldValueNotMatch',
	(fieldAlias, value,aliasOfSubmit, error) => {
    cy.get(fieldAlias).type(value)
    cy.get(aliasOfSubmit).click()
    cy.contains(error).should('not.exist')
  }
)
Cypress.Commands.add(
	'signUp',
	(userFieldAlias, userFieldValue,emailFieldAlias, emailFieldValue,passwordFieldAlias, passwordFieldValue,aliasOfSubmit) => {
    cy.get(emailFieldAlias).type(emailFieldValue)
    cy.get(userFieldAlias).type(userFieldValue)
    cy.get(passwordFieldAlias).type(passwordFieldValue)
    cy.get(aliasOfSubmit).click()
    cy.url().should('eq', 'https://demo.productionready.io/#/')
    cy.contains('Global Feed')
    cy.get('ul[show-authed=false].nav.navbar-nav.pull-xs-right')
      .children()
      .should('have.length', 3)
      .and('be.hidden')
    cy.get('ul[show-authed=true].nav.navbar-nav.pull-xs-right')
      .children()
      .should('have.length', 4)
      .and('not.be.hidden')
  })
  



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
