var data = require("../variables");
var utils = require("../functions");

module.exports = {

	// "should go to the login page if not logged in" : function (browser) {
	// 	browser.url(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
	// 	browser.pause(5000);
	// 	browser.assert.urlEquals(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368/login"));
	// 	browser.end();
	// },

	// "should go to the page if logged in" : function (browser) {
	// 	utils.login(browser, "user+test00@gmail.com", "123456");
	// 	browser.url(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
	// 	browser.assert.urlEquals(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
	// 	browser.end();
	// },

	// "should go to the page after connected" : function (browser) {
	// 	browser.url(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
	// 	utils.loginInscription(browser, "user+test00@gmail.com", "123456");
	// 	browser.pause(5000);
	// 	browser.assert.urlEquals(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
	// 	browser.end();
		
	// },

	// "should display error if user are not federated" : function (browser) {
	// 	utils.login(browser, "user+test00@gmail.com", "123456");
	// 	browser.url(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
	// 	utils.fillInscriptionFetri(browser, "26743303B", "5", "8", "1973"); //5 = 05, 8 = agosto
	// 	browser.assert.cssClassPresent("#data_FETRI_dni_validate", "form-control-danger");
	// 	browser.end();
	// },

	// "should display error if not less than 16 years" : function (browser) {
	// 	utils.login(browser, "user+test00@gmail.com", "123456");
	// 	browser.url(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
	// 	utils.fillInscriptionFetri(browser, "26742203B", "5", "8", "2010"); //5 = 05, 8 = agosto
	// 	browser.assert.cssClassPresent("#data_FETRI_dni_validate", "form-control-danger");
	// 	browser.end();
	// },

	"display user data in the register" : function (browser) {
		utils.login(browser, "user+test00@gmail.com", "123456");
		browser.url(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
		utils.fillInscriptionFetri(browser, "26742203B", "05", "Agosto", "1973"); //5 = 05, 8 = agosto
		utils.checkUserData(browser, 'MIGUEL ANGEL', 'CHICO PARRA', 'user+test00@gmail.com', '26742203B', '0', '5', '8', '1973', 'TRIATOMIX MBIKES');
		utils.checkDataDisabled(browser);
		browser.end();
	},

	// "resumen de datos" : function (browser) {
	// 	utils.login(browser, "user+test00@gmail.com", "123456");
	// 	browser.url(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
	// 	utils.fillInscriptionFetri(browser, "26742203B", "5", "8", "1973"); //5 = 05, 8 = agosto
	// 	browser.waitForElementVisible("a.btn:nth-child(2)", 5000);
	// 	//browser.executeAsync(function(data, done) {$("a.btn:nth-child(2)").click();})
	// 	browser.click("a.btn:nth-child(2)");
	// 	//browser.pause(20000);
	// 	//browser.waitForElementVisible("a.btn:nth-child(2)", 5000);
	// 	browser.waitForElementVisible("button.btn", 20000);
	// 	browser.assert.containsText("body > main > div > div:nth-child(2) > div.col-md-8 > form > fieldset > div > div.u-ta-c.form-group > button", "Los datos son correctos. Inscribirme");
	// 	browser.assert.containsText("#the-price > tbody > tr.u-fw-600.u-fz-md > td.u-whs-nw", "10.00€");
	// 	browser.end();
	// },

	// "pagina de pago" : function (browser) {
	// 	utils.login(browser, "user+test00@gmail.com", "123456");
	// 	browser.url(utils.buildUrl(browser, "services/inscription/carrera-inscriptiones-test/368"));
	// 	utils.fillInscriptionFetri(browser, "26742203B", "5", "8", "1973"); //5 = 05, 8 = agosto
	// 	browser.click("body > main > div > div:nth-child(2) > div.col-md-8 > form > nav > a.btn.btn-primary.u-fl-r");
	// 	browser.click("body > main > div > div:nth-child(2) > div.col-md-8 > form > fieldset > div > div.u-ta-c.form-group > button");
	// 	browser.assert.urlEquals("https://sis-t.redsys.es:25443/sis/realizarPago");
	// 	browser.assert.containsText("10,00   €");
	// 	browser.end();
	// },

};