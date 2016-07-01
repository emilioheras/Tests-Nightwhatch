var formFunctions = require("./functions.forms.js");
var form = require("./form.fields.js");


tests = {

    event: function(browser, fields) {

        fields.forEach(function(index,field){
            var selector =formFunctions.selectorConstructor(field);
            // Ve a la pagina
            // Busca el selector en la pagina
        });
    }


}




module.exports = {
    "Test Formularios" : function (browser) {
        formFunctions.login(browser, "nacho@sportmaniacs.com", "Aerith7");
        
        // race.events.forEach(function(event, index) {
        //     tests.event(browser, event);
        // });

    }


}