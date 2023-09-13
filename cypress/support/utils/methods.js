export class CommonMethods {
	assertUrlValueEquals(url) {
		cy.url().should('eq', url)
	}
	assertUrlValueContains(url) {
		cy.url().should('contain', url)
	}

	assertTextOfSelector(selector, text) {
		cy.get(selector).should('have.text', text)
	}

	assertTextOfNthElement(selector, numberOfElement, text) {
		cy.get(selector).eq(numberOfElement).should('have.text', text)
	}

	assertCssPropertyOfSelector(selector, property, value) {
		cy.get(selector).should('have.css', property, value)
	}

	assertCssPropertyOfNthElement(selector, numberOfElement, property, value) {
		cy.get(selector).eq(numberOfElement).should('have.css', property, value)
	}

	assertHrefValueOfNthElement(selector, numberOfElement, value) {
		cy.get(selector).eq(numberOfElement).should('have.attr', 'href', value)
	}

	typeText(selector, text) {
		cy.get(selector).type(text)
	}

	selectNthOptionFromSelector(selector, numberOfElement) {
		cy.get(selector).select(numberOfElement)
	}

	assertElementIsVisible(selector) {
		cy.get(selector).should('be.visible')
	}

	assertAttributeOfSelector(selector, attribute, value) {
		cy.get(selector).should('have.attr', attribute, value)
	}
}
export const commonMethods = new CommonMethods()
