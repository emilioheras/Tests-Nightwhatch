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
        hashMap["name"] = field.name;
        var breakFields = [
            "tipodni",
            "mail",
            "code",
            "tipodni_auth"
        ];
        console.log(breakFields);
        if (field.type == "date")
            return false;

        hashMap["data-short-name"] = this.calculateName(field.name);

        if (hashMap["data-short-name"] == "prefix_phone" || hashMap["data-short-name"] == "prefix_emergency")
            return false;

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

        if (field.isPrice)
            hashMap["data-price"] = "data-price";

        if (field.ws) {
            var newWs = field.ws;
            newWs = newWs.replace("http:", "");
            newWs = newWs.replace("https:", "");
            hashMap["data-ws"] = newWs;
        }

        if(field.ws_deferred == true)
            hashMap["data-ws-validation"] = hashMap["data-ws"] ;

        if (field.response_type)
            hashMap["data-ws-response-type"] = field.response_type;

        //CASOS DEL TYPE
        if (field.type == "select" || field.type == "product")
        {
            elementType = "select";
            delete hashMap["type"];

            if (field.required)
                delete hashMap["required"]
        }
        if (field.type == "phone" || field.type == "number")
            hashMap["type"] = "text";
        //FIN


        if(breakFields.indexOf(hashMap["data-short-name"]) != -1 && field.type != "hidden")
            hashMap["data-break"] = "data-break";





        //CASOS CONCRETOS
        if (hashMap["data-short-name"] == "gender")
        {
            elementType = "input";
            delete hashMap["data-is-field"];
            delete hashMap["data-short-name"];
            delete hashMap["data-group"];
        }

        if (hashMap["data-short-name"] == "club")
        {
            elementType = "input";
            hashMap["type"] = "text";
        }
        //FIN


        for (var attribute in hashMap)
            selector += `[${attribute}='${hashMap[attribute]}']`;

        return `${elementType}${selector}`;

    }




};
