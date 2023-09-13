const { selector, input } = require('../support/utils/data')
const { commonMethods } = require('../support/utils/methods')

describe('Testing the Airport Labs website', () => {
	beforeEach(() => {
		cy.visit('/')
		commonMethods.assertUrlValueEquals('https://www.airportlabs.com/')
	})

	it(`01 - Verify that the title from a section of your choosing from the landing page is correct
  (e.g. value, font size, style)`, () => {
		commonMethods.assertTextOfSelector(
			selector.mainGoalSectionTitle,
			'Our main goal is to make aviation more efficient.'
		)
		commonMethods.assertCssPropertyOfSelector(selector.mainGoalSectionTitle, 'font-size', '40px')
		commonMethods.assertCssPropertyOfSelector(selector.mainGoalSectionTitle, 'font-style', 'normal')
	})

	it(`02 - Verify that the statistic from the Our Activity in numbers section from the landing
  page is correct (e.g. value, font size, style) (statistic is for example: 200k Users worldwide)`, () => {
		commonMethods.assertTextOfNthElement(selector.ourImpactSectionGreenTitle, 0, '200k')
		commonMethods.assertCssPropertyOfNthElement(selector.ourImpactSectionGreenTitle, 0, 'font-size', '40px')
		commonMethods.assertCssPropertyOfNthElement(selector.ourImpactSectionGreenTitle, 0, 'font-style', 'normal')

		commonMethods.assertTextOfNthElement(selector.ourImpactSectionSubTitle, 0, 'Users worldwide')
		commonMethods.assertCssPropertyOfNthElement(selector.ourImpactSectionSubTitle, 0, 'font-size', '20px')
		commonMethods.assertCssPropertyOfNthElement(selector.ourImpactSectionSubTitle, 0, 'font-style', 'normal')
	})

	it('03 - Verify that you can use Get in touch section', () => {
		cy.get(selector.contactSalesButton).last().click()
		commonMethods.assertUrlValueContains('/other/contact-sales')
		commonMethods.typeText(selector.yourName, input.testingName)
		commonMethods.typeText(selector.companyName, input.companyName)
		commonMethods.typeText(selector.emailAddress, input.emailAddress)
		commonMethods.typeText(selector.phoneNumber, input.phoneNumber)
		commonMethods.selectNthOptionFromSelector(selector.dropdown, 1)
		commonMethods.typeText(selector.messageTextBox, input.message)
		cy.get(selector.customCheckbox).first().click()
		cy.get(selector.customCheckbox).last().click()
		cy.get(selector.sendInquiryButton).click()
		commonMethods.assertElementIsVisible(selector.thankYouMessage)
		commonMethods.assertTextOfSelector(selector.thankYouMessage, 'Thank you! Your submission has been received!')
	})

	it('04 - Verify that social media links are redirecting user to the correct pages', () => {
		commonMethods.assertHrefValueOfNthElement(selector.footerLink, 0, 'https://www.facebook.com/AirportLabs')
		commonMethods.assertHrefValueOfNthElement(
			selector.footerLink,
			1,
			'https://www.instagram.com/airportlabspeople/'
		)
		commonMethods.assertHrefValueOfNthElement(
			selector.footerLink,
			2,
			'https://www.linkedin.com/company/airport-labs/'
		)
	})

	it(`05 - Verify that an image with the AirportLabs logo exists (or other image of your choice
        from the list of projects). Verify the following properties for the selected image: size, width and
        height.`, () => {
		cy.get(selector.navbarLogo)
			.should('exist')
			.then(([img]) => {
				expect(img.naturalWidth).to.equal(300)
				expect(img.naturalHeight).to.equal(85)
				expect(img.width).to.equal(140)
				expect(img.height).to.equal(40)
			})

		commonMethods.assertAttributeOfSelector(
			selector.schipholAirportLogo,
			'sizes',
			'(max-width: 479px) 100px, (max-width: 991px) 160px, 120px'
		)
	})
})
