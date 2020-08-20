import * as Errors from './new_article_error_messages'
describe(
	'testing writing new Article',
	{ baseUrl: 'https://demo.productionready.io/#/' },
	() => {
		beforeEach(() => {
			cy.LoginWithToken()
			cy.visit('/editor/')
			cy.get('input[placeholder="Article Title"]').as('articleTitleField')
			cy.get('input[placeholder="What\'s this article about?"]').as(
				'articleDescriptionField'
			)
			cy.get("textarea[placeholder='Write your article (in markdown)']").as(
				'articlesBodyField'
			)
			cy.get('input[placeholder="Enter tags"').as('tagsField')
			cy.get('.btn').as('publishArticleButton')
			cy.get("a[ui-sref*='username']").as('profileLink')
		})

		it('testing visiting new Article for logged users', () => {
			cy.get('@articleTitleField')
			cy.get('@articleDescriptionField')
			cy.get('@articlesBodyField')
			cy.get('@tagsField')
			cy.get('@publishArticleButton')
		})

		it('testing article Title Field is empty', () => {
			cy.get('@articleTitleField')
			cy.get('@articleDescriptionField').type('anyThingisAbout')
			cy.get('@articlesBodyField').type('anyThingisAbout')
			cy.get('@tagsField').type('anyThingisAbout')
			cy.get('@publishArticleButton').click()
			cy.contains(Errors.TITLE_FILED_CAN_NOT_BE_BLANK)
			cy.contains(Errors.TITLE_FILED_IS_TOO_SHORT)
			cy.contains(Errors.DESCRIPTION_FILED_CAN_NOT_BE_BLANK).should('not.exist')
			cy.contains(Errors.DESCRIPTION_IS_TOO_SHORT).should('not.exist')
			cy.contains(Errors.BODY_FILED_CAN_NOT_BE_BLANK).should('not.exist')
		})

		it('testing  article description Field is empty', () => {
			cy.get('@articleTitleField').type('anyThingisAbout')
			cy.get('@articleDescriptionField')
			cy.get('@articlesBodyField').type('anyThingisAbout')
			cy.get('@tagsField').type('anyThingisAbout')
			cy.get('@publishArticleButton').click()
			cy.contains(Errors.TITLE_FILED_CAN_NOT_BE_BLANK).should('not.exist')
			cy.contains(Errors.TITLE_FILED_IS_TOO_SHORT).should('not.exist')
			cy.contains(Errors.DESCRIPTION_FILED_CAN_NOT_BE_BLANK)
			cy.contains(Errors.DESCRIPTION_IS_TOO_SHORT)
			cy.contains(Errors.BODY_FILED_CAN_NOT_BE_BLANK).should('not.exist')
		})

		it('testing article body Field is empty', () => {
			cy.get('@articleTitleField').type('anyThingisAbout')
			cy.get('@articleDescriptionField').type('anyThingisAbout')
			cy.get('@articlesBodyField')
			cy.get('@tagsField').type('anyThingisAbout')
			cy.get('@publishArticleButton').click()
			cy.contains(Errors.TITLE_FILED_CAN_NOT_BE_BLANK).should('not.exist')
			cy.contains(Errors.TITLE_FILED_IS_TOO_SHORT).should('not.exist')
			cy.contains(Errors.DESCRIPTION_FILED_CAN_NOT_BE_BLANK).should('not.exist')
			cy.contains(Errors.DESCRIPTION_IS_TOO_SHORT).should('not.exist')
			cy.contains("body can't be blank")
		})

		it('test for fields to be disabled after submit', () => {
			cy.get('@articleTitleField').should('not.be.disabled')
			cy.get('@articleDescriptionField').should('not.be.disabled')
			cy.get('@articlesBodyField').should('not.be.disabled')
			cy.get('@tagsField').should('not.be.disabled')
			cy.get('@publishArticleButton').should('not.be.disabled')
			cy.get('@publishArticleButton').click()
			cy.get('@articleTitleField').should('be.disabled')
			cy.get('@articleDescriptionField').should('be.disabled')
			cy.get('@articlesBodyField').should('be.disabled')
			cy.get('@tagsField').should('be.disabled')
			cy.get('@publishArticleButton').should('be.disabled')
		})

		it('testing success writing new article', () => {
			cy.get('@articleTitleField').type('article title')
			cy.get('@articleDescriptionField').type('anyThingisAbout')
			cy.get('@articlesBodyField').type('articlebody')
			cy.get('@tagsField').type('anyThingisAbout')
			cy.get('@publishArticleButton').click()
			cy.contains(Errors.TITLE_FILED_CAN_NOT_BE_BLANK).should('not.exist')
			cy.contains(Errors.TITLE_FILED_IS_TOO_SHORT).should('not.exist')
			cy.contains(Errors.DESCRIPTION_FILED_CAN_NOT_BE_BLANK).should('not.exist')
			cy.contains(Errors.DESCRIPTION_IS_TOO_SHORT).should('not.exist')
			cy.contains(Errors.BODY_FILED_CAN_NOT_BE_BLANK).should('not.exist')
			cy.contains('article title')
		})
	}
)
