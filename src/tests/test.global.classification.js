/**
 * Created by Emilio on 16/09/2016.
 */

var navegation     = require("../navegation.functions");
var dataBuilder     = require("../testData.builder");
var functions   = require("../functions.classifications");
var race = "97";
var raceEvents = ["330", "337"];

module.exports = {

    //"shouldShowThatTheUserIsNotLogged": function(browser) {
    //    raceEvents.forEach(function(event){
    //        navegation.goToEventClassificationPage(browser, race, event);
    //        browser.assert.visible("#no-user");
    //    });
    //    browser.end();
    //},

    //"userLoggedButHasNotParticipated": function(browser) {
    //    navegation.login(browser, "user+test00@gmail.com", "123456");
    //    browser.pause(2000);    //
    //    raceEvents.forEach(function(event){
    //        navegation.goToEventClassificationPage(browser, race, event);
    //        browser.waitForElementNotVisible('#no-user', 1000);
    //    });
    //    browser.end();
    //},

    //"userLoggedAndAlsoHasParticipated": function(browser) {
    //    navegation.login(browser, "alberto@sportmaniacs.com", "123456");
    //    browser.pause(2000);
    //    raceEvents.forEach(function(event){
    //        navegation.goToEventClassificationPage(browser, race, event);
    //        browser.waitForElementNotVisible('#no-user', 20000);
    //        if(event == raceEvents[1])
    //            browser.assert.visible("#user-card");
    //    });
    //    browser.end();
    //},

    "shouldShowTheGraphicsInTheSummaryWithOrWithoutLogin": function (browser) {
        raceEvents.forEach(function(event){
            navegation.goToEventClassificationPage(browser, race, event);
            functions.checkThatTheGraphsAreDisplayed(browser, event, false, false);
        });

        navegation.login(browser, "user+test00@gmail.com", "123456");
        browser.pause(2000);
        raceEvents.forEach(function(event){
            navegation.goToEventClassificationPage(browser, race, event);
            functions.checkThatTheGraphsAreDisplayed(browser, event, true, false);
        });

        navegation.logout(browser);
        navegation.login(browser, "alberto@sportmaniacs.com", "123456");
        browser.pause(2000);
        raceEvents.forEach(function(event){
            navegation.goToEventClassificationPage(browser, race, event);
            functions.checkThatTheGraphsAreDisplayed(browser, event, true, true);
        });
        browser.end();
    },

    //"shouldNotShowTheGraphicsInYellowWithoutLogin": function (browser) {
    //    var yellowColor = '#F9DB2D';
    //    navegation.goToEventClassificationPage(browser, race, raceEvents[1]);
    //    functions.checkThatTheElementsAreNotOfAParticularColor(browser, yellowColor);
    //    browser.end();
    //},

    //"shouldNotShowTheGraphicsInYellowAfterLoginIfTheUserHasNotParticipatedInTheRace": function (browser) {
    //    var yellowColor = '#F9DB2D';
    //    navegation.login(browser, "user+test00@gmail.com", "123456");
    //    browser.pause(2000);
    //    navegation.goToEventClassificationPage(browser, race, raceEvents[1]);
    //    functions.checkThatTheElementsAreNotOfAParticularColor(browser, yellowColor);
    //    browser.end();
    //},

    //"shouldShowTheGraphicsInYellowAfterLoginIfTheUserHasParticipatedInTheRace": function (browser) {
    //    var halfTime = '#highcharts-10 g.highcharts-series > rect:nth-child(1)';
    //    var participationByCategory = '#highcharts-0 g.highcharts-legend g.highcharts-legend-item:nth-child(6) rect';
    //    var circularCategory = '#highcharts-0  g.highcharts-series-0  path:nth-child(6)';
    //    var halfTimeCategory = '#highcharts-2 g.highcharts-series rect:nth-child(6)';
    //    var halfTimeClub = '#highcharts-4 g.highcharts-series rect:nth-child(2)';
    //    var yellowColor = '#F9DB2D';
    //    var elements = [halfTime, participationByCategory, circularCategory, halfTimeCategory, halfTimeClub];
    //
    //    navegation.login(browser, "alberto@sportmaniacs.com", "123456");
    //    browser.pause(2000);
    //    navegation.goToEventClassificationPage(browser, race, raceEvents[1]);
    //    functions.checkThatTheElementsAreOfAParticularColor(browser, elements, yellowColor);
    //    browser.end();
    //},
}

