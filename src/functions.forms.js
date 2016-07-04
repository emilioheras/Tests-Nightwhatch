var dataRace = require("./race.js");
var form = require("./form.fields.js");



module.exports = new function() {
    
    this.buildUrl = function(browser, url) {
        return (dataRace.baseUrl + "/" + url.replace(/^\//, "").replace(/\/$/, ""));
    };
    
    this.fillLoginform = function(browser, user, pass) {
        browser
            .setValue("#loginFormEmail", user)
            .setValue("#loginFormPassword", pass)
    };
    
    this.login = function(browser, user, pass) {
        loginUrl = this.buildUrl(browser, "/login");
        browser.url(loginUrl);
        this.fillLoginform(browser, user, pass);
        browser.click("body > main > div > div > section:nth-child(2) > div > div > form > fieldset > div.u-pt-md > div > div:nth-child(1) > button");
    };
    
    this.goToEventPage = function(browser, dataRace){
        browser.url(this.buildUrl(browser, "/services/inscription/" + dataRace.race.id + "/" + dataRace.race.event));
        browser.pause(2000);
        browser.click('#custom-content > fieldset > div.col-xs-12.u-mb-lg.inscription-mode-selector > div > div > div:nth-child(2)');
        browser.waitForElementPresent("form", 20000)
    };
    
    this.selectorConstructor = function(field){
        // ESTO ES UN EJEMPLO DE LO QUE QUEREMOS GENERAR (((var selector = '[name ="data[0][Inscription][event_id]"][type = "hidden"][label = ""][required = true][value = "371"]')))
        
        var selector = "";



        field.forEach(function(index, item){
            selector = selector + "[" + item.key + "=" + item.value + "]";

        });
        return selector;
        

    }




};
