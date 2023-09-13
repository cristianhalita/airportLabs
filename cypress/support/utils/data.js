export const api = {
	searchByUrl: 'https://www.emag.ro/search-by-url?source_id=*',
	searchByFilters: 'https://www.emag.ro/search-by-filters-with-redirect?source_id=*',
}

export const input = {
	testingName: 'Cristian Halita',
	companyName: 'Customera Tech',
	emailAddress: 'testing.email@mail.com',
	phoneNumber: '0123 456 789',
	message: 'This is a dummy text for testing...',
}

export const selector = {
	/// contact form
	companyName: '#Company-Name',
	customCheckbox: '.w-checkbox-input',
	dropdown: '#Choose-Option',
	emailAddress: '#email',
	messageTextBox: '#Message',
	phoneNumber: '#Contact',
	sendInquiryButton: '[value="Send Inquiry"]',
	thankYouMessage: '[aria-label="Contact Sales success"]',
	yourName: '#Your-Name',
	/// homepage
	contactSalesButton: '[href="/other/contact-sales"]',
	footerLink: '.logo-footer-container',
	mainGoalSection: '.main-goal',
	mainGoalSectionTitle: '.main-goal h2',
	navbarLogo: '.desktop-brand img',
	ourImpactSectionGreenTitle: '.our-impact .stats h2',
	ourImpactSectionSubTitle: '.our-impact .stats h4',
	schipholAirportLogo: '[alt="Schiphol Airport Logo"]',
	/// emag
	productsSideMenu: 'ul.megamenu-list',
	productsCategory: 'li.megamenu-list-department',
	emagLogo: 'a.navbar-brand',
	listSideLinks: 'ul.emg-aside-links ',
	pageTitle: '.page-title',
	filterBody: '.filter-body',
	filterByBrand: '[data-name="Brand"]',
	filterSamsungOption: '[data-name="Samsung"]',
	filterByTechnology: '[data-name="Tehnologie display"]',
	filterQledOption: '[data-name="QLED"]',
	filterByRating: '[data-name="Rating minim"]',
	filterThreeStarsOption: '[data-option-order="3"]',
	productCard: '.card-v2',
	AddToCartButton: '.card-v2-atc',
	productTitle: '[data-zone="title"]',
	modalBodySmallText: '.modal-body .table-cell .small',
	cartProductTitle: '.main-product-title',
	sideLinksMenu: 'ul.emg-aside-links',
}

export default {
	api,
	input,
	selector,
}
