import * as Errors from './constants'
describe(
	'testing user signUp',
	{
		baseUrl: 'https://demo.productionready.io',
	},
	() => {
		beforeEach(() => {
			cy.visit('/#/register')
			cy.get('h1.text-xs-center.ng-binding').as('greeting')
			cy.get('p.text-xs-center > [ui-sref="app.login"]').as('haveAccountLink')
			cy.get('.btn').as('signUpButton')
			cy.get('input[placeholder=Username]').as(
				'usernameField'
			)
			cy.get('input[placeholder=Email]').as('emailField')
			cy.get('input[placeholder=Password]').as('passwordField')
		})

		// SignUp Fields Existance Test;
		it('test signup greeting and input field type', () => {
			cy.get('@greeting').then($greeting => {
				expect($greeting).to.have.text('Sign up')
			})
			cy.get('@usernameField').should('have.attr', 'type', 'text')
			cy.get('@emailField').should('have.attr', 'type', 'email')
			cy.get('@passwordField').should('have.attr', 'type', 'password')
		})

		// SignIn Link Existance Test;
		it('test have an account link', () => {
			cy.get('@haveAccountLink').should('have.attr', 'href', '#/login')
		})

		// Email Field tests
		it('test empty email', () => {
			cy.emptyFieldShouldShowErrorAfterSubmit("@emailField",'@signUpButton',Errors.EMAIL_FILED_CAN_NOT_BE_BLANK)
		})

		it('test wrong formated email', () => {
			cy.elementShouldHaveClass("@emailField","fakeemail@gm",'ng-invalid-email')
		})

		it('test already used email', () => {
			cy.fieldValueMatch(
				'@emailField',
				'am.bara059@gmail.com',
				'@signUpButton',
				Errors.EMAIL_IS_USED_BEFORE
			)
		})

		it('test not used email', () => {
			cy.fieldValueNotMatch(
				'@emailField',
				'fakeEmail789@gmail.com',
				'@signUpButton',
				Errors.EMAIL_IS_USED_BEFORE
			)
		})
		// UserName Field tests
		it('test already used username', () => {
			cy.emptyFieldShouldShowErrorAfterSubmit(
				'@usernameField',
				'@signUpButton',
				Errors.USERNAME_FILED_CAN_NOT_BE_BLANK
			)
		})

		it('test already used username', () => {
			cy.fieldValueMatch(
				'@usernameField',
				'bara1111',
				'@signUpButton',
				Errors.USERNAME_IS_USED_BEFORE
			)
		})

		it('test not used username', () => {
			cy.fieldValueNotMatch(
				'@usernameField',
				'fakeUserName788',
				'@signUpButton',
				Errors.USERNAME_IS_USED_BEFORE
			)
		})

		it('test username length exeeds 20 characters', () => {
			cy.fieldValueMatch(
				'@usernameField',
				'fakeUserName789101112',
				'@signUpButton',
				Errors.USERNAME_FILED_IS_TOO_LONG
			)
		})

		it('test username length less than 20 characters', () => {
			cy.fieldValueNotMatch(
				'@usernameField',
				'fakeUserName8',
				'@signUpButton',
				Errors.USERNAME_FILED_IS_TOO_LONG
			)
		})
		// Password Field tests
		it('test empty password', () => {
			cy.emptyFieldShouldShowErrorAfterSubmit(
				'@passwordField',
				'@signUpButton',
				Errors.PASSWORD_FILED_CAN_NOT_BE_BLANK
			)
		})

		it('test "fakePassword" password', () => {
			cy.fieldValueNotMatch(
				'@passwordField',
				'fakePassword',
				'@signUpButton',
				Errors.PASSWORD_FILED_CAN_NOT_BE_BLANK
			)
		})

		it('test password length less than 8 characters', () => {
			cy.fieldValueMatch(
				'@passwordField',
				'pass',
				'@signUpButton',
				Errors.PASSWORD_IS_TOO_SHORT
			)
		})

		it('test password length equal 8 characters', () => {
			cy.fieldValueNotMatch(
				'@passwordField',
				'fakepasse',
				'@signUpButton',
				Errors.PASSWORD_IS_TOO_SHORT
			)
		})

		it('test password length greater than 8 characters', () => {
			cy.fieldValueNotMatch(
				'@passwordField',
				'fakepassebigger than 8 char',
				'@signUpButton',
				Errors.PASSWORD_IS_TOO_SHORT
			)
		})
		// Disabled Field test

		it('test for fields to be disabled after submit', () => {
			cy.get('@signUpButton').should('not.be.disabled')
			cy.get('@usernameField').should('not.be.disabled')
			cy.get('@emailField').should('not.be.disabled')
			cy.get('@passwordField').should('not.be.disabled')
			cy.get('@signUpButton').click()
			cy.get('@signUpButton').should('be.disabled')
			cy.get('@usernameField').should('be.disabled')
			cy.get('@emailField').should('be.disabled')
			cy.get('@passwordField').should('be.disabled')
		})
		// Disabled success signUp Field test

		it('test success signUp', () => {
			cy.get('@emailField').type('newEmail2525@gmail.com')
			cy.get('@usernameField').type('UserName751')
			cy.get('@passwordField').type('newPassword')
			cy.get('@signUpButton').click()
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
