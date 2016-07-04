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
    
    this.goToEventPage = function(browser){
        browser.url(this.buildUrl(browser, "/services/inscription/" + dataRace.race.id + "/" + dataRace.race.event));
        browser.pause(2000);
        browser.click('#custom-content > fieldset > div.col-xs-12.u-mb-lg.inscription-mode-selector > div > div > div:nth-child(2)');
        browser.waitForElementPresent("form", 20000)
    };
    
    this.buildFormElementSelector = function(field){

        var selector = "";
        var hashMap = {};
        var elementType = "input";

        hashMap.name = field.name;

        // CONDICIONES RESPECTO AL TYPE
        if (field.type)
            hashMap["type"] = field.type;

        if (field.type == "select" || field.type == "product")//product ¿es un tipo válido?
            {
                elementType = "select";
                delete hashMap.type;
            }

        if (field.type == "select" && field.label == "Club")
        {
            elementType = "input";
            hashMap["type"] = "text";
        }

        if (field.type == "phone" || field.type == "number")//¿esto tiene que camiar los tipos de verdad a text?
            hashMap["type"] = "text";

        if (field.label == "Prefijo") // ni idea de como validar esto
        {
            delete hashMap.type;
            delete hashMap.name;
        }
        if (field.label == "Género")// no sabemos como diferenciar entre un select de verdad y un radio
            elementType = "input";

        if (field.type == "date")
            delete hashMap.type;

        //FIN DE LAS CONDICIONES RESPECTO AL TYPE


        //CONDICIONES RESPECTO A REQUIRED
        if (field.required == true)
            hashMap["required"] = 'required';

        if (field.type == "select")//Establece el required en el label
            delete hashMap["required"];

        //FIN DE LAS CONDICIONES RESPECTO AL REQUIRED
        


        //CONDICIONES RESPECTO A DEPENDENT
        if(field.dependent)
            hashMap["data-dependent"] = JSON.stringify(field.dependent);

        //FIN DE LAS CONDICIONES RESPECTO AL DEPENDENT




        for (var attribute in hashMap)
            selector += `[${attribute}='${hashMap[attribute]}']`;

        return `${elementType}${selector}`;

    }




};
