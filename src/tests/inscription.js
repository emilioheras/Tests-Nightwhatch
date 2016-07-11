var formFunctions   = require("../functions.forms");
var dataBuilder     = require("../testData.builder");
var userBuilder     = require("../user.builder");
var api = "http://api.local.sportmaniacs.com";
// var api = "http://api-beta.sportmaniacs.com";


module.exports = {

    "Test Inscriptions" : function (browser) {
        formFunctions.login(browser, "nacho@sportmaniacs.com", "Aerith7");

        var races   = dataBuilder.buildTestData(api);
        browser.pause(600000);
        races.forEach(function (race) {
            race.events.forEach(function (event) {
                formFunctions.goToEventPage(browser, race.id, event.id);
                var user = userBuilder.buildAppropriateUser(event.form.fields ,event);
                

                
                //
                // if(event.form.fields && event.form.fields.length) {
                //     var cleanUser = JSON.parse(JSON.stringify((formFunctions.buildUser(event.form.fields, user))));
                //     formFunctions.fillStepFields(browser, cleanUser);
                //     formFunctions.goToNextStep(browser);
                // }
            });
        });
    }
}
