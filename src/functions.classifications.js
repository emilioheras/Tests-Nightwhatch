 
module.exports = new function() {

    this.calculateNumberOfPagesWithAthletes = function(browser, numberOfAthletes) {
        var numberOfPages = numberOfAthletes / 50;
        numberOfPages = Math.ceil(numberOfPages);
        return numberOfPages;
    };

    this.calculateNumberOfRowsInTheTable = function(browser) {
    	// var numberOfRows = document.getElementById("ranking-table-renderer").rows.length -1;
    	
    	var id = "#ranking-table-renderer > tbody > tr";
    	var numberOfRows = `${id}`;
    	console.log(numberOfRows.length);
    	
    	return numberOfRows;
    };
};