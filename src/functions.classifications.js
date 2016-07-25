 
module.exports = new function() {

    this.calculateNumberOfPagesWithAthletes = function(browser, numberOfAthletes) {
        var numberOfPages = numberOfAthletes / 50;
        numberOfPages = Math.ceil(numberOfPages);
        return numberOfPages;
    };

    this.calculateNumberOfRowsInTheTable = function(browser) {
    	// var numberOfRows = document.getElementById("ranking-table-renderer").rows.length -1;
    	
    	var id = "#ranking-table-renderer > tbody > tr";
    	var rows = `${id}`;
    	var numberOfRows = rows.length;
    	console.log(numberOfRows);
    	
    	return numberOfRows;
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
        	var realCounterAthletes = counterAthletes + 50;
        	var restOfAthletes = result.value - realCounterAthletes;
        	var total = realCounterAthletes + restOfAthletes;
            browser.assert.equal(result.value, total);
        }
    )};
};