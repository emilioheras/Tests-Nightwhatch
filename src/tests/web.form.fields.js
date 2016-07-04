var formFunctions = require("../functions.forms.js");
var form = require("../form.fields.js");
var dataRace = require("../race.js");
tests = {

    event: function(browser, field) {


        
    }


};




module.exports = {
    "Test Formularios" : function (browser) {
        formFunctions.login (browser, "nacho@sportmaniacs.com", "Aerith7");

        formFunctions.goToEventPage(browser,dataRace);

        form.data.fields.forEach (function(field, index) {

            browser.waitForElementPresent(formFunctions.buildFormElementSelector(field), 1000);

        });

    }


}
