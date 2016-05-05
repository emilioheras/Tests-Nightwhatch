var data = require("../variables");
var utils = require("../functions");

var number = Math.random() * 100 + 1;

module.exports = {
	"should fail at login with bad password" : function (browser) {
  		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '555555');
		browser.waitForElementVisible('.alert', 20000);
		browser.end();
  	},

	"should login succesfully" : function (browser) {
  		utils.logout(browser);
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		browser.waitForElementVisible('section.u-mb-xl:nth-child(1) > h2:nth-child(1)', 20000);
		browser.assert.urlEquals(data.baseUrl);
		browser.end();
  	},

	"should say the user has an email" : function (browser) {
  		utils.logout(browser);
		browser.url(utils.buildUrl(browser, 'login'));
		browser.waitForElementVisible('.type-link-secondary', 20000);
		browser.click('.type-link-secondary');
		browser.waitForElementVisible('.auth-form-login > form:nth-child(3) > div:nth-child(1) > input:nth-child(1)', 20000);
		browser.setValue('.auth-form-login > form:nth-child(3) > div:nth-child(1) > input:nth-child(1)', 'user+test00@gmail.com');
		browser.click('.u-mt-lg > button:nth-child(1)');
		browser.waitForElementVisible('.alert', 20000);
		browser.assert.cssClassPresent('.alert', 'alert-success');
		browser.end();
  	},

	"should create an account" : function (browser) {
  		utils.logout(browser);
  		utils.openLoginPopup(browser);
  		browser.waitForElementVisible('.type-link', 20000);
  		browser.click('.type-link');
  		utils.fillFormCreateAccountPopup(browser, 'New UserName', 'New UserSurname', 'user+' + number + '@gmail.com', '123456');
  		browser.assert.containsText('span.nav-item-text:nth-child(2)', 'NEW USERNAME');
		browser.end();
  	}  	
};