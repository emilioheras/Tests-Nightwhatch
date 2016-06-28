var race = require("./tests/races/fetri.js");
// var race = require("./tests/races/preferent.js");
// var race = require("./tests/races/rfea.js");
// var race = require("./tests/races/simple.js");
var data = require("./variables.js");
var utils = require("./functions.js");

module.exports = new function() {

        this.goToNextStep = function(browser) {
            browser.waitForElementPresent(".form-nav .btn.btn-primary.u-fl-r", 20000);
            browser.click(".form-nav .btn.btn-primary.u-fl-r");

            browser.waitForElementVisible(".plainoverlay", 3000);
            browser.waitForElementNotVisible(".plainoverlay", 10000);
        };

        this.goToEventPage = function(browser, event) {
            browser.url(utils.buildUrl(browser, "/services/inscription/" + race.id + "/" + event.id));
            browser.pause(2000);
            var tomate = browser.execute(function(){$('#custom-content > fieldset > div.col-xs-12.u-mb-lg.inscription-mode-selector > div').attr("style")});
            console.log(tomate);
            browser.click('#custom-content > fieldset > div.col-xs-12.u-mb-lg.inscription-mode-selector > div > div > div:nth-child(2)');

            browser.waitForElementPresent("form", 20000)
        };

        this.doSomethingWithAllFieldsFromCurrentGroup = function(browser, callBack) {
            browser.execute(this.detectStepFields, [], callBack.bind(this));
        };

        this.detectStepFields = function() {
            var result = [];
            var fields = $(".form-register fieldset.active [name]:not([type=hidden])");
            var pushed = [];

            fields.each(function (index, item) {

                var name = $(item).data("short-name");
                var id = $(item).attr("id");

                if (!id)
                    return true;

                if (!name)
                    name = $(item).closest("[data-short-name]").data("short-name");

                if ($(item).is("[type=radio]")) {
                    id = id.split("_").slice(0, id.split("_").length - 1).join("_");
                }

                if (pushed.indexOf(id) == -1) {

                    result.push({
                        id: id,
                        name: name
                    });

                    pushed.push(id);
                }
            });

            return result;
        };

        this.fillStepFields = function(browser, user) {

            this.doSomethingWithAllFieldsFromCurrentGroup(browser, function(result) {
                result.value.forEach((item, index) => {

                    var id = '#' + item.id;

                    browser.pause(500);

                    if(!user.hasOwnProperty(item.name))
                        return false;

                    var desiredValue = user[item.name];
                    browser.setValue(id, desiredValue);
                    browser.pause(500);
                    if(desiredValue && !!desiredValue.match(/\d\d\d\d-\w*-\d\d?/)) {

                        var parts = desiredValue.split("-");
                        browser.setValue(id+"_year", parts[0]);
                        browser.setValue(id+"_month", parts[1]);
                        browser.setValue(id+"_day", parts[2]);
                    }

                    browser.click(id + "_" + desiredValue);
                    browser.click("body");

                });

            });

            return false;

        };
    
        this.unsetStepFields = function(browser, user) {

            this.doSomethingWithAllFieldsFromCurrentGroup(browser, function(result) {
                result.value.forEach((item, index) => {
                    var id = '#' + item.id;
                    browser.setValue(id, "");
                });
            });
            return false;

        };

        this.doSomethingWithTheCurrentGroup = function(browser, callBack) {
            browser.execute(this.obtainFieldsetActive, [], callBack.bind(this));
        };


        this.obtainFieldsetActive= function(){
            var result2 = $('#custom-content > fieldset.active').attr("class");
            return result2;
        };


        this.checkIfImOnTheSameStep = function(browser, document){

            this.doSomethingWithTheCurrentGroup(browser, function(result2) {
                console.log(result2.value);
                browser.assert.attributeContains('#custom-content > fieldset.active', 'class', result2.value)
            });

            return false;

        };

        this.sendInscription = function (browser){
            browser.waitForElementVisible('button.btn', 20000);
            browser.click("button.btn");
        };

    };
