var navegation      = require("../navegation.functions");
var dataBuilder     = require("../testData.builder");
var functions   = require("../functions.classifications");
var api             = "http://api.local.sportmaniacs.com";
var raceEvents = ["330", "337"];

module.exports = {

	//"CheckCorrectNumberOfAthletesPerRaceEvent" : function (browser) {
     //   navegation.login(browser, "user+test00@gmail.com", "123456");
     //   raceEvents.forEach(function(event){
     //       navegation.goToEventClassificationPage(browser, "97", event);
     //       browser.waitForElementPresent("div.u-ta-c > span:nth-child(3)", 20000);
     //       browser.getText("div.u-ta-c > span:nth-child(3)", function(result){
     //           var numberOfPages = parseInt(result.value);
     //           var increaseAthletesPerPage = 50;
     //           for (var i = 0; i < numberOfPages; i++) {
     //               if (i != numberOfPages-1){
     //                   functions.checkNumOfAthleteOfEachPage(browser, increaseAthletesPerPage);
     //                   increaseAthletesPerPage += 50;
     //                   browser.click('a.nav-link:nth-child(4)');
     //               }else{
     //                   functions.checkNumOfAthleteOfLastPage(browser, increaseAthletesPerPage);
     //               }
     //           }
     //       });
     //   });
     //   browser.end();
	//},

    "checkThatTheTimesOfAthletesAreOrdered" : function (browser) {
        navegation.login(browser, "user+test00@gmail.com", "123456");        
        raceEvents.forEach(function(event){
            navegation.goToEventClassificationPage(browser, "97", event);
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
    }
};
