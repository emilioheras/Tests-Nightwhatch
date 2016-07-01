module.exports = new function() {

    this.goToNextStep = function(browser) {
        browser.waitForElementPresent(".form-nav .btn.btn-primary.u-fl-r", 20000);
        browser.click(".form-nav .btn.btn-primary.u-fl-r");
        browser.pause(3000);
        browser.waitForElementNotVisible(".plainoverlay", 50000);
    };

    this.goToEventPage = function(browser, event){
        browser.url(utils.buildUrl(browser, "/services/inscription/" + race.id + "/" + event.id));
        browser.pause(2000);
        browser.click('#custom-content > fieldset > div.col-xs-12.u-mb-lg.inscription-mode-selector > div > div > div:nth-child(2)');
        browser.waitForElementPresent("form", 20000)
    };


};
