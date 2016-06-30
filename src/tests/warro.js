
// var race = require("./races/fetri.js");
// var race = require("./races/preferent.js");
// var race = require("./races/rfea.js");
// var race = require("./races/simple.js");
var race = require("./races/supersprint.js");
var data = require("../variables");
var utils = require("../functions");
var raceFunctions = require("../functions.race.js");

tests = {

    event: function(browser, event) {

        raceFunctions.goToEventPage(browser, event);

        for(var type in event.fields){
            this.amountOfFieldsIsCorrect[type](browser, event.fields[type], event.team_size, type);
        }

        event.inscriptions.valid.forEach((user) => {
            this.checkIfRequiredAreRequired(browser, event, user);
            this.iCanCompleteAnInscription(browser, event, user);
        });

    },

    testModeIsCorrect: {
        RFEA: function(browser, event) {

        },

        PREFERENTE: function(browser, event) {

        },

        FETRI: function(browser, event) {

        },

        SIMPLE: function(browser, event) {

        },

        GRUPO: function(browser, event) {

        },

        SUPERSPRINT: function(browser, event) {

        }
    },

    amountOfFieldsIsCorrect: {

        basic: function(browser, fields, team_size, type) {

            fields.forEach(function(field, index) {

                var browserFunction = function(searchField) {
                    return $("[data-short-name='" + searchField + "']").length;
                };

                var callBackFunction = function(real_amount) {
                    browser.verify.equal(real_amount.value, team_size, "El campo " + field + " del tipo " + type);
                };

                var params = [field];

                browser.execute(browserFunction, params, callBackFunction);

            });
        },

        advanced: function(browser, fields, team_size, type) {
            return this.amountOfFieldsIsCorrect.basic(browser, fields, team_size, type);
        },

        extra: function(browser, extraField, team_size, type) {

            extraField.forEach(function(field, index) {

                var browserFunction = function(searchField) {

                    return $("[type=hidden][value='" + searchField + "'][data-short-name='eventattribute_id']").length;
                };

                var callBackFunction = function(real_amount) {
                    browser.verify.equal(real_amount.value, team_size, "El campo " + field + " del tipo " + type);
                };

                var params = [field];

                browser.execute(browserFunction, params, callBackFunction);

            });
        }
    },

    iCanCompleteAnInscription: function(browser, event, user) {

        raceFunctions.goToEventPage(browser, event);

        event.steps.forEach((step, index) => {
            raceFunctions.fillStepFields(browser, user);
            raceFunctions.goToNextStep(browser);
        });
        raceFunctions.sendInscription(browser);

        //raceFunctions.checkPriceIsCorrect(event, user);

    },

    checkIfRequiredAreRequired: function(browser, event, user){

        raceFunctions.goToEventPage(browser, event);
        event.steps.forEach((step, index) => {
            raceFunctions.unsetStepFields(browser, user);
            raceFunctions.goToNextStep(browser);
            raceFunctions.checkIfImOnTheSameStep(browser);

            browser.getAttribute("fieldset.active", "class", function(result){
                var fieldsetClass = (result);

                if( fieldsetClass.value != "form-step row checkout active"){
                    event.requiredFields.forEach(function(field) {
                        browser.waitForElementPresent(`.has-danger [data-short-name=${field}]`, 100);
                    });
                }
            });
            raceFunctions.fillStepFields(browser, user);
            raceFunctions.goToNextStep(browser);
        });
        raceFunctions.sendInscription(browser);
    }
    // checkDependenciesOfFields: function(browser){
    //     raceFunctions.goToEventPage(browser, event);
    //     event.steps.forEach((step, index) => {
    //         //Ejecuta una de las posibles dependencias
    //         raceFunctions.fillStepFields(browser, user);
    //         raceFunctions.goToNextStep(browser);
    //     });
    // }

};//fin



module.exports = {
    "Test Carrera" : function (browser) {

        utils.login(browser, "nacho@sportmaniacs.com", "Aerith7");

        race.events.forEach(function(event, index) {
            tests.event(browser, event);
        });
    }
};
