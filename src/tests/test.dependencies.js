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
        browser.resizeWindow(1900, 1200);
        navegation.login(browser, "alberto@sportmaniacs.com", "123456");
        var races   = dataBuilder.buildTestData(api);
        races.forEach(function (race) {
            race.events.forEach(function (event) {
                if (event.form) {
                    navegation.goToEventPage(browser, race.id, event.id);
                    var user = userBuilder.buildAppropriateUser(event.form.fields, event);
                }
                var typeOfEvent =event.status;
                if(event.form.steps && event.form.steps.length) {
                    event.form.steps = formFunctions.recalculateStepsForTeamInscriptions(event.form.steps, user);
                    event.form.steps.forEach((step, index) => {
                        var arrayOfIdsOfTheCurrentStep = formFunctions.generateArrayOfIdsFromTheCurrentStep(event.form.fields, step);
                        if (formFunctions.stepIsAnInscription(step, browser)) {
                            navegation.clickImRegisteringAFriend(browser);
                        }
                        event.form.fields.forEach(function (field) {
                            if (field.dependent) {
                                var idOfTheDependencyField = formFunctions.buildIdByName(field.dependent.field);
                            }
                            if (field && field.dependent && arrayOfIdsOfTheCurrentStep[step].indexOf(idOfTheDependencyField) != -1) {
                                formFunctions.checkDependenciesFromStepFields(browser, field, user, event.form.fields, idOfTheDependencyField, arrayOfIdsOfTheCurrentStep[step]);
                            }
                        });
                        if (!formFunctions.stepIsAnInscription(step, browser) || typeOfEvent == 11) {
                            formFunctions.fillStepFields(browser, user);
                            navegation.goToNextStep(browser);
                        }
                    });
                }
            });
        });
        browser.end()
    }
};
