/**¡
 * Created by Fran on 11/07/2016.
 */

var baseUrl         = "http://web-test.local.sportmaniacs.com/es";
// var baseUrl         = "https://sportmaniacs.com/es";

module.exports = new function() {

    this.login = function(browser, user, pass) {
        var loginUrl = this.buildUrl(browser, "/login");
        browser.url(loginUrl);
        this.fillLoginform(browser, user, pass);
        browser.click("button[data-async-form-submit]");
    };

    this.logout = function(browser) {
        var loginUrl = this.buildUrl(browser, "/app/logout");
        browser.url(loginUrl);
    };

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
        browser
            .setValue("#loginFormEmail", user)
            .setValue("#loginFormPassword", pass)
    };

    this.goToEventPage = function(browser, raceId, eventId) {
        browser.url(this.buildUrl(browser, "/services/inscription/" + raceId + "/" + eventId));
    };

    this.superClick = function(browser, element) {
        browser.waitForElementVisible(element ,20000);
        //browser.moveToElement('.text-uppercase', 10, 10);
        browser.click(element, function (clickStatus) {
            //console.log(clickStatus.status);
            if (clickStatus.status == -1){
                browser.click(element);
            }
        });
    };

    this.goToEventClassificationPage = function(browser, raceId, eventId){
        browser.url(this.buildUrl(browser, "/races/" + raceId + "/" + eventId + "/results"));
    };

    this.clickOnOfficialClassificationTab = function(browser) {
        browser.waitForElementVisible(".nav-tabs > li:nth-child(2) > a:nth-child(1)", 20000);
        browser.click(".nav-tabs > li:nth-child(2) > a:nth-child(1)");
    };
    
    this.clickImRegisteringAFriend = function(browser) {
        browser.click("fieldset.active .friend-selector .col-sm-6:nth-of-type(2) label");
    };
    
    this.goToNextStep = function(browser) {
        browser.waitForElementPresent(".form-nav .btn.btn-primary.u-fl-r", 20000);
        browser.click(".form-nav .btn.btn-primary.u-fl-r");
        browser.pause(3000);
        browser.waitForElementNotVisible(".plainoverlay", 50000);

    };

    this.clickOnPayButton = function (browser){
        browser.waitForElementVisible('.pay', 300);
        browser.click(".pay");
    };

    this.waitingForLoader = function (browser) {
        browser.waitForElementVisible(".plainoverlay", 5000);
        browser.waitForElementNotVisible(".plainoverlay", 5000);
    };

    this.selectNextOptionClassification = function (browser) {
        browser.moveToElement('.header', 10, 10);
        browser.click('#eventCategory');
        browser.keys(['\uE015', '\uE006']);
    };
    
};

