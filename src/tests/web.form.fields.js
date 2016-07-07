var formFunctions = require("../functions.forms.js");
var form = require("../form.fields.js");
var request = require('sync-request');
// var api = "http://api.local.sportmaniacs.com"; //testear web.test
var api = "http://api-beta.sportmaniacs.com"; //testear producción
var races = formFunctions.getRacesFromApi(api);

module.exports = {

    "Test Formularios" : function (browser) {
        formFunctions.login(browser, "nacho@sportmaniacs.com", "Aerith7");
        races.forEach(function(race) {
            race.events.forEach(function(event) {
                formFunctions.goToEventPage(browser, race.id, event.id);
                
                if(event.form.fields)
                    event.form.fields.forEach (function(field) {
                        var selector = formFunctions.buildFormElementSelector(field);
                        if(selector)
                            browser.waitForElementPresent(selector, 3000);
                    });
            });
        });
    }
}
