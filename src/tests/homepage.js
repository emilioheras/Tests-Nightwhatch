var data = require("../variables");
var utils = require("../functions");

module.exports = {
 "should send a contact form email " : function (browser) {
 	utils.logout(browser); 
	browser.url(data.baseUrl);
	browser.waitForElementVisible(data.contactForm, 20000);
	browser.click(data.contactForm);
	browser.waitForElementVisible('#ajax-modal > div > div', 20000);
	utils.fillFormContact(browser, 'User', 'user+test00@gmail.com', '555555555', 'Texto de prueba para test de envío de formulario de contacto');
	browser.assert.cssClassPresent('.contactForm-response', 'alert-success');
 	browser.end();
 },
 
 "should change language clicking footer links" : function (browser) {
 browser
 	.url(data.baseUrl)
 	.waitForElementVisible(data.english, 20000)
 	.click(data.english)
 	.assert.urlEquals(data.baseUrl + "en")
 	.url(data.baseUrl)
 	.waitForElementVisible(data.spanish, 20000)
 	.click(data.spanish)
 	.assert.urlEquals(data.baseUrl + "es")
 	.url(data.baseUrl)
 	.waitForElementVisible(data.polski, 20000)
 	.click(data.polski)
 	.assert.urlEquals(data.baseUrl + "pl")
 	.url(data.baseUrl)
 	.waitForElementVisible(data.catalan, 20000)
 	.click(data.catalan)
 	.assert.urlEquals(data.baseUrl + "ca")
 	.end();
 }
};


