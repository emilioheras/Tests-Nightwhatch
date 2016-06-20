var data = require("../variables");
var utils = require("../functions");

module.exports = {
	// "should go to the login page if not logged in" : function (browser) {
	// 	utils.logout(browser);

	// 	var targetUrl = utils.buildUrl(browser, data.getInscriptionLoginUrl(data.races.normal.race, data.races.normal.event));

	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
	// 	browser.assert.urlEquals(targetUrl);
	// 	browser.end();
	// },

	// "should go straight to the inscription form if logged in" : function (browser) {

	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);

	// 	var targetUrl = utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event));

	// 	browser.url(targetUrl);
	// 	browser.assert.urlEquals(targetUrl);
	// 	browser.end();
	// },
	
	// "the options are not checked by default (Im inscribing myself and Im inscribing another persons)" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		
	// 	var formUrl = utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event));

	// 	browser.url(formUrl);

	// 	browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)', 20000);
	// 	browser.assert.elementNotPresent('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)[checked]');
	// 	browser.assert.elementNotPresent('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)[checked]');
	// 	browser.end();
	// },

	//  "should fill the form with my user data when inscribing myself": function (browser) {
	//  	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);

	// 	var formUrl = utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event));

	// 	browser.url(formUrl);
	// 	browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)', 20000);
	// 	browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
	//  	utils.checkMyUserDataIsSetInTheform(browser, 'user', 'user', data.users.pruebas.userEmail, '22584205E', '0', '8', '10', '1971');	 	
	//  	browser.end();
	// },

	// "the basic fields are ALWAYS shown in the form" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
	// 	browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)', 20000);
	// 	browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
	// 	utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name', '#data_0_Inscription_surname', '#data_0_Inscription_mail', '#data_0_Inscription_dni', '#data_0_Inscription_phone']);
	// 	browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)');
	// 	utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name', '#data_0_Inscription_surname', '#data_0_Inscription_mail', '#data_0_Inscription_dni', '#data_0_Inscription_phone']);
	// 	browser.end();
	// },

	// "my user data fields should be locked when inscribing myself" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
	// 	browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)', 20000);
	// 	browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)');		
	// 	utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name[readonly]', '#data_0_Inscription_surname[readonly]', '#data_0_Inscription_mail[readonly]', '#data_0_Inscription_dni[readonly]', '#data_0_Inscription_phone[readonly]']);
	// 	browser.end();
	// },

 // 	"my user data fields should unlock when inscribing another person" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
	// 	browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)', 20000);
	// 	browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)');
	// 	utils.jQueryElementsAreNotPresent(browser, ['#data_0_Inscription_name[disabled]', '#data_0_Inscription_surname[disabled]', '#data_0_Inscription_mail[disabled]', '#data_0_Inscription_dni[disabled]', '#data_0_Inscription_phone[disabled]', '#data_0_Inscription_code[disabled]']);
	// 	browser.end();
 // 	},

	// "the form should not let me finish a step with errors" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.perfilIncompleto.userEmail , data.users.perfilIncompleto.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
	// 	browser.click("fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
	// 	browser.waitForElementPresent("#data_0_Inscription_dni",20000);
	// 	browser.click('a.btn:nth-child(2)');
	// 	browser.waitForElementVisible('.error-message', 20000);
	//  	browser.end();
	// },

	// "the form should let me finish a step with no errors" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
	// 	browser.click("fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
	// 	utils.fillVerifyEmailAndPhoneEmergencyfIfExist(browser, data.users.pruebas.userEmail, "555555566");
	// 	browser.click('a.btn:nth-child(2)');
	// 	browser.waitForElementVisible('button.btn', 30000);
	//  	browser.end();
	// },

	//  "not filling a mandatory field is considered an error" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.perfilIncompleto.userEmail , data.users.perfilIncompleto.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
	// 	browser.click("fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
	// 	browser.waitForElementVisible('a.btn:nth-child(2)', 20000);
	// 	browser.click('a.btn:nth-child(2)');
	// 	browser.waitForElementVisible('div.form-group:nth-child(7) > div:nth-child(2)', 20000);
	// 	browser.waitForElementVisible('div.form-group:nth-child(8) > div:nth-child(2)', 20000);
	// 	browser.waitForElementVisible('div.form-group:nth-child(9) > div:nth-child(2)', 20000);
	// 	browser.waitForElementVisible('div.tel:nth-child(2) > div:nth-child(2)', 20000);
	// 	browser.end();
	// },

	// "should show field error messages when validation fails" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.perfilIncompleto.userEmail , data.users.perfilIncompleto.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
	// 	browser.click("fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
	// 	browser.waitForElementVisible('a.btn:nth-child(2)', 20000);
	// 	browser.click('a.btn:nth-child(2)');
	// 	browser.waitForElementVisible('div.form-group:nth-child(7) > div:nth-child(2)', 20000);
	// 	browser.waitForElementVisible('div.form-group:nth-child(8) > div:nth-child(2)', 20000);
	// 	browser.waitForElementVisible('div.form-group:nth-child(9) > div:nth-child(2)', 20000);
	// 	browser.waitForElementVisible('div.tel:nth-child(2) > div:nth-child(2)', 20000);				
	// 	browser.end();
	// },

	"the form should let me finish if the date of birth is ok" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
		browser.click("fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)");
		utils.fillDataFormInscription(browser, "Jorge", "López", "jorLo@gmail.com", "22584205E", "555556677", "18", "junio", "1998", "España");
		// browser.waitForElementVisible("button.btn", 20000);
		// browser.end();
	},

	// "the form should not let me finish if the date of birth is wrong" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	// 	browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
	// 	browser.click("fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)");
	// 	utils.fillDataFormInscription(browser, "Jorge", "López", "jorLo@gmail.com", "22584205E", "555556677", "02", "marzo", "2012", "España");
	// 	browser.waitForElementVisible(".error-message", 20000);
	// 	browser.end();
	// }
};