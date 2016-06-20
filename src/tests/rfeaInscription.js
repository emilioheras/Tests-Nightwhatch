var data = require("../variables");
var utils = require("../functions");

module.exports = {

	// "should go to the login page if not logged in" : function (browser) {
	// 	utils.logout(browser);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.rfeaInscription.race, data.races.rfeaInscription.event)));
	// 	browser.assert.urlEquals(utils.buildUrl(browser, data.getInscriptionLoginUrl(data.races.rfeaInscription.race, data.races.rfeaInscription.event)));
	// 	browser.end();
	// },

	// "should go to the page if logged in" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.rfeaInscription.race, data.races.rfeaInscription.event)));
	// 	browser.assert.urlEquals(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.rfeaInscription.race, data.races.rfeaInscription.event)));
	// 	browser.end();
	// },

	// "should go to the page after connected" : function (browser) {
	// 	utils.logout(browser);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.rfeaInscription.race, data.races.rfeaInscription.event)));
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.waitForElementVisible("#data_RFEA_license_validate" ,20000);
	// 	browser.assert.urlEquals(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.rfeaInscription.race, data.races.rfeaInscription.event)));
	// 	browser.end();		
	// },

	// "should display error if user are not license Plus" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	utils.enterDataRfea(browser, "Carnet plus", "1986");
	// 	browser.executeAsync(function(data, done) {$('#data_RFEA_carnet_validate').val('01505820');});
	// 	browser.click("body > main > div > div:nth-child(2) > div.col-md-8 > form > nav > a.btn.btn-primary.u-fl-r");
	// 	browser.waitForElementVisible(".error-message", 20000);
	// 	browser.end();
	// },

	// "display user data in the register" : function (browser) {
	// 	utils.logout(browser);
	//  	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	utils.enterDataRfea(browser, "Carnet plus", "1972");
	// 	browser.executeAsync(function(data, done) {$('#data_RFEA_carnet_validate').val('903');});
	// 	browser.click("body > main > div > div:nth-child(2) > div.col-md-8 > form > nav > a.btn.btn-primary.u-fl-r");
	// 	browser.waitForElementVisible("#data_0_Inscription_name", 20000);
	// 	utils.checkUserDataFetriAndRfea(browser, 'JUAN JOSE', 'GUTIERREZ GARCIA', '50449017N', '19', '1', '1972');		
	// 	utils.checkDataDisabled(browser);
	// 	browser.end();
	// },

	"check registration summary" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		utils.enterDataRfea(browser, "Carnet plus", "1972");		
		browser.waitForElementVisible("a.btn:nth-child(2)", 5000);
		//CONTROLAR ERROR. VA A LA URL: https://sportmaniacs.com/es/races/search/all DESPUÉS DE EJECUTAR EL SIGUIENTE MÉTODO
		utils.fillRequiredFieldsRfea(browser, data.users.pruebas.userEmail, "555555555", "555555556", "46200", "España", "Valencia");
		// browser.waitForElementVisible("button.btn", 20000);
		// browser.assert.containsText("button.btn", "LOS DATOS SON CORRECTOS. PROCEDER AL PAGO.");
		// browser.assert.containsText("#the-price > tbody > tr.u-fw-600.u-fz-md > td.u-whs-nw", "10.00€");
		// browser.end();
	},

	// "check registration data gender summary" : function (browser) {
	// 	utils.enterDataRfea(browser, "Carnet plus", "1972");
	// 	browser.executeAsync(function(data, done) {$('#data_RFEA_carnet_validate').val('903');});
	// 	browser.click("body > main > div > div:nth-child(2) > div.col-md-8 > form > nav > a.btn.btn-primary.u-fl-r");
	// 	browser.waitForElementVisible("a.btn:nth-child(2)", 20000);
	// 	browser.click("a.btn:nth-child(2)");
	// 	browser.waitForElementVisible("dd.col-sm-6:nth-child(16)", 20000);
	// 	browser.assert.containsText("dd.col-sm-6:nth-child(16)", "Masculino");
	// 	browser.end();
	// },

	// "check if payment has been made correctly" : function (browser) {
	// 	utils.enterDataRfea(browser, "Carnet plus", "1972");
	// 	browser.executeAsync(function(data, done) {$('#data_RFEA_carnet_validate').val('903');});
	// 	browser.click("body > main > div > div:nth-child(2) > div.col-md-8 > form > nav > a.btn.btn-primary.u-fl-r");
	// 	browser.click("a.btn:nth-child(2)");
	// 	browser.waitForElementVisible("button.btn", 20000);
	// 	browser.click("button.btn");
	// 	browser.waitForElementVisible(".price > div:nth-child(2) > p:nth-child(1)", 20000);
	// 	browser.assert.urlEquals(data.tpvUrl);
	// 	browser.assert.containsText(".price > div:nth-child(2) > p:nth-child(1)","10,00  €");
	// 	browser.end();
	// }

};