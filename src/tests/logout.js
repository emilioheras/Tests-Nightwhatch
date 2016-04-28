var data = require("../variables");
var utils = require("../functions");

module.exports = {
	"should be anonymous after logging out" : function (browser) {
		utils.login(browser, 'user+test00@gmail.com' , '123456');
		utils.logout(browser);
		utils.checkAnonymousUser(browser);
	},

	"should send me to the same page if not in any login protected zone" : function (browser) {
	 	utils.login(browser, 'user+test00@gmail.com' , '123456');
	 	browser.url(utils.buildUrl(browser, 'races/sportmaniacs-clasificacion'));
	 	utils.logout(browser);
	 	browser.assert.urlEquals(utils.buildUrl(browser, 'races/sportmaniacs-clasificacion'));
	 },

	"should send me to the login page if in a login protected zone" : function (browser) {
		browser.url(utils.buildUrl(browser, 'my-profile'));
		browser.assert.urlEquals(utils.buildUrl(browser, 'login'));
	},

	"should send me to the home page if I was not logged in" : function (browser) {
		browser.url(utils.buildUrl(browser, 'app/logout'));
		browser.assert.urlEquals(utils.buildUrl(browser, ''));
		browser.end();
	}
};
