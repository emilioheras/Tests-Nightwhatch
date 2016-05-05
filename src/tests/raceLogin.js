var data = require("../variables");
var utils = require("../functions");

var number = Math.random() * 100 + 1;

module.exports = {
	"should fail at login with bad password" : function (browser) {
		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventLogin));
		browser.waitForElementVisible('#loginFormEmail', 20000);
		browser.setValue('#loginFormEmail', 'user+test00@gmail.com');
		browser.click('button.btn:nth-child(2)');
		browser.waitForElementVisible('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', 20000);
		browser.setValue('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', '555555');
		browser.click('.u-mb-md');
		browser.waitForElementVisible('.alert', 20000);
		browser.assert.cssClassPresent('.alert', 'alert-danger');
	 	browser.end();
  	},

  "should login succesfully" : function (browser) {
  		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventForm));
		browser.waitForElementVisible('#loginFormEmail', 20000);
		browser.setValue('#loginFormEmail', 'user+test00@gmail.com');
		browser.click('button.btn:nth-child(2)');
		browser.waitForElementVisible('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', 20000);
		browser.setValue('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', '123456');
		browser.click('.u-mb-md');
		browser.waitForElementVisible('a.btn:nth-child(2)', 20000);
		browser.end();
  	},
	
  "should say the user has an email" : function (browser) {
		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventLogin));
		browser.waitForElementVisible('#loginFormEmail', 20000);
		browser.setValue('#loginFormEmail', 'user+test00@gmail.com');
		browser.click('button.btn:nth-child(2)');
		browser.waitForElementVisible('.type-link-secondary', 20000);
		browser.click('.type-link-secondary');
		browser.waitForElementVisible('.alert', 20000);
		browser.assert.cssClassPresent('.alert', 'alert-success');
	 	browser.end();
  },

   "should create an account" : function (browser) {
		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.inscriptionTest.eventLogin));
		browser.waitForElementVisible('#loginFormEmail', 20000);
		browser.setValue('#loginFormEmail', 'user+' + number + '@gmail.com');
		browser.click('button.btn:nth-child(2)');
		utils.fillFormCreateAccountInInscriptionRace(browser, 'New UserName', 'New UserSurname', '123456');
  		browser.assert.containsText('span.nav-item-text:nth-child(2)', 'NEW USERNAME');
		browser.end();
	}
};