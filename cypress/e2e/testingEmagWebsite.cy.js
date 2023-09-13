const { selector } = require('../support/utils/data')
const { commonMethods } = require('../support/utils/methods')
const { emagPage } = require('../support/utils/pages/emagPage')

describe('Testing Emag shopping website', () => {
	beforeEach(() => {
		cy.visit('https://www.emag.ro/', { failOnStatusCode: false })
		commonMethods.assertUrlValueEquals('https://www.emag.ro/')
	})

	it('Add the most expensive Samsung QLED TV to the cart', () => {
		emagPage.clickOnTvsAudioVideoAndPhotoCategory()
		emagPage.clickOnTvsAndAccesoriesSubCategory()
		emagPage.assertTitleOfThePage()
		emagPage.clickOnTvsLink()
		emagPage.sortDescendingByPrice()
		emagPage.filterByRating()
		emagPage.filterByBrand()
		emagPage.filterByTechnology()
		emagPage.assertTitleOfTheFirstProduct()
		emagPage.addTheFirstProductToCart()
		emagPage.seeTheCartDetails()
	})

	it('Add the cheapest Samsung remote to the cart', () => {
		emagPage.clickOnTvsAudioVideoAndPhotoCategory()
		emagPage.clickOnTvsAndAccesoriesSubCategory()
		emagPage.assertTitleOfThePage()
		emagPage.clickOnRemotesLink()
		emagPage.sortAscendingByPrice()
		emagPage.filterByRating()
		emagPage.filterByBrand()
		emagPage.assertTitleOfTheFirstProduct()
		emagPage.addTheFirstProductToCart()
		emagPage.seeTheCartDetails()
	})
})
