var data = require("../variables");
var utils = require("../functions");

module.exports = {

	"should go to the login page if not logged in" : function (browser) {
		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.fetriInscription.eventsFetriInscription));
		browser.pause(5000);
		browser.assert.urlEquals(utils.buildUrl(browser, data.fetriInscription.eventFetriLogin));
		browser.end();
	},

	"should go to the page if logged in" : function (browser) {
		utils.logout(browser);
		utils.login(browser, "user+test00@gmail.com", "123456");
		browser.url(utils.buildUrl(browser, data.fetriInscription.eventsFetriInscription));
		browser.assert.urlEquals(utils.buildUrl(browser, data.fetriInscription.eventsFetriInscription));
		browser.end();
	},

	"should go to the page after connected" : function (browser) {
		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.fetriInscription.eventsFetriInscription));
		browser.pause(10000);
		utils.loginInscription(browser, "user+test00@gmail.com", "123456");
		browser.pause(5000);
		browser.assert.urlEquals(utils.buildUrl(browser, data.fetriInscription.eventsFetriInscription));
		browser.end();
		
	},

	"should display error if user are not federated" : function (browser) {
		utils.enterValidOrInvalidDocumentNumber(browser, "26743303B", "05", "Agosto", "1973");
		browser.assert.cssClassPresent("#data_FETRI_dni_validate", "form-control-danger");
		browser.end();
	},

	"display user data in the register" : function (browser) {
		utils.enterValidOrInvalidDocumentNumber(browser, "26742203B", "05", "Agosto", "1973");
		utils.checkUserData(browser, 'MIGUEL ANGEL', 'CHICO PARRA', 'user+test00@gmail.com', '26742203B', '0', '5', '8', '1973', 'TRIATOMIX MBIKES');
		utils.checkDataDisabled(browser);
		browser.end();
	},

	"check registration summary" : function (browser) {
		utils.enterValidOrInvalidDocumentNumber(browser, "26742203B", "05", "Agosto", "1973");
		browser.waitForElementVisible("a.btn:nth-child(2)", 5000);
		browser.click("a.btn:nth-child(2)");
		browser.waitForElementVisible("button.btn", 20000);
		browser.assert.containsText("body > main > div > div:nth-child(2) > div.col-md-8 > form > fieldset > div > div.u-ta-c.form-group > button", "LOS DATOS SON CORRECTOS. INSCRIBIRME");
		browser.assert.containsText("#the-price > tbody > tr.u-fw-600.u-fz-md > td.u-whs-nw", "10.00€");
		browser.end();
	},

	"check registration data gender summary" : function (browser) {
		utils.enterValidOrInvalidDocumentNumber(browser, "26742203B", "05", "Agosto", "1973");
		browser.waitForElementVisible("a.btn:nth-child(2)", 20000);
		browser.click("a.btn:nth-child(2)");
		browser.waitForElementVisible("dd.col-sm-6:nth-child(16)", 20000);
		browser.assert.containsText("dd.col-sm-6:nth-child(16)", "Masculino");
		browser.end();
	},

	"check if payment has been made correctly" : function (browser) {
		utils.enterValidOrInvalidDocumentNumber(browser, "26742203B", "05", "Agosto", "1973");
		browser.click("a.btn:nth-child(2)");
		browser.waitForElementVisible("button.btn", 20000);
		browser.click("button.btn");
		browser.waitForElementVisible(".price > div:nth-child(2) > p:nth-child(1)", 20000);
		browser.assert.urlEquals(data.tpvUrl);
		browser.assert.containsText(".price > div:nth-child(2) > p:nth-child(1)","10,00  €");
		browser.end();
	}
};