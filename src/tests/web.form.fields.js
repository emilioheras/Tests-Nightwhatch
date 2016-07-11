var formFunctions   = require("../functions.forms");
var form            = require("../form.fields");
var dataBuilder     = require("../testData.builder");

var api = "http://api.local.sportmaniacs.com";
// var api = "http://api-beta.sportmaniacs.com";


module.exports = {

    "Test Formularios" : function (browser) {
        
        var races = dataBuilder.buildTestData(api);
        
        formFunctions.login(browser, "nacho@sportmaniacs.com", "Aerith7");

        races.forEach(function(race) {
            race.events.forEach(function(event) {
                formFunctions.goToEventPage(browser, race.id, event.id);
                if(event.form.fields) {
                    event.form.fields.forEach(function (field) {
                        var selector = formFunctions.buildFullAttributesFormElementSelector(field);
                        if (selector)
                            browser.waitForElementPresent(selector, 3000);
                    });
                }
            });
        });
    }
}
