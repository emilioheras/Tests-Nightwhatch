var data = require("../variables");
var utils = require("../functions");

module.exports = {
 "should add the '/es' to the url" : function (browser) { 
 	browser.url(data.baseUrlWithoutLanguage);
 	browser.pause(3000);
 	browser.assert.urlEquals(data.baseUrl);
    browser.end();
 },

 "should send a contact form email" : function (browser) {
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
 	.waitForElementVisible('.col-md-5 > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)', 20000)
 	.click('.col-md-5 > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
 	.assert.urlEquals(data.getLanguageUrl("en"))
 	.waitForElementVisible('.col-md-5 > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)', 20000)
 	.click('.col-md-5 > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
 	.assert.urlEquals(data.getLanguageUrl("es"))
 	.waitForElementVisible('.col-md-5 > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)', 20000)
 	.click('.col-md-5 > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)')
 	.assert.urlEquals(data.getLanguageUrl("pl"))
 	.waitForElementVisible('.col-md-5 > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)', 20000)
 	.click('.col-md-5 > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)')
 	.assert.urlEquals(data.getLanguageUrl("ca"))
 	.end();
 }
};


