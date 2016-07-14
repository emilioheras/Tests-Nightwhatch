/**¡
 * Created by Fran on 11/07/2016.
 */

var formFunctions   = require("../functions.forms");
var navegation      = require("../navegation.functions");
var dataBuilder     = require("../testData.builder");
var userBuilder     = require("../user.builder");
var api             = "http://api.local.sportmaniacs.com";
// var api             = "http://api-beta.sportmaniacs.com";


module.exports = {

    "Test Dependencies": function (browser) {
        navegation.login(browser, "nacho@sportmaniacs.com", "Aerith7");
        var races   = dataBuilder.buildTestData(api);
        races.forEach(function (race) {
            race.events.forEach(function (event) {
                if (event.form) {
                    navegation.goToEventPage(browser, race.id, event.id);
                    var user = userBuilder.buildAppropriateUser(event.form.fields, event);
                }
                if(event.form.steps && event.form.steps.length) {
                    event.form.steps = formFunctions.recalculateStepsForTeamInscriptions(event.form.steps, user);
                    event.form.steps.forEach((step, index) => {

                        if (formFunctions.stepIsAnInscription(step))
                            navegation.clickImRegisteringAFriend(browser);
                        
                        event.form.fields.forEach(function (field) {
                           if(field && field.dependent)
                            formFunctions.fulfillDependencies(browser, field.dependent);
                        });

                    });
                }
            });
        });
    }
}
