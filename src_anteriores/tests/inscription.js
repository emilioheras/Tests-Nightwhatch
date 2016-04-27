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

	"my user data fields should be locked when inscribing myself" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		utils.jQueryElementsArePresent(browser, ['#data_0_Inscription_name[disabled]', '#data_0_Inscription_surname[disabled]', '#data_0_Inscription_mail[disabled]', '#data_0_Inscription_dni[disabled]', '#data_0_Inscription_phone[disabled]', '#data_0_Inscription_code[disabled]']);
		browser.end();
	},

 	"my user data fields should unlock when inscribing another person" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventsList));
		browser.waitForElementVisible('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(1)', 10000);
		browser.click('fieldset.form-step:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(1)');
		utils.jQueryElementsAreNotPresent(browser, ['#data_0_Inscription_name[disabled]', '#data_0_Inscription_surname[disabled]', '#data_0_Inscription_mail[disabled]', '#data_0_Inscription_dni[disabled]', '#data_0_Inscription_phone[disabled]', '#data_0_Inscription_code[disabled]']);
		browser.end();
 	},

	// 	browser.assert.urlEquals(utils.buildUrl(browser, data.inscriptionTest.eventsList));

	// 	browser.assert.containsText('#data_0_Inscription_dateofbirthday_day', lastDay);

	// 	browser.assert.containsText('#data_0_Inscription_dateofbirthday_year', lastYear);

	// 	browser.assert.value('span.twitter-typeahead:nth-child(2) > input:nth-child(2)', 'SIN CLUB');
	// },
	
	// "the form should not let me finish a step with errors" : function (browser) {

	// },
	// "the form should let me finish a step with no errors" : function (browser) {

	// },

	// "not filling a mandatory field is considered an error" : function (browser) {},

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
	}
	// "dependent fields are shown when the criteria is met" : function (browser) {},


	// "should show user information" : function (browser) {
	// browser

	// },

	// "should show the required form fields" : function (browser) {
	// browser
	// .waitForElementVisible('/html/body/main/div/div[2]/div[1]/form/nav/a[2]', 10000)
	// .click('/html/body/main/div/div[2]/div[1]/form/nav/a[2]')
	// .waitForElementVisible('//*[@id="custom-content"]/fieldset/div[3]/div[5]/div[2]', 4000)
	// .waitForElementVisible('//*[@id="custom-content"]/fieldset/div[4]/div[1]/div[2]', 4000)
	// .waitForElementVisible('//*[@id="custom-content"]/fieldset/div[4]/div[2]/div[2]', 4000)
	// .setValue('//*[@id="data_0_Inscription_dni"]', '22584205E')
	// .executeAsync(function(data, done) {$("#data_0_Inscription_gender_1").prop("checked", true);})
	// .setValue('//*[@id="data_0_Inscription_phone"]', '555555555')
	// .setValue('//*[@id="data_0_Inscription_code"]', '46999')
	// .setValue('//*[@id="data_0_Inscription_club"]', 'CD TRIATLON GRANADA')
	// .click('/html/body/main/div/div[2]/div[1]/form/nav/a[2]')

	// .click('/html/body/main/div/div[2]/div/form/fieldset[1]/button')
	// .pause(3000)
	// .waitForElementVisible('//*[@id="authFormName"]', 5000)
	// .setValue('//*[@id="authFormName"]', 'user')
	// .setValue('//*[@id="authFormSurame"]', 'user')
	// .setValue('//*[@id="authFormPassword"]', '123456')
	// .click('/html/body/main/div/div[2]/div/form/fieldset[3]/div[5]/button')	
	// .pause(3000)	
	// .waitForElementVisible('//*[@id="userDropdown"]/span[2]', 10000)
	// .assert.containsText('//*[@id="userDropdown"]/span[2]', 'USER')
	// }

	// "should allow enroll myself" : function (browser) {
	// browser
	// // .setValue('//*[@id="loginFormEmail"]', 'user+test' + number + '@gmail.com')
	// // .click('/html/body/main/div/div[2]/div/form/fieldset[1]/button')
	// // .pause(3000)
	// // .waitForElementVisible('//*[@id="authFormName"]', 5000)
	// // .setValue('//*[@id="authFormName"]', 'user')
	// // .setValue('//*[@id="authFormSurame"]', 'user')
	// // .setValue('//*[@id="authFormPassword"]', '123456')
	// // .click('/html/body/main/div/div[2]/div/form/fieldset[3]/div[5]/button')	
	// // .pause(3000)	
	// // .waitForElementVisible('//*[@id="userDropdown"]/span[2]', 10000)
	// // .assert.containsText('//*[@id="userDropdown"]/span[2]', 'USER')
	// }
};