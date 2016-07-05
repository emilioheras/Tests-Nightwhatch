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

    this.calculateName = function (name)
    {
        var matche = name.match(/([\w\d_-]+])$/);
        var match = matche[0].replace(']','');
        return match;
    };

    
    this.buildFormElementSelector = function(field) {

        var selector = "";
        var hashMap = {};
        var elementType = "input";

        hashMap.name = field.name;

        hashMap["data-short-name"] = this.calculateName(field.name);
        hashMap["data-is-field"] = 'data-is-field';
        if (field.value)
            hashMap["data-default"] = field.value;

        if (field.type)
            hashMap["type"] = field.type;

        if (field.required)
            hashMap["required"] = 'required';

        if (field.dependent)
            hashMap["data-dependent"] = JSON.stringify(field.dependent);

        if (field.group)
            hashMap["data-group"] = field.group.key;

        if (field.isPrice == true)
            hashMap["data-price"] = "data-price";

        if (field.ws)
            hashMap["data-ws"] = field.ws.substring(5, field.ws.length);

        if (field.response_type)
            hashMap["data-ws-response-type"] = field.response_type;






        // CONDICIONES RESPECTO AL TYPE
        if (field.type == "select" || field.type == "product")
        {
            elementType = "select";
            delete hashMap["type"];
        }

        // if (field.type == "select")
        // {
        //     elementType = "input";
        //     hashMap["type"] = "text";
        // }

        if (field.type == "phone" || field.type == "number")
            hashMap["type"] = "text";

        if (field.type == "date")
            delete hashMap["type"];
        //FIN


        //CONDICIONES RESPECTO A REQUIRED
        if (field.type == "select")//Establece el required en el label
            delete hashMap["required"];
        //FIN

        //CONDICIONES RESPECTO A WS
        if(field.ws_deferred == true)
            delete hashMap["data-ws"];

        //FIN


        if (field.label == "Género") // no sabemos como diferenciar entre un select de verdad y un radio
        {
            elementType = "input";
            
            delete hashMap["data-group"];
        }
        //FIN




        for (var attribute in hashMap)
            selector += `[${attribute}='${hashMap[attribute]}']`;

        return `${elementType}${selector}`;

    }




};
