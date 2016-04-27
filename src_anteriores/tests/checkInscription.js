var data = require("../variables");
var utils = require("../functions");

module.exports = {
	"should warn the user that the inscription is not correct" : function (browser) {
		utils.fillCheckInscriptionform(browser, data.race, "55555555W", "12", "Diciembre", "1990");
		browser.pause(5000);
 		browser.assert.elementPresent("#checkInscriptionFormContent > div.alert.alert-danger.animated.shake");	
	},	

	"should show the download button with correct data" : function (browser) {
		utils.fillCheckInscriptionform(browser, data.race, "33566340W", "21", "Abril", "1987");
		browser.pause(5000);
 		browser.assert.elementPresent("#checkInscriptionFormContent > div.alert.alert-success.animated.fadeInDown");
		browser.assert.elementPresent("#checkInscriptionFormContent > div.u-ta-c.u-mt-lg > a");
		browser.end();
	}	
 };