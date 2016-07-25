var navegation      = require("../navegation.functions");
var dataBuilder     = require("../testData.builder");
var functions   = require("../functions.classifications");
var api             = "http://api.local.sportmaniacs.com";


module.exports = {

	"Test Clasificaciones" : function (browser) {

		// var races = dataBuilder.buildTestData(api);
        var events = ["330", "337"];
        navegation.login(browser, "user+test00@gmail.com", "123456");

        // navegation.goToEventClassificationPage(browser, "97", "330");
        // browser.assert.equal(functions.calculateNumberOfRowsInTheTable(browser), 50); 
        
        events.forEach(function(event){
            navegation.goToEventClassificationPage(browser, "97", event);
            browser.waitForElementPresent("div.u-ta-c > span:nth-child(3)", 20000);
            browser.getText("div.u-ta-c > span:nth-child(3)", function(result){

                var numberOfPages = parseInt(result.value);
                var increaseAthletesPerPage = 50;

                for (var i = 1; i < numberOfPages; i++) {

                    functions.checkNumOfAthleteOfEachPage(browser, increaseAthletesPerPage);

                    if (i != numberOfPages - 1){
                        increaseAthletesPerPage += 50;
                        browser.click('a.nav-link:nth-child(4)');
                    }else{
                        browser.click('a.nav-link:nth-child(4)');
                        console.log(increaseAthletesPerPage);
                        functions.checkNumOfAthleteOfLastPage(browser, increaseAthletesPerPage);
                    }                    
                }                
            });            
        });
	}
};
