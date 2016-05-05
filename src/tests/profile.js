var data = require("../variables");
var utils = require("../functions");

module.exports = {
	// "redirect you to your user profile logged clicking the button" : function (browser) {
		// utils.logout(browser);
		// utils.login(browser, 'user+test00@gmail.com' , '123456');
		// browser.waitForElementVisible('#userDropdown', 20000);	
 	// 	browser.click('#userDropdown');
 	// 	browser.waitForElementVisible('a.dropdown-item:nth-child(1)', 20000);
 	// 	browser.click('a.dropdown-item:nth-child(1)');
 	// 	browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/photos'));
 	// 	browser.end();
 	// },

	"should show user information" : function (browser) {
		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		// browser.waitForElementVisible('#userDropdown', 20000);	
 	// 	browser.click('#userDropdown');
 	// 	browser.waitForElementVisible('a.dropdown-item:nth-child(1)', 20000);
 	// 	browser.click('a.dropdown-item:nth-child(1)');
 		browser.url(utils.buildUrl(browser, '/my-profile/edit'));
 		// browser.waitForElementVisible('.sideNav > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)', 20000);
 		// browser.click('.sideNav > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)');
 		browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/edit'));
 		browser.end();
 	},

 	// "should show user race results" : function (browser) {
		// utils.logout(browser);
		// utils.login(browser, 'user+test00@gmail.com' , '123456');
		// browser.waitForElementVisible('#userDropdown', 20000);	
 	// 	browser.click('#userDropdown');
 	// 	browser.waitForElementVisible('a.dropdown-item:nth-child(1)', 20000);
 	// 	browser.click('a.dropdown-item:nth-child(1)');
 	// 	browser.waitForElementVisible('.sideNav > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)', 20000);
 	// 	browser.click('.sideNav > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)');
 	// 	browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/results'));
 	// 	browser.end();
 	// },

 	//  "should show the proper message when the user has no results" : function (browser) {
		// utils.logout(browser);
		// utils.login(browser, 'user+test00@gmail.com' , '123456');
		// browser.waitForElementVisible('#userDropdown', 20000);	
 	// 	browser.click('#userDropdown');
 	// 	browser.waitForElementVisible('a.dropdown-item:nth-child(1)', 20000);
 	// 	browser.click('a.dropdown-item:nth-child(1)');
 	// 	browser.waitForElementVisible('.sideNav > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)', 20000);
 	// 	browser.click('.sideNav > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)');
 	// 	browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/results'));
 	// 	browser.waitForElementVisible('.type-subheadline', 20000);
 	// 	browser.assert.containsText('.type-subheadline', 'No hemos encontrado ninguna clasificación');
 	// 	browser.end();
 	// },

 	//  "should show the proper message when the user has no photos" : function (browser) {
		// utils.logout(browser);
		// utils.login(browser, 'user+test00@gmail.com' , '123456');
		// browser.waitForElementVisible('#userDropdown', 20000);	
 	// 	browser.click('#userDropdown');
 	// 	browser.waitForElementVisible('a.dropdown-item:nth-child(1)', 20000);
 	// 	browser.click('a.dropdown-item:nth-child(1)');
 	// 	browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/photos'));
 	// 	browser.waitForElementVisible('.type-subheadline', 20000);
 	// 	browser.assert.containsText('.type-subheadline', 'No has comprado ninguna foto');
 	// 	browser.end();
 	// },

 //NO SE PUEDE TERMINAR HASTA QUE LA INFO DE PERFIL NO ESTÉ DISPONIBLE
	// "should save the modifications" : function (browser) {
	// 	utils.logout(browser);
	// 	utils.login(browser, 'pepitoGrillo@myMail.com' , '123456');		
	// 	browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/edit'));

 // 		browser.setValue('#phone', data.randomPhone);
 // 		browser.setValue('#address', 'calle ModificationTest' + utils.randomNumberForTests(1, 9).toFixed(5));
 // 		browser.setValue('#postal_code', data.randomPostalCode);
 // 		browser.keys('\uE006');
 // 		browser.waitForElementVisible('.profileForm-response', 20000);
 // 		browser.assert.cssClassPresent('.profileForm-response', 'alert-success');


 
 // 		browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/edit'));
 // 		browser.end();
 // 	}
};