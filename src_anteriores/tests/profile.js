var data = require("../variables");
var utils = require("../functions");

module.exports = {
	"redirect you to your user profile logged clicking the button" : function (browser) {
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.waitForElementVisible('#userDropdown', 60000);	
 		browser.click('#userDropdown');
 		browser.waitForElementVisible('a.dropdown-item:nth-child(1)', 60000);
 		browser.click('a.dropdown-item:nth-child(1)');
 		browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/photos'));
 	},

 //NO ESTÁ TERMINADO
	"should save the modifications" : function (browser) {
		browser.click('.sideNav > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)');
		browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/edit'));

 		browser.setValue('#name', 'Josemi' + utils.randomNumberForTests(1, 9).toFixed(5));
 		browser.setValue('#phone', data.randomPhone);
 		browser.setValue('#document', data.randomDni);
 		browser.setValue('#club', 'ClubTest' + utils.randomNumberForTests(1, 9).toFixed(5));
 		browser.setValue('#address', 'calle ModificationTest' + utils.randomNumberForTests(1, 9).toFixed(5));
 		browser.setValue('#postal_code', data.randomPostalCode);
 		browser.keys('\uE006'); 
 		browser.assert.urlEquals(utils.buildUrl(browser, 'my-profile/edit'));
 		// browser.end();
 	}
};