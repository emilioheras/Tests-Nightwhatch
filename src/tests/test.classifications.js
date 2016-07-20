var navegation      = require("../navegation.functions");
var dataBuilder     = require("../testData.builder");
var functions   = require("../functions.classifications");
var api             = "http://api.local.sportmaniacs.com";

module.exports = {

	"Test Clasificaciones" : function (browser) {

		var races = dataBuilder.buildTestData(api);

        navegation.login(browser, "user+test00@gmail.com", "123456");

        // navegation.goToEventClassificationPage(browser, "97", "330"); 

        races.forEach(function(race) {
            race.events.forEach(function(event) {
                navegation.goToEventClassificationPage(browser, race.id, event.id);
                functions.calculateNumberOfRowsInTheTable(browser);
                
            });
        });
	}

};
