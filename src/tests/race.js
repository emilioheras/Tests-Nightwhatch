var race = require("./races/test.js");
var data = require("../variables");
var utils = require("../functions");

tests = {

	event: function(browser, event) {

		browser.url(utils.buildUrl(browser, "/services/inscription/" + race.id + "/" + event.id));
		browser.waitForElementPresent("form", 20000);

		for(var type in event.fields)
			this.amountOfFieldsIsCorrect(browser, event.fields[type], event.team_size, type);

		if(event.mode)
			this.testModeIsCorrect[event.mode]();
	},

	testModeIsCorrect: {
		RFEA: function(browser, event) {
			this.amountOfFieldsIsCorrect([""], event.team_size, "RFEA");
		},

		FETRI: function() {

		}
	},

	amountOfFieldsIsCorrect: function(browser, fields, team_size, type) {
		
		fields.forEach(function(field, index) {
			
			var browserFunction = function(searchField) {
				return $("[data-short-name='" + searchField + "']").length;
			};

			var callBackFunction = function(real_amount) { 		
				browser.verify.equal(real_amount.value, team_size, "El campo " + field + " del tipo " + type);
			};

			var params = [field];

			browser.execute(browserFunction, params, callBackFunction);
			
		});
	}

}



module.exports = {
	"Test Carrera" : function (browser) {
		
		utils.login(browser, "nacho@sportmaniacs.com", "Aerith7");

		race.events.forEach(function(event, index) {
			tests.event(browser, event);
		});
	}
};