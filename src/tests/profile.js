var data = require("../variables");
var utils = require("../functions");

module.exports = {
	"redirect you to your user profile logged clicking the button" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		browser.waitForElementVisible('#userDropdown', 20000);	
 		browser.click('#userDropdown');
 		browser.waitForElementVisible('a.dropdown-item:nth-child(1)', 20000);
 		browser.click('a.dropdown-item:nth-child(1)');
 		browser.assert.urlEquals(utils.buildUrl(browser, data.others.datosPerfil.fotos));
 		browser.end();
 	},

	"should show user information" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);		
 		browser.url(utils.buildUrl(browser, data.others.datosPerfil.datosEditables));
 		browser.waitForElementVisible('.sideNav > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)', 20000);
 		browser.click('.sideNav > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)');
 		browser.assert.urlEquals(utils.buildUrl(browser, data.others.datosPerfil.datosEditables));
 		utils.checkUserDataProfile(browser, 'user', 'user', '08', '10', '1971', '0', '22584205E', 'ESP', '555 55 55 55', '0', 'SIN CLUB', 'Calle Test', '46700');
 		browser.end();
 	},

 	"should show user race results" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.conCarreras.userEmail , data.users.conCarreras.password);
		browser.waitForElementVisible('#userDropdown', 20000);	
 		browser.click('#userDropdown');
 		browser.url(utils.buildUrl(browser, data.others.datosPerfil.carreras));
 		browser.waitForElementVisible('article.card:nth-child(1)', 20000);
 		browser.waitForElementVisible('article.card:nth-child(2)', 20000);
 		browser.waitForElementVisible('article.card:nth-child(3)', 20000);
 		browser.end();
 	},

 	 "should show the proper message when the user has no results" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		browser.waitForElementVisible('#userDropdown', 20000);	
 		browser.click('#userDropdown');
 		browser.waitForElementVisible('a.dropdown-item:nth-child(1)', 20000);
 		browser.click('a.dropdown-item:nth-child(1)');
 		browser.waitForElementVisible('.sideNav > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)', 20000);
 		browser.click('.sideNav > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)');
 		browser.assert.urlEquals(utils.buildUrl(browser, data.others.datosPerfil.carreras));
 		browser.waitForElementVisible('.type-subheadline', 20000);
 		browser.assert.containsText('.type-subheadline', 'No hemos encontrado ninguna clasificación');
 		browser.end();
 	},

 	 "should show the proper message when the user has no photos" : function (browser) {
		utils.logout(browser);
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		browser.waitForElementVisible('#userDropdown', 20000);	
 		browser.click('#userDropdown');
 		browser.waitForElementVisible('a.dropdown-item:nth-child(1)', 20000);
 		browser.click('a.dropdown-item:nth-child(1)');
 		browser.assert.urlEquals(utils.buildUrl(browser, data.others.datosPerfil.fotos));
 		browser.waitForElementVisible('.type-subheadline', 20000);
 		browser.assert.containsText('.type-subheadline', 'No has comprado ninguna foto');
 		browser.end();
 	},

 	"should show user bought photos" : function (browser) {
 		utils.logout(browser);
		utils.login(browser, data.users.conFotos.userEmail , data.users.conFotos.password);
		browser.url(utils.buildUrl(browser, data.others.datosPerfil.fotos));
		browser.waitForElementVisible('article.layout-main-content > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)', 20000);
		browser.waitForElementVisible('article.layout-main-content > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)', 20000);
		browser.waitForElementVisible('article.layout-main-content > section:nth-child(4) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)', 20000);
		browser.waitForElementVisible('article.layout-main-content > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)', 20000);
 		browser.end();
  	},

 	"Should require login and redirect back when logging in" : function (browser) {
 		utils.logout(browser);
 		browser.url(utils.buildUrl(browser, data.others.datosPerfil.perfil));
 		browser.assert.urlEquals(utils.buildUrl(browser, data.others.login));
		utils.login(browser, data.users.pruebas.userEmail , data.users.pruebas.password);
		browser.waitForElementVisible('.sideNav > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)', 20000);
 		browser.assert.urlEquals(utils.buildUrl(browser, data.others.datosPerfil.fotos));
 		browser.end();
  	},

	"should save the modifications" : function (browser) {
		var phone = data.randomPhone;
		var address = 'calle ModificationTest' + utils.randomNumberForTests(1, 9).toFixed(5);
		var postalCode = data.randomPostalCode;
		utils.logout(browser);
		utils.login(browser, data.users.modificable.userEmail , data.users.modificable.password);
		browser.url(utils.buildUrl(browser, data.others.datosPerfil.datosEditables));
		browser.waitForElementVisible('.btn', 20000);
		utils.changeUserData(browser, phone, address, postalCode);
		utils.checkNewUserData(browser, phone.toString(), address.toString(), postalCode.toString());
 		browser.end();
 	}
};