var race = require("./races/fetri.js");
// var race = require("./races/preferent.js");
// var race = require("./races/rfea.js");
// var race = require("./races/simple.js");
var data = require("../variables");
var utils = require("../functions");

tests = {

	event: function(browser, event) {
        
		this.goToEventPage(browser, event);

		for(var type in event.fields)
			this.amountOfFieldsIsCorrect(browser, event.fields[type], event.team_size, type);

        event.inscriptions.valid.forEach((user) => {
			this.iCanCompleteAnInscription(browser, event, user);
		});

	},


	testModeIsCorrect: {
		RFEA: function(browser, event) {

		},

		PREFERENTE: function(browser, event) {

		},

		FETRI: function(browser, event) {

		},

		SIMPLE: function(browser, event) {

		},

		GRUPO: function(browser, event) {

		},

		SUPERSPRINT: function(browser, event) {

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
	},

	iCanCompleteAnInscription: function(browser, event, user) {

        this.goToEventPage(browser, event);

		event.steps.forEach((step, index) => {
			this.fillStepFields(browser, user);
			this.goToNextStep(browser);
		});

		this.sendInscription(browser);

		//this.checkPriceIsCorrect(event, user);

	},


	goToNextStep: function(browser) {
		browser.waitForElementPresent(".form-nav .btn.btn-primary.u-fl-r", 20000);
		browser.click(".form-nav .btn.btn-primary.u-fl-r");

		browser.waitForElementVisible(".plainoverlay", 3000);
		browser.waitForElementNotVisible(".plainoverlay", 10000);
	},

	goToEventPage: function(browser, event) {
		browser.url(utils.buildUrl(browser, "/services/inscription/" + race.id + "/" + event.id));
		browser.waitForElementPresent("form", 20000);
	},

	doSomethingWithAllFieldsFromCurrentGroup: function(browser, callBack) {
		browser.execute(this.detectStepFields, [], callBack.bind(this));
	},

	detectStepFields: function() {

		var result = [];
		var fields = $(".form-register fieldset.active [name]:not([type=hidden])");
		var pushed = [];

		fields.each(function (index, item) {

			var name = $(item).data("short-name");
			var id = $(item).attr("id");

			if (!id)
				return true;

			if (!name)
				name = $(item).closest("[data-short-name]").data("short-name");

			if ($(item).is("[type=radio]")) {
				id = id.split("_").slice(0, id.split("_").length - 1).join("_");
			}

			if (pushed.indexOf(id) == -1) {

				result.push({
					id: id,
					name: name
				});

				pushed.push(id);
			}
		});

		return result;
	},

	fillStepFields: function(browser, user) {

		this.doSomethingWithAllFieldsFromCurrentGroup(browser, function(result) {

			result.value.forEach((item, index) => {

				var id = '#' + item.id;

				browser.pause(500);

				if(!user.hasOwnProperty(item.name))
					return false;

				var desiredValue = user[item.name];
				browser.setValue(id, desiredValue);

				if(desiredValue && !!desiredValue.match(/\d\d\d\d-\w*-\d\d?/)) {

					var parts = desiredValue.split("-");
					browser.setValue(id+"_year", parts[0]);
					browser.setValue(id+"_month", parts[1]);
					browser.setValue(id+"_day", parts[2]);
				}

				browser.click(id + "_" + desiredValue);
				browser.click("body");

			});
		});

		return false;

	},

	sendInscription: function (browser){
		browser.waitForElementVisible('button.btn', 20000);
		browser.click("button.btn");
	}


};



module.exports = {
	"Test Carrera" : function (browser) {

		utils.login(browser, "nacho@sportmaniacs.com", "Aerith7");

		race.events.forEach(function(event, index) {
			tests.event(browser, event);
		});
	}
};