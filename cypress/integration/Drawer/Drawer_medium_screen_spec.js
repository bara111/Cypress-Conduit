describe('footer test', {}, () => {
	it('test footer know us', () => {
		cy.visit('http://localhost:3000/')

		cy.get(
			'.header-navbar-Desktop .header-Top-Tablet .header-Top-actions.container-fluid .row div:nth-child(3) button'
		).click()
		cy.get('.header-navbar-Desktop div:nth-child(4)').should(
			'have.attr',
			'class',
			'sidebar-box-visible'
		)
	})
})
