const { selector, api } = require('../data')
const { commonMethods } = require('../methods')

export class EmagPage {
	clickOnTvsAudioVideoAndPhotoCategory() {
		cy.get(selector.productsSideMenu).find(selector.productsCategory).eq(3).click({ force: true })
	}

	clickOnTvsAndAccesoriesSubCategory() {
		cy.contains('Televizoare & accesorii').click({ force: true })
	}

	assertTitleOfThePage() {
		commonMethods.assertTextOfSelector(selector.pageTitle, 'Televizoare & accesorii')
	}

	clickOnTvsLink() {
		cy.get(selector.sideLinksMenu).first().contains('Televizoare').click({ force: true })
	}

	clickOnRemotesLink() {
		cy.get(selector.sideLinksMenu).first().contains('Telecomenzi').click({ force: true })
	}

	sortDescendingByPrice() {
		cy.intercept(api.searchByUrl).as('sortingByPrice')
		cy.contains('Cele mai populare').click({ force: true })
		cy.contains('Pret descrescator').click({ force: true })
		cy.wait('@sortingByPrice')
	}

	sortAscendingByPrice() {
		cy.intercept(api.searchByUrl).as('sortingByPrice')
		cy.contains('Cele mai populare').click({ force: true })
		cy.contains('Pret crescator').click({ force: true })
		cy.wait('@sortingByPrice')
	}

	filterByBrand() {
		cy.intercept(api.searchByFilters).as('filterByBrand')
		cy.get(selector.filterByBrand).first().find(selector.filterSamsungOption).click()
		cy.wait('@filterByBrand')
	}

	filterByTechnology() {
		cy.intercept(api.searchByFilters).as('filterByTechnology')
		cy.get(selector.filterByTechnology).find(selector.filterQledOption).click()
		cy.wait('@filterByTechnology')
	}

	filterByRating() {
		cy.intercept(api.searchByFilters).as('filterByRating')
		cy.get(selector.filterByRating).find(selector.filterThreeStarsOption).click()
		cy.wait('@filterByRating')
	}

	assertTitleOfTheFirstProduct() {
		cy.get(selector.productCard)
			.first()
			.find(selector.productTitle)
			.invoke('text')
			.then((productTitleText) => {
				cy.log('The product title is: ' + productTitleText)
				const productTitle = productTitleText
				cy.wrap(productTitle).as('productTitleAlias')
			})
	}

	addTheFirstProductToCart() {
		cy.get(selector.productCard).first().find(selector.AddToCartButton).click()
		cy.contains('Produsul a fost adaugat in cos').should('be.visible')
		cy.get('@productTitleAlias').then((productTitle) => {
			cy.get(selector.modalBodySmallText)
				.first()
				.invoke('text')
				.then((modalBodySmallText) => {
					expect(modalBodySmallText.trim()).to.eq(productTitle)
				})
		})
	}

	seeTheCartDetails() {
		cy.contains('Vezi detalii cos').click({ force: true })
		cy.get('@productTitleAlias').then((cartProductTitle) => {
			cy.get(selector.cartProductTitle).should('have.text', cartProductTitle)
		})
	}
}
export const emagPage = new EmagPage()
