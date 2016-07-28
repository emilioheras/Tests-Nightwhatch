/**
 * Created by Fran on 28/07/2016.
 */
var baseUrl         = "http://web-test.local.sportmaniacs.com/es";

module.exports = new function() {

    this.checkImOnTheTargetRace = function (browser, race) {
        browser.assert.urlEquals(baseUrl + "/services/inscription/" + race);
    };


    this.doSomethingWithAllRaceNames = function(browser, callBack) {

        browser.execute(this.findAllRaceNamesFromTheDom, [browser], callBack.bind(this));
    };



    this.findAllRaceNamesFromTheDom = function (browser) {
        var numPags = $("body > main > div > div:last-child > nav > ul > li:last-child > a").text();


        var elem=$("div.card-block > h3").text();

        for (var i = 2; i <= numPags; i++) {
                browser.click("body > main > div > div:nth-child(3) > nav > ul > li:nth-child(" + i + ") > a");
                browser.waitForElementPresent("body > main > div > div:nth-child(3) > nav > ul > li:nth-child(" + i + ") > a", 20000);
                elem = elem + $("div.card-block > h3").text();
        }

        return elem;
    };


    this.findTheTargetRaceOnTheResult = function(browser, name){

        this.doSomethingWithAllRaceNames(browser, function(result) {
            console.log(result.value);
            var raceNames = this.formatRaceNames(result.value);
            console.log(raceNames);

        });
    };



    this.formatRaceNames = function(elem) {
        var raceNames = elem.replace(/([\ \t]+([\ \t]))/g, '');
        raceNames = raceNames.replace(/(\n)/g, ",");
        raceNames = raceNames.replace(/(^,)/, "");
        raceNames = raceNames.replace(/(,$)/, "");
        raceNames = raceNames.split(",,");
        return raceNames;
    }
}