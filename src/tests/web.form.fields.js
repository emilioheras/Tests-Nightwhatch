var formFunctions = require("../functions.forms.js");
var form = require("../form.fields.js");
var request = require('sync-request');
var api = "http://api-beta.sportmaniacs.com";

module.exports = {

    "Test Formularios" : function (browser) {

        formFunctions.login(browser, "nacho@sportmaniacs.com", "Aerith7");

        var races = formFunctions.getRacesFromApi(api);

        races.forEach(function(race) {
            var events = formFunctions.getEventsFromApi(api, race);

            if(events)
                events.forEach(function(event) {

                    var form = formFunctions.getFormFromApi(api, event);

                    if(form)
                    event.form = form;
                });

            race.events = events;

        });

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
