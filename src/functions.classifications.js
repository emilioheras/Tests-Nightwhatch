
module.exports = new function() {

    this.calculateNumberOfPagesWithAthletes = function(browser, numberOfAthletes) {
        var numberOfPages = numberOfAthletes / 50;
        numberOfPages = Math.ceil(numberOfPages);
        return numberOfPages;
    };

    this.detectNumberOfAthletesPerPage = function() {
        var numberOfAthletes = $("tr.table-tr:last-child > td:nth-child(1)").text();
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
            browser.moveToElement('input.u-ta-c', 10, 10);
            browser.assert.valueContains('input.u-ta-c', pageNumber.toString());
            if(pageNumber == 1) {
                browser.click('.u-mr-lg');
            }else {
                browser.click('a.nav-link:nth-child(4)');
            }

        }
    };

    this.checkThatPressingTheNextButtonWeGoToNextPage = function (browser, pageNumber, athleteNumber) {
        browser.moveToElement('input.u-ta-c', 10, 10);
        browser.assert.valueContains('input.u-ta-c', pageNumber.toString());
        browser.expect.element('tr.table-tr:nth-child(1) > td:nth-child(1)').text.to.equal(athleteNumber.toString());
    };

    this.checkManualPagination = function (browser, numberOfPages) {
        var numberOfFirstAthleteOfThePage = 1;
        browser.moveToElement('input.u-ta-c', 10, 10);
        for (var i = 1; i <= numberOfPages; i++) {
            browser.clearValue('input.u-ta-c');
            browser.setValue('input.u-ta-c', i);
            browser.expect.element('tr.table-tr:nth-child(1) > td:nth-child(1)').text.to.equal(numberOfFirstAthleteOfThePage.toString());
            browser.assert.valueContains('input.u-ta-c', i);
            numberOfFirstAthleteOfThePage += 50;
        }
    };
};