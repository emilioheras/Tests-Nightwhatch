var data = require("../variables");
var utils = require("../functions");

module.exports = {

	// "should go to the login page if not logged in" : function (browser) {
	// 	utils.logout(browser);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	browser.assert.urlEquals(utils.buildUrl(browser, data.getInscriptionLoginUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	browser.end();
	// },

	// "should go to the page if logged in" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	browser.assert.urlEquals(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	browser.end();
	// },

	// "should go to the page after connected" : function (browser) {
	// 	utils.logout(browser);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.waitForElementVisible("#data_FETRI_dni_validate" ,20000);
	// 	browser.assert.urlEquals(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	browser.end();
		
	// },
	
	// "should display error if user are not federated" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);		
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	utils.fillInscriptionFetri(browser, "00000000B", "05", "Agosto", "1973");
	// 	browser.waitForElementVisible(".error-message", 20000);
	// 	browser.end();
	// },

	// "display user data in the register" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);		
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	utils.fillInscriptionFetri(browser, "26742203B", "05", "Agosto", "1973");
	// 	utils.checkUserDataFetriAndRfea(browser, 'MIGUEL ANGEL', 'CHICO PARRA', '26742203B', '5', '8', '1973');
	// 	utils.checkDataDisabled(browser);
	// 	browser.end();
	// },

	// "check registration summary" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);		
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	utils.fillInscriptionFetri(browser, "26742203B", "05", "Agosto", "1973");
	// 	browser.waitForElementVisible("a.btn:nth-child(2)", 20000);
	// 	utils.fillRequiredFieldsFetri(browser, data.users.pruebas.userEmail, "555555555");
	// 	browser.waitForElementVisible("button.btn", 20000);
	// 	browser.assert.containsText("button.btn", "LOS DATOS SON CORRECTOS. PROCEDER AL PAGO.");
	// 	browser.assert.containsText("tr.u-fw-600 > td:nth-child(2)", data.others.prices.price2 + "€");
	// 	browser.end();
	// },

	// "check registration data gender summary" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);		
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	utils.fillInscriptionFetri(browser, "26742203B", "05", "Agosto", "1973");
	// 	utils.fillRequiredFieldsFetri(browser, data.users.pruebas.userEmail, "555555555");
	// 	browser.waitForElementVisible("dd.col-sm-6:nth-child(16)", 20000);
	// 	browser.assert.containsText("dd.col-sm-6:nth-child(16)", "Masculino");
	// 	browser.end();
	// },

	// "check if payment has been made correctly" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);		
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	utils.fillInscriptionFetri(browser, "26742203B", "05", "Agosto", "1973");
	// 	utils.fillRequiredFieldsFetri(browser, data.users.pruebas.userEmail, "555555555");
	// 	browser.waitForElementVisible("button.btn", 20000);
	// 	browser.click("button.btn");
	// 	browser.waitForElementVisible(".price > div:nth-child(2) > p:nth-child(1)", 20000);
	// 	browser.assert.urlEquals(data.tpvUrl);
	// 	browser.assert.containsText(".price > div:nth-child(2) > p:nth-child(1)", data.others.prices.price + " €");
	// 	browser.end();
	// },

	// "check discountsPlus" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	utils.fillInscriptionFetri(browser, "26742203B", "05", "Agosto", "1973");
	// 	browser.waitForElementVisible("fieldset.form-step:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)", 20000);
	// 	browser.click("fieldset.form-step:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
	// 	browser.setValue("#data_0_Inscription_discount", "vdDdvfA");
	// 	browser.click("#data_0_Inscriptionattribute_0_value");
	// 	browser.click("a.btn:nth-child(2)");
	// 	browser.waitForElementVisible("tr.u-fw-600 > td:nth-child(2)", 20000);
	// 	browser.assert.containsText("tr.u-fw-600 > td:nth-child(2)", "13.00" + "€");
	// 	browser.end();
	// },
    //
	// "check discountsMinus" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
	// 	utils.fillInscriptionFetri(browser, "26742203B", "05", "Agosto", "1973");
	// 	browser.waitForElementVisible("fieldset.form-step:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)", 20000);
	// 	browser.click("fieldset.form-step:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
	// 	browser.setValue("#data_0_Inscription_discount", "vdDdvfA");
	// 	browser.click("#data_0_Inscriptionattribute_1_value");
	// 	browser.click("a.btn:nth-child(2)");
	// 	browser.waitForElementVisible("tr.u-fw-600 > td:nth-child(2)", 20000);
	// 	browser.assert.containsText("tr.u-fw-600 > td:nth-child(2)", "7.00" + "€");
	// 	browser.end();
	// },

	"check SelectShirt" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);		
		browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.fetriInscription.race, data.races.fetriInscription.event)));
		utils.fillInscriptionFetri(browser, "26742203B", "05", "Agosto", "1973");
		browser.waitForElementVisible("fieldset.form-step:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)", 20000);
		browser.click("fieldset.form-step:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
		browser.setValue("#data_0_Inscription_discount", "vdDdvfA");
		browser.click("#data_0_Inscriptionattribute_2_value");
		browser.keys(['\uE015', '\uE006']);
		browser.click("a.btn:nth-child(2)");
		browser.waitForElementVisible("tr.u-fw-600 > td:nth-child(2)", 20000);
		browser.assert.containsText("tr.u-fw-600 > td:nth-child(2)", "13.00" + "€");
		// browser.click(button.btn);
		// browser.end();
	}
};