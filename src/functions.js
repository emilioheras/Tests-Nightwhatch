var data = require("./variables");

Utils = function() {
	
	this.buildUrl = function(browser, url) {
		return data.baseUrl + url.replace(/^\//, "").replace(/\/$/, "");
	};

	this.fillLoginform = function(browser, user, pass) {
		browser
			.setValue("#loginFormEmail", user)
			.setValue("#loginFormPassword", pass)
	};

	this.login = function(browser, user, pass) {
		loginUrl = this.buildUrl(browser, "login");
		browser.url(loginUrl);
		this.fillLoginform(browser, user, pass);
		browser.click("body > main > div > div > section:nth-child(2) > div > div > form > fieldset > div.u-pt-md > div > div:nth-child(1) > button");
	}; 

	this.fillDocumentNumberForm = function(browser, dni) {		
		browser.waitForElementVisible('#data_Preference_dni_validate', 10000);
		browser.setValue('#data_Preference_dni_validate', dni);
		browser.click('a.btn:nth-child(2)');
	};

	this.logout = function(browser) {		
 		loginUrl = this.buildUrl(browser, "app/logout");
		browser.url(loginUrl);
	};

	this.enterValidOrInvalidDocumentNumber = function (browser, dni) {
		this.logout(browser);
	 	this.login(browser, 'user+test00@gmail.com' , '123456');
	 	browser.url(this.buildUrl(browser, data.preferentialInscription.eventsPreferentialInscription));
	 	this.fillDocumentNumberForm(browser, dni);
	};

	this.jQueryElementsArePresent = function(browser, selectorsArray) {
		selectorsArray.forEach( function(element, index) {
			browser.assert.jqueryElementPresent(element);
		});

	};

	this.jQueryElementsAreNotPresent = function(browser, selectorsArray) {
		selectorsArray.forEach( function(element, index) {
			browser.assert.jqueryElementNotPresent(element);
		});

	};

	this.checkUserData = function(browser, name, surname, mail, dni, gender, birth_day, birth_month, birth_year, club) {
		browser.assert.value('#data_0_Inscription_name', name);
	 	browser.assert.value('#data_0_Inscription_surname', surname);
	 	browser.assert.value('#data_0_Inscription_mail', mail);
	 	browser.assert.value('#data_0_Inscription_dni', dni);
	 	browser.assert.value('#data_0_Inscription_gender_0', gender);
	 	browser.assert.value('#data_0_Inscription_dateofbirthday_day', birth_day);
	 	browser.assert.value('#data_0_Inscription_dateofbirthday_month', birth_month);
	 	browser.assert.value('#data_0_Inscription_dateofbirthday_year', birth_year);
	 	browser.assert.value('#data_0_Inscription_club2', club);	
	 };
};

module.exports = new Utils;