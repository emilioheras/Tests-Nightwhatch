

module.exports = new function() {
    
    
    this.stepIsAnInscription = function(step) {
        return !isNaN(step);
    };
    
    this.recalculateStepsForTeamInscriptions = function(steps, user) {

        if(user.teamtype) {
            var team_size = parseInt(user.teamtype.replace(/[^\d]/g, ""));
            steps = steps.slice(0, team_size + 1);
        }

        return steps;
    };

    this.calculateName = function (name)
    {
        var matche = name.match(/([\w\d_-]+])$/);
        var match = matche[0].replace(']','');
        return match;
    };

    this.buildFullAttributesFormElementSelector = function(field) {

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

        if (field.price || field.isPrice)
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

    };
    this.fulfillTheDependencie = function(browser, dependencie){

        if(dependencie) {
            var name = dependencie.field;
            var condition = dependencie.condition;
            var value = dependencie.value;
            console.log(name);
            console.log(value);
            console.log(condition);
        }


        if(condition == "ne"){

        }

        if(condition == "gt"){
            if(value && !!value.match(/\d\d\d\d-\w*-\d\d?/)) {
                var selector = name + "[year]";
                var id =this.buildIdByName(selector);
                var parts = value.split("-");
                browser.setValue(id, (parseInt(parts[0])+1));
            }
        }

        if(condition == "eq"){

        }
        if(condition == "in"){

        }



    };
    this.buildIdByName = function(selector){
        var id = selector.replace(/\]\[|\[/g,"_");
        id = "#" + id.replace("]","");
        return id;
    };
    this.doSomethingWithAllFieldsFromCurrentGroup = function(browser, callBack) {
        browser.execute(this.detectStepFields, [], callBack.bind(this));
    };
    
    this.detectStepFields = function() {
        var result = [];
        var fields = $(".form-register fieldset.active [name]:not([type=hidden])");
        var pushed = [];


        fields.each(function (index, item) {

            var name = $(item).data("short-name");
            var id = $(item).attr("id");
            var type = $(item).attr("type");

            if (!id)
                return true;

            if (!name)
                name = $(item).closest("[data-short-name]").data("short-name");

            if(name == "value")
            {
                var targetElement = $("#" + id.replace("value", "eventattribute_id"));
                name = targetElement.attr("value");
            }

            if ($(item).is("[type=radio]")) {
                id = id.split("_").slice(0, id.split("_").length - 1).join("_");
            }

            if (pushed.indexOf(id) == -1) {
                result.push({
                    id: id,
                    name: name,
                    type: type
                });
                pushed.push(id);
            }

        });

        return result;
    };

    this.fillStepFields = function(browser, user) {

        this.doSomethingWithAllFieldsFromCurrentGroup(browser, function(result) {

            result.value.forEach((item, index) => {

                var id = '#' + item.id;

                browser.pause(300);

                if (id.match(/value/)){
                    if (id) {
                        this.fillExtraFields(browser, id, item);
                    }
                    browser.pause(300);
                }
                
                if(!user.hasOwnProperty(item.name))
                    return false;
                
                var desiredValue = user[item.name];
                
                browser.setValue(id, desiredValue);
                browser.click("body");
                browser.pause(300);
                
                if(desiredValue && !!desiredValue.match(/\d\d\d\d-\w*-\d\d?/)) {

                    var parts = desiredValue.split("-");
                    browser.setValue(id+"_year", parts[0]);
                    browser.setValue(id+"_month", parts[1]);
                    browser.setValue(id+"_day", parts[2]);
                }
                if (item.type == "radio" || item.type == "checkbox")
                    browser.click(id + "_" + desiredValue);
            });
        });
        return false;
    };
    
    this.fillExtraFields = function(browser, id, item){
        browser.getTagName(id, function(result) {
            if (result.value == "select") {
                browser.click(id);
                browser.keys(['\uE015', '\uE006']);
            }
            if (item.type == "text") {
                browser.setValue(id, "ExtraExtra");
            }

            if (item.type == "radio" || item.type == "checkbox"){
                browser.waitForElementPresent(id, 2000);
                browser.click(id);
            }
        });
    };
    
    this.checkInscriptionEndedOk = function (browser){
        if (!this.ImOnTheTPV(browser) || this.ImOnTheThankyouPage(browser));
    };

    this.ImOnTheThankyouPage = function(browser){
        browser.assert.urlContains('thank-you');
    };
    this.ImOnTheTPV = function(browser) {
        browser.assert.urlContains('realizarPago');
    };
    
};




