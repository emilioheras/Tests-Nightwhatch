var data = require("../variables");
var utils = require("../functions");

module.exports = {
	"should be anonymous after logging out" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		utils.logout(browser);
		utils.checkAnonymousUser(browser);
		browser.end();
	},

	"should send me to the same page if not in any login protected zone" : function (browser) {
		utils.logout(browser);
	 	utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
	 	browser.url(utils.buildUrl(browser, data.others.clasificaciones));
	 	utils.logoutOnPage(browser);
	 	browser.assert.urlEquals(utils.buildUrl(browser, data.others.clasificaciones));
	 	browser.end();
	 },

	"should send me to the login page if in a login protected zone" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		browser.url(utils.buildUrl(browser, data.others.datosPerfil.perfil));
	 	utils.logoutOnPage(browser);
		browser.assert.urlEquals(utils.buildUrl(browser, data.others.login));
		browser.end();
	},

	"should send me to the home page if I was not logged in" : function (browser) {
		browser.url(utils.buildUrl(browser, data.others.logout));
		browser.assert.urlEquals(data.baseUrl);
		browser.end();
	}
};
