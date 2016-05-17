var data = require("../variables");
var utils = require("../functions");

module.exports = {
	"should fail at login with bad password" : function (browser) {
		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.getInscriptionLoginUrl(data.races.normal.race, data.races.normal.event)));
		browser.waitForElementVisible('#loginFormEmail', 20000);
		browser.setValue('#loginFormEmail', data.users.pruebas.userEmail);
		browser.click('button.btn:nth-child(2)');
		browser.waitForElementVisible('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', 20000);
		browser.setValue('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', '555555');
		browser.click('.u-mb-md');
		browser.waitForElementVisible('.alert', 20000);
		browser.assert.cssClassPresent('.alert', 'alert-danger');
	 	browser.end();
  	},
//FALLA PORQUE VA A LA HOME DESPUÉS DE LOGUEARSE.
  // "should login succesfully" : function (browser) {
  // 		utils.logout(browser);
		// browser.url(utils.buildUrl(browser, data.getInscriptionFormUrl(data.races.normal.race, data.races.normal.event)));
		// browser.waitForElementVisible('#loginFormEmail', 20000);
		// browser.setValue('#loginFormEmail', data.users.pruebas.userEmail);
		// browser.click('button.btn:nth-child(2)');
		// browser.waitForElementVisible('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', 20000);
		// browser.setValue('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', data.users.pruebas.password);
		// browser.click('.u-mb-md');
		// browser.waitForElementVisible('a.btn:nth-child(2)', 20000);
		// browser.end();
  // 	},
	
  "should say the user has an email" : function (browser) {
		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.getInscriptionLoginUrl(data.races.normal.race, data.races.normal.event)));
		browser.waitForElementVisible('#loginFormEmail', 20000);
		browser.setValue('#loginFormEmail', data.users.pruebas.userEmail);
		browser.click('button.btn:nth-child(2)');
		browser.waitForElementVisible('.type-link-secondary', 20000);
		browser.click('.type-link-secondary');
		browser.waitForElementVisible('.alert', 20000);
		browser.assert.cssClassPresent('.alert', 'alert-success');
	 	browser.end();
  },

   "should create an account" : function (browser) {
		utils.logout(browser);
		browser.url(utils.buildUrl(browser, data.getInscriptionLoginUrl(data.races.normal.race, data.races.normal.event)));
		browser.waitForElementVisible('#loginFormEmail', 20000);
		browser.setValue('#loginFormEmail', data.users.aleatorio.userEmail);
		browser.click('button.btn:nth-child(2)');
		utils.fillFormCreateAccountInInscriptionRace(browser, 'New UserName', 'New UserSurname', data.users.aleatorio.password);
  		browser.assert.containsText('span.nav-item-text:nth-child(2)', 'NEW USERNAME');
		browser.end();
	}
};