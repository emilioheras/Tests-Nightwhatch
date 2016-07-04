var formFunctions = require("../functions.forms.js");
var form = require("../form.fields.js");
var dataRace = require("../race.js");
tests = {

    event: function(browser, field) {


        formFunctions.selectorConstructor(field);
        // fields.forEach (function(index, field){
        //     console.log(selector);
        //     // Ve a la pagina
        //     // Busca el selector en la pagina
        // });
    }


};




module.exports = {
    "Test Formularios" : function (browser) {
        formFunctions.login (browser, "nacho@sportmaniacs.com", "Aerith7");

        formFunctions.goToEventPage(browser,dataRace);

        form.data.fields.forEach (function(field, index) {

            // if (field.type=='hidden'){
            //     browser.waitForElementNotVisible(formFunctions.buildFormElementSelector(field), 1);
            // }else {
                browser.waitForElementPresent(formFunctions.buildFormElementSelector(field), 1000);

        });

    }


}
