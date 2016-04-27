var data = require("../variables");
var number = Math.random() * 100 + 1;

module.exports = {
 "should fail at login with bad password" : function (browser) {
 browser
 	.url(data.baseUrl)
 	.useXpath() // every selector now must be xpath
 	.pause(5000)
 	.waitForElementVisible(data.logIn, 5000)
 	.click(data.logIn)
 	.pause(5000)
 	.waitForElementVisible(data.loginEmail, 3000)
 	.executeAsync(function(data, done) {$("#loginFormEmail").val('javier@sportmaniacs.com');})
	.executeAsync(function(data, done) {$("#loginFormPassword").val('555555');})	
 	.waitForElementVisible(data.loginButton, 3000)
 	.click(data.loginButton)
 	.pause(5000)
 	.waitForElementVisible(data.loginAlert, 3000) 	
 	},

  "should login succesfully" : function (browser) {
  browser
 	.executeAsync(function(data, done) {$("#loginFormPassword").val('123456');})
 	.click(data.loginButton)
 	.pause(50000)
	.waitForElementVisible(data.logIn, 5000)
	.assert.containsText(data.logIn, 'ERNEST OHARA')
  	},

  "should logOut" : function (browser) {
  browser
 	.waitForElementVisible(data.logIn, 60000) 	
 	.click(data.logIn)
 	.pause(5000)
 	.waitForElementVisible(data.logOut, 60000)
 	.click(data.logOut)
 	.pause(5000)
 	.waitForElementVisible(data.logIn, 50000)
 	.assert.containsText(data.logIn, 'INICIAR SESIÓN')
  	},
	
  "should say the user has an email" : function (browser) {
  browser
	.url(data.baseUrl)
  .useXpath() // every selector now must be xpath
 	.pause(5000)
 	.waitForElementVisible(data.logIn, 5000)
 	.click(data.logIn)
 	.pause(5000)
  .executeAsync(function(data, done) {$('#ajax-modal-body > form > fieldset > div.u-pt-md > div > div.col-sm-6.text-md-right.text-sm-center.u-lh-1 > a').click();})
	.pause(5000)
	.waitForElementVisible('//*[@id="ajax-modal-body"]/div/form/div[1]/input', 3000)
	.setValue('//*[@id="ajax-modal-body"]/div/form/div[1]/input', 'userFalse@sportmaniacs.com')
	.click('//*[@id="ajax-modal-body"]/div/form/div[2]/button')
	.pause(5000)
	.waitForElementVisible('//*[@id="ajax-modal-body"]/div/div', 5000)
	.assert.containsText('//*[@id="ajax-modal-body"]/div/div', 'Ups, no hemos encontrado ninguna cuenta en Sportmaniacs con ese email.')
  .executeAsync(function(data, done) {$("#ajax-modal-body > div > form > div:nth-child(1) > input").val('user@sportmaniacs.com');})
  .click('//*[@id="ajax-modal-body"]/div/form/div[2]/button')
  .pause(10000)
  .waitForElementVisible('//*[@id="ajax-modal-body"]/div', 5000)
  .assert.containsText('//*[@id="ajax-modal-body"]/div', 'Acabamos de enviarte un mail con las instrucciones para acceder a tu cuenta.')
  },

   "should create an account" : function (browser) {
  browser
  .url(data.baseUrl)
 	.pause(5000)
 	.waitForElementVisible(data.logIn, 50000)
 	.click(data.logIn)
 	.pause(5000)
	.waitForElementVisible(data.newUser, 5000)
	.click(data.newUser)
	.pause(5000)
	.waitForElementVisible(data.signupName, 3000)
 	.setValue(data.signupName, 'user')
	.setValue(data.signupSurName, 'user')
	.setValue(data.signupEmail, 'user+' + number + '@sportmaniacs.com')
	.setValue(data.signupPass, '555555')
 	.click(data.signupButton)
 	.pause(10000)
 	.waitForElementVisible(data.logIn, 3000)
	.assert.containsText(data.logIn, 'USER')
	.end(); 	
   }
};