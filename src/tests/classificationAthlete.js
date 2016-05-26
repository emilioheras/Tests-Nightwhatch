var data = require("../variables");
var utils = require("../functions");

module.exports = {
	"Certificate should be donwloadable" : function (browser) {
		browser.url(utils.buildUrl(browser, data.getAthleteClassificationResultsUrl(data.races.classification.race, data.races.classification.event )));
		browser.click('.nav-tabs > li:nth-child(2) > a:nth-child(1)');
		browser.waitForElementVisible('.btn-primary', 20000);
		browser.waitForElementVisible('#diploma', 20000);
		browser.end();
	},

	"Should be able to confirm I am an athlete if I'm logged in" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		browser.url(utils.buildUrl(browser, data.getAthleteClassificationResultsUrl(data.races.classification.race, data.races.classification.event )));
		browser.click('.btn');
  		browser.waitForElementPresent('.u-mt-xl > h2:nth-child(1)', 20000);
		browser.assert.containsText('.u-mt-xl > h2:nth-child(1)', 'Tu solicitud se ha enviado con éxito');
		browser.end();
	},

	"should not confirm that I am the athlete with incomplete data profile" : function (browser) {
		utils.logout(browser);
		utils.openLoginPopup(browser);
  		browser.waitForElementVisible('.type-link', 20000);
  		browser.click('.type-link');
		utils.fillFormCreateAccountPopup(browser, 'New UserName', 'New UserSurname', 'user' + Math.random() * 100 + 1 + '@gmail.com', '123456', '123456');
		browser.url(utils.buildUrl(browser, data.getAthleteClassificationResultsUrl(data.races.classification.race, data.races.classification.event )));
		browser.click('.btn');
		browser.assert.containsText('.u-mt-xl > h2:nth-child(1)', 'No hemos podido procesar tu solicitud');		
	},

	"should confirm that I am the athlete with complete data profile" : function (browser) {
		browser.setValue('div.row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > select:nth-child(1)', '12');
		browser.setValue('div.row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > select:nth-child(1)', 'Julio');
		browser.setValue('div.row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > select:nth-child(1)', '2007');
		browser.setValue('#document', '22584205E');
		browser.setValue('#phone', '555555555');
		browser.setValue('#postal_code', '46700');
		browser.click('button.btn');		
  		browser.waitForElementNotPresent('button.btn', 20000);
		browser.assert.containsText('.u-mt-xl > h2:nth-child(1)', 'Tu solicitud se ha enviado con éxito');
		browser.end();
	}
};