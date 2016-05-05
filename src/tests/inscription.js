var data = require("../variables");
var utils = require("../functions");

module.exports = {
	"should go to the login page if not logged in" : function (browser) {
		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.assert.urlEquals(utils.buildUrl(browser, data.inscriptionTest.eventLogin));
		browser.end();
	},

	"should go straight to the inscription form if logged in" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.assert.urlEquals(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.end();
	},

	"the 'Im inscribing myself' option is checked by default" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.waitForElementVisible('#custom-content > fieldset > div.col-xs-12.u-mb-lg > div > div > div:nth-child(1) > label > input', 10000);
		browser.assert.elementPresent('#custom-content > fieldset > div.col-xs-12.u-mb-lg > div > div > div:nth-child(1) > label > input[checked]');
		browser.end();
	},

	 "should fill the form with my user data when inscribing myself": function (browser) {
	 	utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
	 	utils.fillTheRaceInscriptionFormWithMyUserData(browser, 'user', 'user', 'user+test00@gmail.com', '22584205E', '0', '8', '10', '1971');
	 	browser.end();
	},

	"the basic fields are ALWAYS shown in the form" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(1)', 10000);
		browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(1)');
		utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name', '#data_0_Inscription_surname', '#data_0_Inscription_mail', '#data_0_Inscription_dni', '#data_0_Inscription_phone', '#data_0_Inscription_code']);
		browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)');
		utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name', '#data_0_Inscription_surname', '#data_0_Inscription_mail', '#data_0_Inscription_dni', '#data_0_Inscription_phone', '#data_0_Inscription_code']);
		browser.end();
	},

	"my user data fields should be locked when inscribing myself" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.waitForElementVisible('#data_0_Inscription_code', 20000);
		utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name[disabled]', '#data_0_Inscription_surname[disabled]', '#data_0_Inscription_mail[disabled]', '#data_0_Inscription_dni[disabled]', '#data_0_Inscription_phone[disabled]', '#data_0_Inscription_code[disabled]']);
		browser.end();
	},

 	"my user data fields should unlock when inscribing another person" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)', 10000);
		browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)');
		utils.jQueryElementsAreNotPresent(browser, ['#data_0_Inscription_name[disabled]', '#data_0_Inscription_surname[disabled]', '#data_0_Inscription_mail[disabled]', '#data_0_Inscription_dni[disabled]', '#data_0_Inscription_phone[disabled]', '#data_0_Inscription_code[disabled]']);
		browser.end();
 	},

	"the form should not let me finish a step with errors" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)', 10000);
		browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)');
		browser.clearValue('#data_0_Inscription_dni');
		browser.click('a.btn:nth-child(2)');
		browser.waitForElementVisible('.error-message', 20000);
	 	browser.end();
	},

	// "the form should let me finish a step with no errors" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, 'user+test00@gmail.com' , '123456');
	// 	browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
	// 	browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)', 10000);
	// 	browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)');
	// 	browser.click('a.btn:nth-child(2)');
	// 	browser.waitForElementVisible('button.btn', 30000);
	//  	browser.end();
	// },

	 "not filling a mandatory field is considered an error" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'userb+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.waitForElementVisible('a.btn:nth-child(2)', 20000);
		browser.click('a.btn:nth-child(2)');
		browser.waitForElementVisible('div.form-group:nth-child(6) > div:nth-child(2)', 20000);
		browser.end();
	},

	// "(Supersprint inscription) dependent fields are shown when the criteria is met" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, 'userb+test00@gmail.com' , '123456');
	// 	browser.url(utils.buildUrl(browser, data.supersprintInscription.eventsSupersprintInscription));
	// 	browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)', 20000);
	// 	browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)');
	// 	browser.waitForElementVisible('#data_0_Inscription_dateofbirthday_year', 20000);
	// 	browser.setValue('#data_0_Inscription_dateofbirthday_year', "1999");
	// 	browser.waitForElementVisible('#data_0_Inscription_auth', 20000);
	// 	browser.end();
	// },


	"should show field error messages when validation fails" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'userb+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.waitForElementVisible('a.btn:nth-child(2)', 20000);
		browser.click('a.btn:nth-child(2)');
		browser.waitForElementVisible('div.form-group:nth-child(6) > div:nth-child(2)', 20000);
		browser.waitForElementVisible('div.tel > div:nth-child(2)', 20000);
		browser.waitForElementVisible('div.col-sm-4:nth-child(3) > div:nth-child(2)', 20000);
		browser.end();
	},
};