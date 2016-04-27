var data = require("../variables");

module.exports = {
 //NO ESTA TERMINADO
 /*"should send a contact form email " : function (browser) {
 browser
 .url(data.baseUrl)
 .waitForElementVisible(data.contactForm, 5000)
 .click(data.contactForm)
 .waitForElementVisible('#ajax-modal > div > div', 8000)
 .end();
 },*/
 
 "should change language clicking footer links" : function (browser) {
 browser
 .url(data.baseUrl)
 .waitForElementVisible(data.english, 1000)
 .click(data.english)
 .assert.urlEquals(data.baseUrl + "en")
 .url(data.baseUrl)
 .waitForElementVisible(data.spanish, 1000)
 .click(data.spanish)
 .assert.urlEquals(data.baseUrl + "es")
 .url(data.baseUrl)
 .waitForElementVisible(data.polski, 1000)
 .click(data.polski)
 .assert.urlEquals(data.baseUrl + "pl")
 .url(data.baseUrl)
 .waitForElementVisible(data.catalan, 1000)
 .click(data.catalan)
 .assert.urlEquals(data.baseUrl + "ca")
 .end();
 }
};


