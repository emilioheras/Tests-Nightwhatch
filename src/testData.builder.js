/**
 * Created by Fran on 11/07/2016.
 */
var manager = require("./api.manager");
var raceBuilder = require("./race.builder");

module.exports = new function() {

    this.buildTestData = function(api) {
        var races = manager.getRacesFromApi(api);
<<<<<<< HEAD
        var data = raceBuilder.transform(races);
=======
        var data =  raceBuilder.transform(races);
>>>>>>> release/Release-1
        return data;
    }

}