var data = require("../variables");
var utils = require("../functions");

module.exports = {
	// "should go to the login page if not logged in" : function (browser) {
	// 	utils.logout(browser);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.preferentialInscription.race, data.races.preferentialInscription.event)));
	// 	browser.assert.urlEquals(utils.buildUrl(browser, data.getInscriptionLoginUrl(data.races.preferentialInscription.race, data.races.preferentialInscription.event)));
	// 	browser.end();	
	// },

	"should go straight to the document number form if logged in" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.preferentialInscription.eventsPreferentialInscription));
		// browser.assert.urlEquals(utils.buildUrl(browser, data.preferentialInscription.eventsPreferentialInscription));
		// browser.end();
	},

	// "the form should not let me go to the preferential inscription form with a bad document number" : function (browser) {
	// 	utils.enterValidOrInvalidDocumentNumber(browser, '23796805Q');
	// 	browser.waitForElementVisible('.error-message', 10000);
	// 	browser.end();
	// },

	// "the form should let me go to the preferential inscription form with a valid document number" : function (browser) {
	// 	utils.enterValidOrInvalidDocumentNumber(browser, '33566340W');
	// 	browser.waitForElementVisible('a.btn:nth-child(2)', 10000);
	// 	browser.end();
	// },

	// "the basic fields are alwais shown in the form" : function (browser) {
	// 	utils.enterValidOrInvalidDocumentNumber(browser, '33566340W');
	//  	browser.waitForElementVisible('#data_0_Inscription_code', 10000);
	// 	utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name', '#data_0_Inscription_surname', '#data_0_Inscription_mail', '#data_0_Inscription_dni', '#data_0_Inscription_phone', '#data_0_Inscription_code']);
	// 	browser.click('fieldset.form-step:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)');
	//  	browser.waitForElementVisible('#data_0_Inscription_code', 10000);
	// 	utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name', '#data_0_Inscription_surname', '#data_0_Inscription_mail', '#data_0_Inscription_dni', '#data_0_Inscription_phone', '#data_0_Inscription_code']);
	// 	browser.end();
	// },

	// "check that the form fields have been filled with user data" : function (browser) {
	// 	utils.enterValidOrInvalidDocumentNumber(browser, '33566340W');
	//  	browser.waitForElementVisible('#data_0_Inscription_code', 10000);
	//  	utils.checkUserData(browser, 'alberto', 'sanchez', 'user+test00@gmail.com', '33566340W', '0', '21', '4', '1987', 'SIN CLUB');
	// 	browser.end();
	// },

	// "my user data fields should be locked" : function (browser) {
	// 	utils.enterValidOrInvalidDocumentNumber(browser, '33566340W');
	//  	browser.waitForElementVisible('#data_0_Inscription_code', 10000);	 	
	// 	utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name[disabled]', '#data_0_Inscription_surname[disabled]', '#data_0_Inscription_dni[readonly]']);
	// 	browser.end();
	// },

	// "check registration summary" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.enterValidOrInvalidDocumentNumber(browser, '33566340W');
	//    	browser.waitForElementVisible('a.btn:nth-child(2)', 10000);
	//   	browser.click('a.btn:nth-child(2)');
	//   	browser.waitForElementVisible('button.btn', 20000);	
	//   	browser.assert.containsText('tr.u-fw-600 > td:nth-child(2)' , '10.00€');
	// 	browser.end();
	// },

	// "check if payment has been made correctly" : function (browser) {
	// 	utils.enterValidOrInvalidDocumentNumber(browser, '33566340W');
	//    	browser.waitForElementVisible('a.btn:nth-child(2)', 10000);
	//   	browser.click('a.btn:nth-child(2)');
	//    	browser.waitForElementVisible('button.btn', 20000);
	//    	browser.click('button.btn');
	//    	browser.pause(5000);
	//    	browser.assert.urlEquals(data.tpvUrl);
	//    	browser.waitForElementVisible('.price > div:nth-child(2) > p:nth-child(1)', 10000);
	//    	browser.assert.containsText('.price > div:nth-child(2) > p:nth-child(1)' , '10,00  €');
	//  	browser.end();
	// }	
};