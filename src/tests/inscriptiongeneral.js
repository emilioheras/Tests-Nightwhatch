var data = require("../variables");
var utils = require("../functions");
var race = require("./races/test.js");
var user = require("./users/anonymous");


module.exports = {
    "should complete all fields of the form" : function (browser) {
        utils.logout(browser);
        browser.url(utils.buildUrl(browser, "/services/inscription/" + race.id + "/" + race.events[0].id));
        browser.setValue('#loginFormEmail', user.mail);
        browser.click('button.btn:nth-child(2)');
        browser.waitForElementVisible('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', 20000);
        browser.setValue('div.u-pos-r:nth-child(1) > div:nth-child(1) > input:nth-child(2)', user.pass);
        browser.click('.u-mb-md');
        browser.waitForElementVisible("#custom-content > fieldset > div.col-xs-12.u-mb-lg.inscription-mode-selector > div > div > div:nth-child(1)", 20000);
        browser.click("#custom-content > fieldset > div.col-xs-12.u-mb-lg.inscription-mode-selector > div > div > div:nth-child(1)");
        browser.pause(2000);
        browser.click('a.btn:nth-child(2)');
        browser.pause(2000);
        browser.click('button.btn');
        browser.end();
    }
};