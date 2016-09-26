var navegation      = require("../navegation.functions");
var dataBuilder     = require("../testData.builder");
var functions   = require("../functions.classifications");
var api             = "http://api.local.sportmaniacs.com";
var race = "97";
var raceEvents = ["330", "337"];

//var race = "la-cocollona-2016";
//var raceEvents = ["55d45c9f-07d4-4596-a8a8-4689bc5ffd28", "55d45c9f-9b30-4f18-9da1-4689bc5ffd28"];

module.exports = {

    "CheckCorrectNumberOfAthletesPerRaceEvent" : function (browser) {
        navegation.login(browser, "user+test00@gmail.com", "123456");
        raceEvents.forEach(function(event){
            navegation.goToEventClassificationPage(browser, race, event);
            navegation.clickOnOfficialClassificationTab(browser);
            browser.waitForElementPresent("div.u-ta-c > span:nth-child(3)", 20000);
            browser.getText("div.u-ta-c > span:nth-child(3)", function(result){
                var numberOfPages = parseInt(result.value);
                var increaseAthletesPerPage = 50;
                for (var i = 0; i < numberOfPages; i++) {
                    if (i != numberOfPages-1){
                        functions.checkNumOfAthleteOfEachPage(browser, increaseAthletesPerPage);
                        increaseAthletesPerPage += 50;
                        browser.click('a.nav-link:nth-child(4)');
                    }else{
                        functions.checkNumOfAthleteOfLastPage(browser, increaseAthletesPerPage);
                    }
                }
            });
        });
        browser.end();
    },

    "checkThatTheTimesOfAthletesAreOrdered" : function (browser) {
        navegation.login(browser, "user+test00@gmail.com", "123456");
        raceEvents.forEach(function(event){
            navegation.goToEventClassificationPage(browser, race, event);
            navegation.clickOnOfficialClassificationTab(browser);
            browser.waitForElementPresent("div.u-ta-c > span:nth-child(3)", 20000);
            browser.getText("div.u-ta-c > span:nth-child(3)", function(result){
                var numberOfPages = parseInt(result.value);

                for (var i = 0; i < numberOfPages; i++) {
                    functions.checkTheOrderOfTimes(browser);
                    if (i != numberOfPages-1){
                        browser.click('a.nav-link:nth-child(4)');
                    }
                }
            });
        });
        browser.end();
    },

    "checkPagination" : function (browser) {
        navegation.login(browser, "user+test00@gmail.com", "123456");
        raceEvents.forEach(function(event){
            navegation.goToEventClassificationPage(browser, race, event);
            navegation.clickOnOfficialClassificationTab(browser);
            browser.waitForElementPresent("div.u-ta-c > span:nth-child(3)", 20000);
            browser.getText("div.u-ta-c > span:nth-child(3)", function(result){
                var numberOfPages = parseInt(result.value);
                var numberOfFirstAthleteOfThePage = 1;
                functions.checkThatWeAreOnTheSamePageAfterClickingNextOrPrevious(browser, 1, numberOfFirstAthleteOfThePage);
                for (var i = 0; i < numberOfPages; i++) {
                    functions.checkThatPressingTheNextButtonWeGoToNextPage(browser, i+1, numberOfFirstAthleteOfThePage);
                    if (i != numberOfPages-1){
                        numberOfFirstAthleteOfThePage += 50;
                        browser.click('a.nav-link:nth-child(4)');
                    }else{
                        functions.checkThatWeAreOnTheSamePageAfterClickingNextOrPrevious(browser, i+1, numberOfFirstAthleteOfThePage);
                    }
                }
                functions.checkManualPagination(browser,numberOfPages);
            });
        });
        browser.end();
    },

    "checkIfItGoesToTheAthletePage" : function (browser) {
        browser.maximizeWindow();
        navegation.login(browser, "alberto@sportmaniacs.com", "123456");
        raceEvents.forEach(function(event){
            if(event) {
                navegation.goToEventClassificationPage(browser, race, event);
                navegation.clickOnOfficialClassificationTab(browser);
                functions.checkifgoToTheAthletePage(browser, race, event);
            }
        });
        browser.end();
    },

    "checkIfTheFilterWorks" : function (browser) {
        navegation.login(browser, "alberto@sportmaniacs.com", "123456");
        raceEvents.forEach(function(event) {
            if(event) {
                navegation.goToEventClassificationPage(browser, race, event);
                navegation.clickOnOfficialClassificationTab(browser);
                functions.checkDorsalByCategories(browser, event);
                functions.checkFinderAthletes(browser, event);
            }
        });
        browser.end();
    }
};
