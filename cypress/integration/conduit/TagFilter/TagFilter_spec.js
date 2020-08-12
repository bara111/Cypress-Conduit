describe(
	'testing tag filters',
	{
		baseUrl: 'https://demo.productionready.io/#/'
	},
	() => {
		before('before suite', () => {
			cy.visit('/')
		})
		it('test blank tags', () => {
			cy.get('li[ng-show] a').then($tagitem => {
				cy.get('a[ng-bind=tagName]:nth-child(11)').as('tag').click()
				cy.get('@tag').then($tag => {
					const tagName = $tag.text()
					expect($tagitem.text()).to.include.string(tagName)
				})
				cy.get('a[ng-bind=tagName]:nth-child(13)').as('tag').click()
				cy.get('@tag').then($tag => {
					const tagName = $tag.text()
					expect($tagitem.text()).to.include.string(tagName)
				})
				cy.get('a[ng-bind=tagName]:nth-child(14)').as('tag').click()
				cy.get('@tag').then($tag => {
					const tagName = $tag.text()
					expect($tagitem.text()).to.include.string(tagName)
				})
				cy.get('a[ng-bind=tagName]:nth-child(15)').as('tag').click()
				cy.get('@tag').then($tag => {
					const tagName = $tag.text()
					expect($tagitem.text()).to.include.string(tagName)
				})
				cy.get('a[ng-bind=tagName]:nth-child(16)').as('tag').click()
				cy.get('@tag').then($tag => {
					const tagName = $tag.text()
					expect($tagitem.text()).to.include.string(tagName)
				})
				cy.get('a[ng-bind=tagName]:nth-child(17)').as('tag').click()
				cy.get('@tag').then($tag => {
					const tagName = $tag.text()
					expect($tagitem.text()).to.include.string(tagName)
                })
                cy.get('a[ng-bind=tagName]:nth-child(18)').as('tag').click()
				cy.get('@tag').then($tag => {
					const tagName = $tag.text()
					expect($tagitem.text()).to.include.string(tagName)
                })
                cy.get('a[ng-bind=tagName]:nth-child(19)').as('tag').click()
				cy.get('@tag').then($tag => {
					const tagName = $tag.text()
					expect($tagitem.text()).to.include.string(tagName)
                })
                cy.get('a[ng-bind=tagName]:nth-child(20)').as('tag').click()
				cy.get('@tag').then($tag => {
					const tagName = $tag.text()
					expect($tagitem.text()).to.include.string(tagName)
				})
			})
		})
	}
)
