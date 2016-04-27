var data = require("../variables");

module.exports = {
 "should search a race by nameQuery" : function (browser) {
 browser
 .url(data.baseUrl)
 .waitForElementVisible(data.nameRace, 3000)
 .setValue(data.nameRace, data.partialRaceSearch)
 .submitForm(data.searchForm)
 .assert.containsText(data.cardTitle, data.sampleRaceName)
 .end();
 },

 "should search a race by province" : function (browser) {
 browser
 .url(data.baseUrl)
 .waitForElementVisible(data.nameRace, 3000)
 .setValue('#provinceRace', '46')
 .setValue(data.nameRace, data.partialRaceSearch)
 .submitForm(data.searchForm)
 .assert.containsText(data.cardTitle, data.sampleRaceName)
 .end();
 }
};