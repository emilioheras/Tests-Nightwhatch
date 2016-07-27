/**
 * Created by Fran on 25/07/2016.
 */
var formFunctions   = require("../functions.forms");
var navegation      = require("../navegation.functions");
var dataBuilder     = require("../testData.builder");
var userBuilder     = require("../user.builder");
var api             = "http://api.local.sportmaniacs.com";
// var api             = "http://api-beta.sportmaniacs.com";


module.exports = {

    "Test Prices" : function (browser) {
        navegation.login(browser, "user+test00@gmail.com", "123456");
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
                        if (formFunctions.stepIsAnInscription(step, browser)) {
                            navegation.clickImRegisteringAFriend(browser);
                            event.form.fields.forEach(function (field) {
                                if (field.isPrice && !field.ws) {
                                    var id = formFunctions.buildIdByName(field.name);
                                    var priceOptions = formFunctions.getPriceOptions(field);
                                    if (formFunctions.stepIsAnInscription(step, browser))
                                        if (priceOptions)
                                            priceOptions.forEach((option, index) => {
                                                formFunctions.checkPricesToEachChange(browser, option, id);
                                            });
                                }
                            });
                        }
                        formFunctions.fillStepFields(browser, user);
                        navegation.goToNextStep(browser);
                    });
                    browser.getText("#the-price > tbody > tr:last-child > td:last-child", function (result) {
                        var sumaryPrice = result.value;
                        navegation.clickOnPayButton(browser);
                        if (!formFunctions.ImOnTheTPV(browser))
                            formFunctions.checkFinalPrice(browser, sumaryPrice);
                    });
                }
            });
        });
    }
};