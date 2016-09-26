var baseUrl = "http://web-test.local.sportmaniacs.com/es";
//var baseUrl         = "https://sportmaniacs.com/es";
var navegation      = require("./navegation.functions");
var dorsal      = require("./dorsal.Classifications");
var searchTargets     = require("./searchTargets.Classifications");


module.exports = new function() {

    this.detectNumberOfAthletesPerPage = function() {
        var numberOfAthletes = $("#ranking-table-renderer tr:last-child > td:nth-child(1)").text();
        numberOfAthletes = parseInt(numberOfAthletes);
        return numberOfAthletes;        
    };

   this.doSomethingWithTheNumAthletes = function(browser, callBack) {

        browser.execute(this.detectNumberOfAthletesPerPage, [], callBack.bind(this));
    };

    this.checkNumOfAthleteOfEachPage = function(browser, counterAthletes) {    	 
        this.doSomethingWithTheNumAthletes(browser, function(result) {
        	
            browser.assert.equal(result.value, counterAthletes);
        }
    )};

    this.checkNumOfAthleteOfLastPage = function(browser, counterAthletes) {    	 
        this.doSomethingWithTheNumAthletes(browser, function(result) {
        	var restOfAthletes = counterAthletes - result.value;
        	var total = counterAthletes - restOfAthletes;
            browser.assert.equal(result.value, total);
        })
    };

    this.getListOfTimes = function() {
        var listOfTimesInSeconds = [];
        var stringSingleTime = "";
        var timeInSeconds = 0;
        var numberOfRows = $("#ranking-table-renderer > tbody > tr").length;

        for (var i=1; i<=numberOfRows; i++) {
            stringSingleTime = $("tr.table-tr:nth-child(" + i + ") > td:nth-child(5)").text();

            var dataTime = stringSingleTime.split(":");
            timeInSeconds = parseInt(dataTime[0])*3600 + parseInt(dataTime[1])*60 + parseInt(dataTime[2]);
            listOfTimesInSeconds[i-1] = timeInSeconds;
        }
        return listOfTimesInSeconds;
    };

    this.doSomethingWithTheListOfTimes = function(browser, callBack) {

        browser.execute(this.getListOfTimes, [], callBack.bind(this));
    };

    this.checkTheOrderOfTimes = function(browser) {
        this.doSomethingWithTheListOfTimes(browser, function(result) {
            var arrayOfTimes = result.value;
            var cloneArrayOfTimes = result.value.slice(0);
            cloneArrayOfTimes = cloneArrayOfTimes.sort(function (a, b) {return a - b;});

            for (var i=0; i<arrayOfTimes.length; i++)
                browser.assert.equal(arrayOfTimes[i], cloneArrayOfTimes[i]);
        })
    };

    this.checkThatWeAreOnTheSamePageAfterClickingNextOrPrevious = function (browser, pageNumber, athleteNumber) {
        for (var i=0; i<2; i++) {
            browser.expect.element('tr.table-tr:nth-child(1) > td:nth-child(1)').text.to.equal(athleteNumber.toString());
            browser.moveToElement('#pagination input', 10, 10);
            browser.assert.valueContains('#pagination input', pageNumber.toString());
            if(pageNumber == 1) {
                browser.click('.u-mr-lg');
            }else {
                browser.click('a.nav-link:nth-child(4)');
            }
        }
    };

    this.checkThatPressingTheNextButtonWeGoToNextPage = function (browser, pageNumber, athleteNumber) {
        browser.moveToElement('#pagination input', 10, 10);
        browser.assert.valueContains('#pagination input', pageNumber.toString());
        browser.expect.element('tr.table-tr:nth-child(1) > td:nth-child(1)').text.to.equal(athleteNumber.toString());
    };

    this.checkManualPagination = function (browser, numberOfPages) {
        var numberOfFirstAthleteOfThePage = 1;
        browser.moveToElement('#pagination input', 10, 10);
        for (var i = 1; i <= numberOfPages; i++) {
            browser.clearValue('#pagination input');
            browser.setValue('#pagination input', i);
            browser.expect.element('tr.table-tr:nth-child(1) > td:nth-child(1)').text.to.equal(numberOfFirstAthleteOfThePage.toString());
            browser.assert.valueContains('#pagination input', i);
            numberOfFirstAthleteOfThePage += 50;
        }
    };

    this.takeADorsal = function(browser) {
        var dorsales = [];
        dorsales[0] = $("tr.table-tr:nth-child(1) > td:nth-child(2)").text();
        dorsales[1] = $("tr.table-tr:last-child > td:nth-child(2)").text();
        return dorsales;
    };

    this.doSomethingWithTheDorsal = function(browser, callBack) {
        browser.execute(this.takeADorsal, [], callBack.bind(this));
    };

    this.checkifgoToTheAthletePage = function(browser, raceId, eventId) {

        this.doSomethingWithTheDorsal(browser, function(result) {
            var esPrimerDorsal = true;
                result.value.forEach(function(dorsal){
                    var url = baseUrl + "/races/" + raceId + "/" + eventId + "/results/athlete/"+ dorsal +"/results";
                    if (!esPrimerDorsal){
                        browser.back();
                        navegation.clickOnOfficialClassificationTab(browser);
                        navegation.superClick(browser, "#ranking-table-renderer tbody tr:last-child");
                    }else{
                        navegation.superClick(browser, "#ranking-table-renderer tbody tr:nth-child(1)");
                        esPrimerDorsal = false;
                    }
                    browser.assert.urlEquals(url, "Visitada la url del atleta: " + dorsal);
                });
            });
        };


    this.takeNumberOfOptions = function (browser) {
        var numberOfOptions = $('#eventCategory > option').length;
        return numberOfOptions;
    };


    this.doSomethingWithNumberOfOptions = function(browser, callBack) {

        browser.execute(this.takeNumberOfOptions, [], callBack.bind(this));
    };

    this.checkDorsalByCategories = function(browser, event) {
        var allDorsal = dorsal.dorsalesClasificacion;
        this.doSomethingWithNumberOfOptions(browser, function (result){
            for(var i=1; i<result.value; i++){
                navegation.selectNextOptionClassification(browser);
                for(var property in allDorsal) {
                    if(property == event){
                        var dorsalOfEvent = allDorsal[property];
                        this.checkFirstAndLastDorsal(browser, dorsalOfEvent[i-1]);
                    }
                }
            }
        });
    };

    this.checkFirstAndLastDorsal = function (browser, jsonObject){
        if(jsonObject.pages >= 1){
            browser.expect.element('tr.table-tr:nth-child(1) > td:nth-child(2)').text.to.contain(jsonObject.first);
            browser.clearValue('#pagination input');
            browser.setValue('#pagination input', jsonObject.pages);
            browser.waitForElementVisible('tr.table-tr:last-child > td:nth-child(2)', 20000);
            browser.expect.element('tr.table-tr:last-child > td:nth-child(2)').text.to.contain(jsonObject.last);
        }else if(jsonObject.pages == 0){
            //browser.waitForElementVisible('#pagination span', 20000);
            browser.expect.element('div.u-ta-c > span:nth-child(3)').text.to.contain("0");
            browser.assert.elementNotPresent("#ranking-table-renderer >tbody >tr", "No hay atletas para esta opcion clasificacion");
        }
    };

    this.checkFinderAthletes = function (browser, event) {
        browser.moveToElement('.header', 10, 10);
        browser.click("#eventCategory");
        browser.click("#eventCategory > option:nth-child(1)");
        browser.click("#eventCategory > option:nth-child(1)");
        var targets = searchTargets.busquedasClasificacion;
        for(var property in targets) {
            if (property == event) {
                var targetOfEvent = targets[property];
                for(var i=0; i < targetOfEvent.length; i++){
                    this.insertTargetInFinder(browser, targetOfEvent[i]);
                }
            }
        }
    };

    this.insertTargetInFinder = function (browser, jsonObject) {
        browser.clearValue('#dorsal');
        browser.setValue('#dorsal', jsonObject.target);
        if(jsonObject.pages >= 1){
            browser.expect.element('tr.table-tr:nth-child(1) > td:nth-child(2)').text.to.contain(jsonObject.first);
            browser.clearValue('#pagination input');
            browser.setValue('#pagination input', jsonObject.pages);
            browser.waitForElementVisible('tr.table-tr:last-child > td:nth-child(2)', 20000);
            browser.expect.element('tr.table-tr:last-child > td:nth-child(2)').text.to.contain(jsonObject.last);
        }else{
            browser.expect.element('div.u-ta-c > span:nth-child(3)').text.to.contain("0");
            browser.assert.elementNotPresent("#ranking-table-renderer >tbody >tr", "No hay datos del atleta");
        }
    };

    this.checkThatTheGraphsAreDisplayed = function (browser, event, isLogged, hasParticipated) {
        if (!isLogged && !hasParticipated){
            browser.waitForElementVisible('#highcharts-6 g.highcharts-series path:nth-child(1)', 20000, 'Gráfica Participación por género con usuario no logueado en evento '+event);
            browser.waitForElementVisible('#highcharts-0 g.highcharts-series path:nth-child(1)', 20000, 'Gráfica Participación por categoría con usuario no logueado '+event);
            browser.waitForElementVisible('#highcharts-2 g.highcharts-series rect:nth-child(1)', 20000, 'Gráfica Media de tiempo por categoría con usuario no logueado '+event);
            browser.waitForElementVisible('#highcharts-4 g.highcharts-series rect:nth-child(1)', 20000, 'Gráfica Media de tiempo por Club con usuario no logueado '+event);
            browser.waitForElementVisible('#highcharts-8 g.highcharts-series:nth-child(1) rect:nth-child(1)', 20000, 'Gráfica Intervalos de tiempo por género con usuario no logueado '+event);
        }else if (isLogged && hasParticipated && event == "337" ){
            browser.waitForElementVisible('#highcharts-10 svg', 20000, 'Gráfica Participación por género con usuario logueado y participante en evento '+event);
            browser.waitForElementVisible('#highcharts-6 g.highcharts-series path:nth-child(1)', 20000, 'Gráfica Participación por género con usuario logueado y participante en evento '+event);
            browser.waitForElementVisible('#highcharts-0 g.highcharts-series path:nth-child(1)', 20000, 'Gráfica Participación por categoría con usuario logueado y participante '+event);
            browser.waitForElementVisible('#highcharts-2 g.highcharts-series rect:nth-child(1)', 20000, 'Gráfica Media de tiempo por categoría con usuario logueado y participante '+event);
            browser.waitForElementVisible('#highcharts-4 g.highcharts-series rect:nth-child(1)', 20000, 'Gráfica Media de tiempo por Club con usuario logueado y participante '+event);
            browser.waitForElementVisible('#highcharts-8 g.highcharts-series:nth-child(1) rect:nth-child(1)', 20000, 'Gráfica Intervalos de tiempo por género con usuario logueado y participante '+event);
        }else{
            browser.waitForElementVisible('#highcharts-6 g.highcharts-series path:nth-child(1)', 20000, 'Gráfica Participación por género con usuario logueado en evento '+event);
            browser.waitForElementVisible('#highcharts-0 g.highcharts-series path:nth-child(1)', 20000, 'Gráfica Participación por categoría con usuario logueado en evento '+event);
            browser.waitForElementVisible('#highcharts-2 g.highcharts-series rect:nth-child(1)', 20000, 'Gráfica Media de tiempo por categoría con usuario logueado en evento '+event);
            browser.waitForElementVisible('#highcharts-4 g.highcharts-series rect:nth-child(1)', 20000, 'Gráfica Media de tiempo por Club con usuario logueado en evento '+event);
            browser.waitForElementVisible('#highcharts-8 g.highcharts-series:nth-child(1) rect:nth-child(1)', 20000, 'Gráfica Intervalos de tiempo por género con usuario logueado en evento '+event);
        }
    };

    this.getNumberOfElements = function (browser) {
        var numberOfElementsA = $('#highcharts-0 g.highcharts-legend g.highcharts-legend-item').length;
        var numberOfElementsB = $('#highcharts-4 g.highcharts-series rect').length;
        var allAmounts = [numberOfElementsA, numberOfElementsB];
        return allAmounts;
    };

    this.doSomethingWithNumberOfElements = function(browser, callBack) {
        browser.execute(this.getNumberOfElements, [], callBack.bind(this));
    };

    this.checkThatTheElementsAreNotOfAParticularColor = function(browser, color) {
        this.doSomethingWithNumberOfElements(browser, function(result){
            console.log(result.value);
            for(var i=1; i<=result.value[0]; i++){
                browser.expect.element('#highcharts-0 g.highcharts-legend g.highcharts-legend-item:nth-child('+i+') rect').to.have.css('fill').which.does.not.equal(color);
                browser.expect.element('#highcharts-0  g.highcharts-series-0  path:nth-child('+i+')').to.have.css('fill').which.does.not.equal(color);
                browser.expect.element('#highcharts-2 g.highcharts-series rect:nth-child('+i+')').to.have.css('fill').which.does.not.equal(color);
            }
            for(var i=1; i<=result.value[1]; i++){
                browser.expect.element('#highcharts-4 g.highcharts-series rect:nth-child('+i+')').to.have.css('fill').which.does.not.equal(color);
            }
        });
    };

    this.checkThatTheElementsAreOfAParticularColor = function (browser, arrayOfElement, color) {
         arrayOfElement.forEach(function(element){
            browser.expect.element(element).to.have.attribute('fill').equals(color);
         });
    };
};