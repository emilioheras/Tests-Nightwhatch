/**
 * Created by Fran on 27/07/2016.
 */

var formFunctions   = require("../functions.forms");
var searchFunctions = require("../search.functions");
var navegation      = require("../navegation.functions");
var dataBuilder     = require("../testData.builder");
var userBuilder     = require("../user.builder");
// var api             = "http://api.local.sportmaniacs.com";
var api             = "http://api-beta.sportmaniacs.com";

module.exports = {

    // "checkTheSearchForARace": function (browser) {
    //     navegation.goToTheHome(browser);
    //     var races   = dataBuilder.buildTestData(api);
    //     races.forEach(function (race) {
    //         browser.setValue("#nameRace", race.name);
    //         browser.click("div.col-xs-2.col-md-3 > button");
    //         searchFunctions.checkImOnTheTargetRace(browser, race.slug);
    //     });
    // },
    "checkSearchARaceByParts": function (browser) {
        navegation.goToTheHome(browser);
        var races   = dataBuilder.buildTestData(api);
        races.forEach(function (race) {
            var parts = race.name.split(" ");
            parts.forEach(function (part){
                browser.setValue("#nameRace", part);
                browser.click("div.col-xs-2.col-md-3 > button");
                
                searchFunctions.findTheTargetRaceOnTheResult(browser, race.name);
                navegation.goToTheHome(browser);
            });
        });
    },
};