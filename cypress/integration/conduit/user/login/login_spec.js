import 'cypress-localstorage-commands'

describe(
	'testing user login',
	{ baseUrl: 'https://demo.productionready.io' },
	() => {
		beforeEach(() => {
			cy.visit('/#/login')
			cy.get('h1.text-xs-center.ng-binding').as('greeting')
			cy.get('p.text-xs-center > [ui-sref="app.register"]').as('signUpLink')
			cy.get('input[placeholder=Email]').as('emailField')
			cy.get('input[placeholder=Password]').as('passwordField')
			cy.get('.btn').as('loginButton')
		})

		it('greeting Sign in', () => {
			cy.get('@greeting').then($greeting => {
				expect($greeting).to.have.text('Sign in')
			})
		})

		it('Sign up link works', () => {
			cy.get('@signUpLink').should('have.attr', 'href', '#/register')
		})

		it('empty email&password field', () => {
			cy.get('@loginButton').click()
			cy.get('div.ng-scope > .ng-binding').then($error => {
				const text = $error.text()
				expect(text).to.include.string('email or password is invalid')
			})
		})

		it('invalid email&password field', () => {
			cy.get('@emailField').type('fakeemail@yahoo.com')
			cy.get('@passwordField').type('fakeemail')
			cy.get('@loginButton').click()
			cy.get('div.ng-scope > .ng-binding').then($error => {
				const text = $error.text()
				expect(text).to.include.string('email or password is invalid')
			})
		})

		it('email & empty password field', () => {
			cy.get('@emailField').type('fakeemail@yahoo.com')
			cy.get('@loginButton').click()
			cy.get('div.ng-scope > .ng-binding').then($error => {
				const text = $error.text()
				expect(text).to.include.string('email or password is invalid')
			})
		})

		it('empty email & password field', () => {
			cy.get('@passwordField').type('fakepass')
			cy.get('@loginButton').click()
			cy.get('div.ng-scope > .ng-binding').then($error => {
				const text = $error.text()
				expect(text).to.include.string('email or password is invalid')
			})
		})
		it('right email format', () => {
			cy.get('@emailField')
				.type('fakeemail@gmail.com')
				.then($emailField => {
					expect($emailField).to.have.class('ng-valid')
				})
		})

		it('wrong email format without .com', () => {
			cy.get('@emailField')
				.type('fakeemail@gm')
				.then($emailField => {
					expect($emailField).to.have.class('ng-invalid-email')
				})
		})

		it('test for fields to be disabled after submit', () => {
			cy.get('@emailField').should('not.be.disabled')
			cy.get('@passwordField').should('not.be.disabled')
			cy.get('@loginButton').should('not.be.disabled')
			cy.get('@loginButton').click()
			cy.get('@emailField').should('be.disabled')
			cy.get('@passwordField').should('be.disabled')
			cy.get('@loginButton').should('be.disabled')
		})

		it('test success login', () => {
			cy.get('@emailField').type('am.bara059@gmail.com')
			cy.get('@passwordField').type('123456789')
			cy.get('@loginButton')
				.click()
				.should(() => {
					expect(localStorage.getItem('jwtToken')).to.not.be.null
				})
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
	}
)
