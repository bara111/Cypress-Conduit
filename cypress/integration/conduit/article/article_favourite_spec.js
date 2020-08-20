describe(
	'test favourite article',
	{
		baseUrl: 'https://demo.productionready.io/#/'
	},
	() => {
		beforeEach(() => {
			cy.LoginWithToken()
			cy.visit('/')
		})
		//	test for logged user
		it('test favourite button not clicked before', () => {
			cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()
			cy.get(
				':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn > ng-transclude > .ng-binding'
			)
				.as('LikeNumber')
				.then($LikeNumber => {
					let text = $LikeNumber.text()
					text = text.replace(/(\r\n|\n|\r)/gm, '')
					text.trim()
					cy.get(
						':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn'
					)
						.click()
						.should(() => {
							let textAfterClick = $LikeNumber.text()
							textAfterClick = textAfterClick.replace(/(\r\n|\n|\r)/gm, '')
							expect(+text + 1).to.eq(+textAfterClick + 0)
						})
					cy.get(':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > .info > .author'
					).then($autherName => {
						let autherName = $autherName.text()
						cy.visit('/@bara1111')
						cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link')
							.click()
							cy.contains(autherName)
					})
				})
		})
		it('test favourite button clicked before', () => {
			cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()
			cy.get(
				':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn > ng-transclude > .ng-binding'
			)
				.as('LikeNumber')
				.then($LikeNumber => {
					let text1 = $LikeNumber.text()
					text1 = text1.replace(/(\r\n|\n|\r)/gm, '')
					text1.trim()
					cy.get(
						':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn'
					)
						.click()
						.should(() => {
							let textAfterClick = $LikeNumber.text()
							textAfterClick = textAfterClick.replace(/(\r\n|\n|\r)/gm, '')
							expect(+text1 + 0).to.eq(+textAfterClick + 1)
						})
				})
		})
		//	test for non logged user

		it('test favourite button clicked by non logged user', () => {
			window.localStorage.clear()
			cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()
			cy.get(
				':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn'
			).click()
			cy.url().should('be.eq', 'https://demo.productionready.io/#/register')
		})
	}
)
