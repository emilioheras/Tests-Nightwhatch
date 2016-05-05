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

	this.openLoginPopup = function(browser) {
	browser.click("#topBar > div > nav > ul > li.nav-item.topBar-nav-login.pull-xs-right.text-xs-center > a");
	};

	this.loginOnPage = function(browser, user, pass) {
		this.openLoginPopup(browser);
		this.fillLoginform(browser, user, pass);
		browser.click("#ajax-modal-body > form > fieldset > div.u-pt-md > div > div:nth-child(1) > button");
	};

	this.logoutOnPage = function(browser, user, pass) {
		browser.waitForElementVisible('#userDropdown', 60000) 	
 		browser.click('#userDropdown')
 		browser.waitForElementVisible('#topBar > div > nav > ul > li.dropdown.nav-item.pull-xs-right.text-xs-right.open > div.dropdown-menu.u-r-0.u-l-a > a:nth-child(3)', 60000)
 		browser.click('#topBar > div > nav > ul > li.dropdown.nav-item.pull-xs-right.text-xs-right.open > div.dropdown-menu.u-r-0.u-l-a > a:nth-child(3)')
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

	this.loginInscription = function(browser, user, pass) {
		browser.setValue("#loginFormEmail", user);
		browser.click("body > main > div > div:nth-child(2) > div > form > fieldset.auth-form-email > button");
		browser.pause(10000);
		browser.waitForElementVisible("body > main > div > div:nth-child(2) > div > form > fieldset.auth-form-login.animated.fadeInDown > div.u-pos-r > div > input", 5000);
		browser.setValue("body > main > div > div:nth-child(2) > div > form > fieldset.auth-form-login.animated.fadeInDown > div.u-pos-r > div > input", pass);
		browser.click("body > main > div > div:nth-child(2) > div > form > fieldset.auth-form-login.animated.fadeInDown > div:nth-child(3) > button");
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

	this.fillFormCreateAccountPopup = function(browser, name, surname, email, password) {
		browser.waitForElementVisible('#signupFormName', 20000);
		browser.setValue('#signupFormName', name);
		browser.setValue('#signupFormSurname', surname);
		browser.setValue('#signupFormEmail', email);
		browser.setValue('#signupFormPassword', password);
		browser.click('.asyncForm-submitButton');
		browser.waitForElementVisible('span.nav-item-text:nth-child(2)', 20000);
		browser.pause(2000);
	};

	this.fillFormCreateAccountInInscriptionRace = function(browser, name, surname, password) {
		browser.waitForElementVisible('#authFormName', 20000);
		browser.setValue('#authFormName', name);
		browser.waitForElementVisible('#authFormSurame', 20000);
		browser.setValue('#authFormSurame', surname);
		browser.waitForElementVisible('#authFormPassword', 20000);
		browser.setValue('#authFormPassword', password);
		browser.click('.u-pt-md > button:nth-child(1)');
		browser.waitForElementVisible('span.nav-item-text:nth-child(2)', 20000);
		browser.pause(2000);
	};

	this.fillFormContact = function(browser, name, email, phone, text) {
		browser.waitForElementVisible('#cfName', 20000);
		browser.setValue('#cfName', name);
		browser.setValue('#cfEmail', email);
		browser.setValue('#cfTel', phone);
		browser.waitForElementVisible('#cfMessage', 20000);
		browser.setValue('#cfMessage', text);
		browser.click('#cfSubmitButton');
		browser.waitForElementVisible('.contactForm-response', 20000);		
	};

	this.fillInscriptionFetri = function(browser, doc, day, month, year) {
		browser.waitForElementVisible('body > main > div > div:nth-child(2) > div.col-md-8 > form > nav > a.btn.btn-primary.u-fl-r', 20000);
		browser.setValue("#data_FETRI_dni_validate", doc);
		browser.setValue("#data_FETRI_birth_validate_day", day);
		browser.setValue("#data_FETRI_birth_validate_month", month);
		browser.setValue("#data_FETRI_birth_validate_year", year);		
		browser.click("body > main > div > div:nth-child(2) > div.col-md-8 > form > nav > a.btn.btn-primary.u-fl-r");
	};

	this.fillInscriptionRfea = function(browser, typeDoc, year) {
		browser.waitForElementVisible('body > main > div > div:nth-child(2) > div.col-md-8 > form > nav > a.btn.btn-primary.u-fl-r', 20000);
		browser.setValue("#data_RFEA_license_type_validate", typeDoc);
		browser.setValue("#data_RFEA_birth_validate_year", year);		
	};

	this.enterValidOrInvalidDocumentNumber = function (browser, dni) {
		this.logout(browser);
	 	this.login(browser, 'user+test00@gmail.com' , '123456');
	 	browser.url(this.buildUrl(browser, data.preferentialInscription.eventsPreferentialInscription));
	 	this.fillDocumentNumberForm(browser, dni);
	};

	this.enterValidOrInvalidDocumentNumber = function (browser, typeDoc, year) { //Inscripcion RFEA
		this.logout(browser);
	 	this.login(browser, 'user+test00@gmail.com' , '123456');
	 	browser.url(this.buildUrl(browser, data.rfeaInscription.eventsRfeaInscription));
	 	this.fillInscriptionRfea(browser, typeDoc, year);
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

	this.checkDataDisabled = function(browser) {		
		browser.assert.elementPresent("#data_0_Inscription_name[disabled]");
		browser.assert.elementPresent("#data_0_Inscription_surname[disabled]");
		// browser.assert.elementNotPresent("#data_0_Inscription_mail[disabled]");
		// browser.assert.elementPresent("#data_0_Inscription_dni[readonly]");
		browser.assert.elementPresent("#data_0_Inscription_gender_0[disabled]");
		browser.assert.elementPresent("#data_0_Inscription_dateofbirthday_day[disabled]");
		browser.assert.elementPresent("#data_0_Inscription_dateofbirthday_month[disabled]");
		browser.assert.elementPresent("#data_0_Inscription_dateofbirthday_year[disabled]");
		// browser.assert.elementNotPresent("#data_0_Inscription_phone[disabled]");
		// browser.assert.elementNotPresent("#data_0_Inscription_code[disabled]");
		browser.assert.elementPresent("#data_0_Inscription_club2[readonly]");
	};


	this.fillCheckInscriptionform = function(browser, race, dni, day, month, year) {
		checkInscriptionUrl = this.buildUrl(browser, "check-inscription");
		browser.url(checkInscriptionUrl);
		browser.setValue("#check\\2e race", race);
		browser.setValue("#check\\2e dni", dni);
		browser.setValue("#checkInscriptionFormContent > div.form-group.row > div:nth-child(2) > select", day);
		browser.setValue("#checkInscriptionFormContent > div.form-group.row > div:nth-child(3) > select", month);
		browser.setValue("#checkInscriptionFormContent > div.form-group.row > div:nth-child(4) > select", year);
		browser.click("#checkInscriptionFormContent > div.form-group.u-mt-lg > button");
	};

	this.fillTheRaceInscriptionFormWithMyUserData = function(browser, name, surname, mail, dni, gender, birth_day, birth_month, birth_year) {
		browser.waitForElementVisible('#data_0_Inscription_name', 10000);
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

	this.fillCheckNewUserform = function(browser, name, surName, mail, pass) {
		newUserUrl = this.buildUrl(browser, "login");
		browser.url(newUserUrl);
		browser.setValue("#signupFormName", name);
		browser.setValue("#signupFormSurname", surName);
		browser.setValue("#signupFormEmail", mail);
		browser.setValue("#signupFormPassword", pass);
		browser.click("#signupForm > fieldset > div.u-pt-md > button");
	};

	this.checkLanguage = function(browser, url) {
		browser.url(url);
		browser.click(data.english);
		browser.pause(5000);
		browser.assert.urlContains("en");
		browser.click(data.spanish);
		browser.pause(5000);
		browser.assert.urlContains("es");
		browser.click(data.polski);
		browser.pause(5000);
		browser.assert.urlContains("pl");
		browser.click(data.catalan);
		browser.pause(5000);
		browser.assert.urlContains("ca");
	};

	this.collectingDataProfile = function(browser) {
		name = browser.getValue("#name");
		surName = browser.getValue("#surname")
		day = browser.getValue("body > main > div.container > article > form > div:nth-child(2) > div:nth-child(2) > select")
		month = browser.getValue("body > main > div.container > article > form > div:nth-child(2) > div:nth-child(3) > select")
		year = browser.getValue("body > main > div.container > article > form > div:nth-child(2) > div:nth-child(4) > select")
		documentType = browser.getValue("#documentType")
		doc = browser.getValue("#document");
		origin = browser.getValue("#origin")
		phone = browser.getValue("#phone");
		club = browser.getValue("#club");
		address = browser.getValue("#address");
		postalCode = browser.getValue("#postal_code");
		country = browser.getValue("#country")
	};

	this.checkDataProfile = function(browser, name, surname, day, month, year, documentType, doc, origin, phone, gender, club, address, postalCode, country) {
		browser.assert.value('#name', name);
	 	browser.assert.value('#surname', surname);
	 	browser.assert.value('div.row:nth-child(2) > div:nth-child(2) > select:nth-child(1)', day);
	 	browser.assert.value('div.row:nth-child(2) > div:nth-child(3) > select:nth-child(1)', month);
	 	browser.assert.value('div.form-group:nth-child(4) > select:nth-child(1)', year);
	 	browser.assert.value('#documentType', documentType);
	 	browser.assert.value('#document', doc);
	 	browser.assert.value('#origin', origin);
	 	browser.assert.value('#phone', phone);
	 	browser.assert.value('div.row:nth-child(4) > div:nth-child(3) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)', gender);
	 	browser.assert.value('#club', club);
	 	browser.assert.value('#address', address);
	 	browser.assert.value('#postal_code', postalCode);
	 	browser.assert.value('#country', country);
	 };

	this.randomNumberForTests = function(initial, end) {
		var randNumber = Math.random() * (initial - end) + end;
		return randNumber;
	};
};

module.exports = new Utils;