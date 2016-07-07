var formFunctions = require("../functions.forms.js");
var form = require("../form.fields.js");
var request = require('sync-request');
// var api = "http://api.local.sportmaniacs.com"; //testear web.test
var api = "http://api-beta.sportmaniacs.com"; //testear producción
var races = formFunctions.getRacesFromApi(api);
var user = require("../users.js");


module.exports = {

    "Test Inscriptions" : function (browser) {
        formFunctions.login(browser, "nacho@sportmaniacs.com", "Aerith7");
        races.forEach(function(race) {
            race.events.forEach(function(event) {
                formFunctions.goToEventPage(browser, event);
                event.steps.forEach((step, index) => {
                    formFunctions.fillStepFields(browser, user);
                    formFunctions.goToNextStep(browser);
                });
                formFunctions.sendInscription(browser);
                
                
                
            });
        });
    }
}
