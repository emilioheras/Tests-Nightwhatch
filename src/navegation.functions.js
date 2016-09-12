/**¡
 * Created by Fran on 11/07/2016.
 */

var baseUrl         = "http://web-test.local.sportmaniacs.com/es";
// var baseUrl         = "https://sportmaniacs.com/es";

module.exports = new function() {

<<<<<<< HEAD
    this.login = function(browser, user, pass) {
=======

    this.goToTheHome = function (browser) {
        browser.url(baseUrl);
    };

    this.login = function (browser, user, pass) {
>>>>>>> release/Release-1
        var loginUrl = this.buildUrl(browser, "/login");
        browser.url(loginUrl);
        this.fillLoginform(browser, user, pass);
        browser.click("button[data-async-form-submit]");
    };

<<<<<<< HEAD
    this.currentDate = function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if(dd<10)
            dd='0'+dd;
        if(mm<10)
            mm='0'+mm;
        today = yyyy+'-'+mm+'-'+dd;
        return today;
    };

    this.buildUrl = function(browser, url) {
        return (baseUrl + "/" + url.replace(/^\//, "").replace(/\/$/, ""));
    };

    this.fillLoginform = function(browser, user, pass) {
=======
    this.currentDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10)
            dd = '0' + dd;
        if (mm < 10)
            mm = '0' + mm;
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    };

    this.buildUrl = function (browser, url) {
        return (baseUrl + "/" + url.replace(/^\//, "").replace(/\/$/, ""));
    };

    this.fillLoginform = function (browser, user, pass) {
>>>>>>> release/Release-1
        browser
            .setValue("#loginFormEmail", user)
            .setValue("#loginFormPassword", pass)
    };

<<<<<<< HEAD
    this.goToEventPage = function(browser, raceId, eventId){
        browser.url(this.buildUrl(browser, "/services/inscription/" + raceId + "/" + eventId));
    };
    
    this.clickImRegisteringAFriend = function(browser) {
        browser.click("fieldset.active .friend-selector .col-sm-6:nth-of-type(2) label");
    };
    
    this.goToNextStep = function(browser) {
=======
    this.goToEventPage = function (browser, raceId, eventId) {
        browser.url(this.buildUrl(browser, "/services/inscription/" + raceId + "/" + eventId));
    };

    this.clickImRegisteringAFriend = function (browser) {
        browser.click("fieldset.active .friend-selector .col-sm-6:nth-of-type(2) label");
    };

    this.goToNextStep = function (browser) {
>>>>>>> release/Release-1
        browser.waitForElementPresent(".form-nav .btn.btn-primary.u-fl-r", 20000);
        browser.click(".form-nav .btn.btn-primary.u-fl-r");
        browser.pause(3000);
        browser.waitForElementNotVisible(".plainoverlay", 50000);
<<<<<<< HEAD

    };

    this.clickOnPayButton = function (browser){
        browser.waitForElementVisible('.pay', 300);
        browser.click(".pay");
    };
    
};

=======
    };

    this.clickOnPayButton = function (browser) {
        browser.waitForElementVisible('.pay', 30000);
        browser.click(".pay");
    };
    
};
>>>>>>> release/Release-1
