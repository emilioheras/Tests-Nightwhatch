var data = require("../variables");
var utils = require("../functions");

module.exports = {
  "should go to the classification page" : function (browser) {
    utils.logout(browser);
    browser.url(utils.buildUrl(browser, data.getRaceClassificationUrl(data.races.classification.race)));
    browser.click(data.classificationButton);
    browser.pause(3000);
    browser.assert.urlEquals(utils.buildUrl(browser, data.getRaceClassificationResultsUrl(data.races.classification.race, data.races.classification.event)));
    browser.assert.elementPresent("#rankingTable > table");
    browser.end();
  },

  "should change the category succesfully" : function (browser) {
    utils.logout(browser);
    browser.url(utils.buildUrl(browser, data.getRaceClassificationResultsUrl(data.races.classification.race, data.races.classification.event)));
    browser.pause(3000);
    browser.click('#eventCategory');
    browser.keys(['\uE015','\uE015', '\uE006']);
    browser.pause(5000);
    browser.assert.elementPresent("#rankingTable > table");
    browser.assert.containsText(data.rankingTable, data.others.atleta.nombre);
    browser.end();
  },

  "should go to athlete" : function (browser) {
    browser.url(utils.buildUrl(browser, data.getRaceClassificationResultsUrl(data.races.classification.race, data.races.classification.event)));
    browser.waitForElementVisible('tr.table-tr:nth-child(1) > td:nth-child(7) > a:nth-child(1)', 20000);
    
    browser.execute(function(data) {$('tr.table-tr:nth-child(1) > td:nth-child(7) > a:nth-child(1)').click();
       return true;
    });

    browser.waitForElementVisible('.nav-tabs > li:nth-child(2) > a:nth-child(1)', 20000);
    browser.assert.urlEquals(utils.buildUrl(browser, data.getAthleteClassificationResultsUrl(data.races.classification.race, data.races.classification.event)));
    browser.end();
  }, 
  
  "should search by club" : function (browser) {
    browser.url(utils.buildUrl(browser, data.getSearchByClubUrl(data.races.classification.race, data.races.classification.event)));
    browser.waitForElementVisible('input.form-control:nth-child(2)', 20000);
    browser.setValue('input.form-control:nth-child(2)', data.others.atleta.club);
    browser.keys('\uE006');
    browser.waitForElementVisible('tr.table-tr:nth-child(1) > td:nth-child(3)', 20000);
    browser.assert.containsText('tr.table-tr:nth-child(1) > td:nth-child(3)', data.others.atleta.nombre);
    browser.end();
  },
  
  "should search by athlete" : function (browser) {
    browser.url(utils.buildUrl(browser, data.getRaceClassificationResultsUrl(data.races.classification.race, data.races.classification.event)));
    browser.assert.elementPresent('#dorsal');
    browser.setValue('#dorsal', data.others.atleta.nombreCorto);
    browser.keys('\uE006');
    browser.waitForElementVisible('tr.table-tr:nth-child(1) > td:nth-child(3)', 20000);
    browser.assert.containsText('tr.table-tr:nth-child(1) > td:nth-child(3)', data.others.atleta.nombre);
    browser.end();
  },

  "should search by dorsal" : function (browser) {
    browser.url(utils.buildUrl(browser, data.getRaceClassificationResultsUrl(data.races.classification.race, data.races.classification.event)));
    browser.waitForElementVisible('#dorsal', 20000);
    browser.setValue('#dorsal', data.others.atleta.dorsal);
    browser.keys('\uE006');
    // browser.url(utils.buildUrl(browser, 'races/sportmaniacs-clasificacion/330/results/official/search/12639'));
    browser.waitForElementVisible('tr.table-tr:nth-child(1) > td:nth-child(3)', 20000);
    browser.assert.containsText('tr.table-tr:nth-child(1) > td:nth-child(3)', data.others.atleta.nombre);
    browser.end();
  }
};