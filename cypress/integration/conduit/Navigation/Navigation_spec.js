describe(
	'testing site routing',
	{ baseUrl: 'https://demo.productionready.io/#/' },
	() => {
		//navbar component
		it('logo test', () => {
			cy.visit('/')
			cy.get('.navbar-brand').should('have.attr', 'href', '#/').click()
			cy.url().should('be.eq', 'https://demo.productionready.io/#/')
		})

		it('test home', () => {
			cy.visit('/')
			cy.get('[show-authed=false] > :nth-child(1) > .nav-link')
				.should('have.attr', 'href', '#/')
				.click()
			cy.url().should('be.eq', 'https://demo.productionready.io/#/')
		})

		it('test signup', () => {
			cy.visit('/')
			cy.get('[show-authed=false] > :nth-child(3) > .nav-link')
				.should('have.attr', 'href', '#/register')
				.click()
			cy.url().should('be.eq', 'https://demo.productionready.io/#/register')
		})

		it('test login', () => {
			cy.visit('/')
			cy.get('[show-authed=false] > :nth-child(2) > .nav-link')
				.should('have.attr', 'href', '#/login')
				.click()
			cy.url().should('be.eq', 'https://demo.productionready.io/#/login')
		})

		//footer component
		it('test conduit', () => {
			cy.visit('/')
			cy.get('footer > .container > .logo-font')
				.should('have.attr', 'href', '#/')
				.click()
			cy.url().should('be.eq', 'https://demo.productionready.io/#/')
		})
		
		//signin component
		it('testing need account?', () => {
			cy.visit('/login')
			cy.get('p.text-xs-center > [ui-sref="app.register"]')
				.should('have.attr', 'href', '#/register')
				.click()
			cy.url().should('be.eq', 'https://demo.productionready.io/#/register')
        })
        //signup component
		it('testing have account?', () => {
			cy.visit('/register')
			cy.get('p.text-xs-center > [ui-sref="app.login"]')
				.should('have.attr', 'href', '#/login')
				.click()
			cy.url().should('be.eq', 'https://demo.productionready.io/#/login').debug()
		})
	}
)
