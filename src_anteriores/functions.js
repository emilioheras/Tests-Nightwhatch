var data = require("./variables");

Utils = function() {
	
	this.buildUrl = function(browser, url) {
		return data.baseUrl + url.replace(/^\//, "").replace(/\/$/, "");
	};

	this.login = function(browser, user, pass) {
		loginUrl = this.buildUrl(browser, "login");
		browser.url(loginUrl);
		this.fillLoginform(browser, user, pass);
		browser.click("body > main > div > div > section:nth-child(2) > div > div > form > fieldset > div.u-pt-md > div > div:nth-child(1) > button");
	};

	this.loginOnPage = function(browser, user, pass) {
		this.openLoginPopup(browser);
		this.fillLoginform(browser, user, pass);
		browser.click("#ajax-modal-body > form > fieldset > div.u-pt-md > div > div:nth-child(1) > button");
	};

	this.openLoginPopup = function(browser) {
		browser.click("#topBar > div > nav > ul > li.nav-item.topBar-nav-login.pull-xs-right.text-xs-center > a");
	}; 

	this.fillLoginform = function(browser, user, pass) {
		browser
			.setValue("#loginFormEmail", user)
			.setValue("#loginFormPassword", pass)
	};

	this.logout = function(browser) {		
		// browser.waitForElementVisible('#userDropdown', 60000) 	
 	// 	browser.click('#userDropdown')
 	// 	browser.waitForElementVisible('#topBar > div > nav > ul > li.dropdown.nav-item.pull-xs-right.text-xs-right.open > div.dropdown-menu.u-r-0.u-l-a > a:nth-child(3)', 60000)
 	// 	browser.click('#topBar > div > nav > ul > li.dropdown.nav-item.pull-xs-right.text-xs-right.open > div.dropdown-menu.u-r-0.u-l-a > a:nth-child(3)')
 		loginUrl = this.buildUrl(browser, "app/logout");
		browser.url(loginUrl);
	};

	this.checkAnonymousUser = function(browser) {
		browser.pause(8000)
      	browser.assert.elementNotPresent('#userDropdown', 'Anonymous User')
	};

	this.fillInscriptionform = function(browser, user, pass) {
		browser
			.setValue("#loginFormEmail", user)
			.setValue("#loginFormPassword", pass)
	};

	this.randomNumberForTests = function(initial, end) {
		var randNumber = Math.random() * (initial - end) + end;
		return randNumber;
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

	this.fillCheckInscriptionform = function(browser, race, dni, day, month, year) {
		checkInscriptionUrl = this.buildUrl(browser, "check-inscription");
		browser.url(checkInscriptionUrl);
		browser.setValue("#check\\2e race", race);
		browser.setValue("#check\\2e dni", dni);
		browser.setValue("#checkInscriptionFormContent > div.form-group.row > div:nth-child(2) > select", day);
		browser.setValue("#checkInscriptionFormContent > div.form-group.row > div:nth-child(3) > select", month);
		browser.setValue("#checkInscriptionFormContent > div.form-group.row > div:nth-child(4) > select", year);
		browser.submitForm('#checkInscriptionForm > form:nth-child(1)');		
	};

	this.fillTheRaceInscriptionFormWithMyUserData = function(browser, name, surname, mail, dni, gender, birth_day, birth_month, birth_year) {
		browser.assert.value('#data_0_Inscription_name', name);
	 	browser.assert.value('#data_0_Inscription_surname', surname);
	 	browser.assert.value('#data_0_Inscription_mail', mail);
	 	browser.assert.value('#data_0_Inscription_dni', dni);
	 	browser.assert.value('#data_0_Inscription_gender_0', gender);
	 	browser.assert.value('#data_0_Inscription_dateofbirthday_day', birth_day);
	 	browser.assert.value('#data_0_Inscription_dateofbirthday_month', birth_month);
	 	browser.assert.value('#data_0_Inscription_dateofbirthday_year', birth_year);
	};

	this.rememberPass = function(browser, user) {
		rememberPassUrl = this.buildUrl(browser, "services/forgot-password");
		browser.url(rememberPassUrl);
		browser.pause(5000);
		browser.setValue("body > main > div > section > div > div > form > div:nth-child(1) > input", user);
		browser.click("body > main > div > section > div > div > form > div.form-group.u-mt-lg > button");		
	};
};

module.exports = new Utils;