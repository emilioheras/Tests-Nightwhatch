var form = require("./form.fields.js");
var baseUrl = "http://sportmaniacs.com/es";
var request = require('sync-request');


module.exports = new function() {
    
    this.getRacesFromApi = function(api){
        var races = request('GET', `${api}/api/races?limit=2&date=2016-07-06&page=1`);
        races = JSON.parse(races.getBody()).data;
        return races;
    };
    
    this.getEventsFromApi = function (api, race) {
        var events = request('GET', `${api}/api/events?race=${race.id}`);
        events = JSON.parse(events.getBody()).data;
        return events;
    };

    this.getFormFromApi = function (api, event) {
        var form = request('GET', `${api}/api/services/inscription/form/${event.id}`);
        form = JSON.parse(form.getBody()).data;
        return form;
    };
    
    

    this.login = function(browser, user, pass) {
        loginUrl = this.buildUrl(browser, "/login");
        browser.url(loginUrl);
        this.fillLoginform(browser, user, pass);
        browser.click("button[data-async-form-submit]");
    };
    
    
    
    
    
    this.buildUrl = function(browser, url) {
        return (baseUrl + "/" + url.replace(/^\//, "").replace(/\/$/, ""));
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
        browser.click("button[data-async-form-submit]");
    };
    
    this.goToEventPage = function(browser, raceId, eventId){
        browser.url(this.buildUrl(browser, "/services/inscription/" + raceId + "/" + eventId));
        browser.pause(2000);
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
        hashMap["data-is-field"] = 'data-is-field';
        hashMap["data-short-name"] = this.calculateName(field.name);

        var breakFields = [
            "tipodni",
            "mail",
            "code",
            "tipodni_auth"
        ];
        var asRadio = [
            "gender"
        ];
        var asTypeAhead = [
            "club"
        ];

        if (field.type == "date")
            return false;

        if (hashMap["data-short-name"] == "prefix_phone" || hashMap["data-short-name"] == "prefix_emergency")
            return false;

        if (field.options && field.type == "select" && field.options.length == 1 && !field.ws)
            field.type = "hidden";

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
            hashMap["data-ws"] = newWs.replace("https:", "");
        }

        if(field.ws_deferred == true)
            hashMap["data-ws-validation"] = hashMap["data-ws"];

        if (field.response_type)
            hashMap["data-ws-response-type"] = field.response_type;

        if(breakFields.indexOf(hashMap["data-short-name"]) != -1 && field.type != "hidden")
            hashMap["data-break"] = "data-break";
        

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
        if(asRadio.indexOf(hashMap["data-short-name"]) != -1 && field.type != "hidden") {
            elementType = "input";
            hashMap["type"] = "radio";
            delete hashMap["data-is-field"];
            delete hashMap["data-short-name"];//
            delete hashMap["data-group"];
        }

        if(asTypeAhead.indexOf(hashMap["data-short-name"]) != -1 && field.type != "hidden") {
            elementType = "input";
            hashMap["type"] = "text";
        }

        
        //FIN


        for (var attribute in hashMap)
            selector += `[${attribute}='${hashMap[attribute]}']`;

        return `${elementType}${selector}`;

    }




};
