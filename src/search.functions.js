/**
 * Created by Fran on 28/07/2016.
 */
var baseUrl         = "http://web-test.local.sportmaniacs.com/es";

module.exports = new function() {

    this.checkImOnTheTargetRace = function (browser, race) {
        browser.assert.urlEquals(baseUrl + "/services/inscription/" + race);
    };


    this.doSomethingWithAllRaceNames = function(browser, callBack) {

        browser.execute(this.findAllRaceNamesFromTheDom, [], callBack.bind(this));
    };

    this.findAllRaceNamesFromTheDom = function () {
        var numPaginas = $("body > main > div > div:last-child > nav > ul > li:last-child > a").text();
        numPaginas = parseInt(numPaginas);
        var elem=$("div.card-block > h3").text();
        if (numPaginas) {
            for (var i = 2; i <= numPaginas; i++) {
                console.log(i);
                $(`body > main > div > div:nth-child(3) > nav > ul > li:nth-child(${i}) > a`).click();
                elem = elem + $("div.card-block > h3").text();
            }
        }
        return elem;
    };


    this.findTheTargetRaceOnTheResult = function(browser, name, part){

        this.doSomethingWithAllRaceNames(browser, function(result) {
            browser.pause(5000);
            console.log(result.value);
            console.log("*****TROZO DE LA CARRERA = "+ part);
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