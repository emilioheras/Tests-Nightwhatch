var data = require("../variables");
var utils = require("../functions");

module.exports = {
	"should warn the user that the inscription is not correct" : function (browser) {
		utils.fillCheckInscriptionform(browser, data.race, "55555555W", "12", "Diciembre", "1990");
		browser.pause(5000);
 		browser.assert.elementPresent("#checkInscriptionFormContent > div.alert.alert-danger.animated.shake");
 		browser.end();	
	},	

//TEST DESHABILITADO PORQUE SE NECESITA UN USUARIO INSCRITO EN UNA CARRERA Y NO ES POSIBLE INSCRIBIRSE SIN PAGAR.
	// "should show the download button with correct data" : function (browser) {
	// 	utils.fillCheckInscriptionform(browser, data.race, "22584205E", "8", "Octubre", "1971");
	// 	browser.pause(5000);
 // 		browser.assert.elementPresent("#checkInscriptionFormContent > div.alert.alert-success.animated.fadeInDown");
	// 	browser.assert.elementPresent("#checkInscriptionFormContent > div.u-ta-c.u-mt-lg > a");
	// 	browser.end();
	// }	
 };