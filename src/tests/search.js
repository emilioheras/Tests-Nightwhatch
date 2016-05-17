var data = require("../variables");
var utils = require("../functions");

module.exports = {
 "should search a race by name" : function (browser) { // 
 	browser.url(data.baseUrl);
 	browser.waitForElementVisible(data.nameRace, 3000);
 	browser.setValue(data.nameRace, data.races.search.partialName);
 	browser.submitForm(data.searchForm);
 	browser.assert.containsText(data.cardTitle, data.races.search.race);
 	browser.end();
 },

 "should search a race by province" : function (browser) { 

 	var firstCardLocationSelector = ".blockGrid-item:first-child .card-footer";

 	browser.url(data.baseUrl);
 	browser.waitForElementVisible(data.nameRace, 3000);
 	browser.setValue('#provinceRace', data.others.provinceOfRace);
 	browser.submitForm(data.searchForm);
	browser.getText(firstCardLocationSelector, function(text) {
 		
 		this.assert.containsText(firstCardLocationSelector, text.value);

		browser.execute(
			
			function(city) {

				var request = new XMLHttpRequest();
				request.open('GET', "https://maps.googleapis.com/maps/api/geocode/json?address=" + city, false);
				request.send(null);

				var response = JSON.parse(request.responseText);

				response.results[0].address_components.forEach(function(item, index, array) {
					if(item.types[0] == "administrative_area_level_2")
						result = item.long_name;
				});

				return result;

			}, [text.value], 

			function(result) {
				this.assert.equal(result.value, data.others.provinceOfRace);
			}
		);
 	});	

 	browser.end();
 },

 "should search a race by province AND name" : function (browser) { 
 	browser.url(data.baseUrl)
 	browser.waitForElementVisible(data.nameRace, 3000);
 	browser.setValue('#nameRace', data.races.search.race);
 	browser.setValue('#provinceRace', data.races.search.province);
 	browser.submitForm(data.searchForm);
 	browser.assert.containsText('.h2', data.races.search.race);
  	browser.end();
 }
};