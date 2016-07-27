

module.exports = new function() {


//**************************Funciones de precios*******************************************

    this.getPriceOptions = function(field){

        if(field.price){
            return [parseFloat(field.price)];
        }

        if(field.options && field.options.length > 1){
            var prices = [];
            field.options.forEach((option, index) => {
                if(option.price != undefined)
                    prices.push(option);
            });
            if(prices.length) {
                return prices;
            }
        }
    };
    

    this.doSomethingWithThePrice= function(browser, callBack){
        browser.execute(this.getCurrentPrice, [browser] , callBack.bind(this));
    };


    this.getCurrentPrice = function(browser){
        var currentPrice = $("#the-price > tbody > tr:last-child > td:last-child").text();
        return currentPrice;
    };

    
    this.checkPricesToEachChange = function(browser, option, id){

        this.doSomethingWithThePrice(browser, function(result) {
            var currentPrice = result.value.replace("€", "");
            currentPrice = parseFloat(currentPrice);
            
            
            if(typeof option == "number") {
                browser.moveToElement("#custom-content > fieldset > div.subgroups-container.animated.fadeInDown > div:nth-child(6) > h2", 10, 10);
                browser.click(id);
                browser.pause(1000);
                var modifiedPrice = currentPrice + option;
            }
            if(typeof option == "object"){
                browser.setValue(id, option.value);
                browser.keys("\uE004");
                browser.pause(1000);
                var modifiedPrice = currentPrice + option.price;
                if(id.match(/selprice/) && option.key != ""){
                    var modifiedPrice = option.price;
                }
            }
            
            var desiredValue = this.giveFormatToThePrice(modifiedPrice);


            browser.getText("#the-price > tbody > tr:last-child > td:last-child", function(result) {
                this.assert.equal(result.value, desiredValue);
            });
            if(typeof option == "number") {
                browser.click(id);
                browser.pause(1000);
            }
            if(typeof option == "object"){
                browser.setValue(id, "Elige una opción");
                browser.keys("\uE004");
                browser.pause(1000);
            }

        });
    };


    this.giveFormatToThePrice = function(modifiedPrice){
        var value = modifiedPrice+"";
        if (value.indexOf(".") == -1){
            value = value+".00";
        }

        if(value.match(/\../) && !value.match(/\.../)){
            value = value+"0";
        }

        value = value+"€";
        return value;
    };







//**************************Funciones de dependencias*******************************************
    

    this.generateArrayOfIdsFromTheCurrentStep = function(fields, step) {
        var object ={};
        var arrayOfIdsOfTheCurrentStep=[];
        fields.forEach((field) => {
           if(field.group.key == step){
               var id = this.buildIdByName(field.name);
               arrayOfIdsOfTheCurrentStep.push(id);
           }
        });
        object[step]=arrayOfIdsOfTheCurrentStep;
        return object;
    };


    this.checkDependenciesFromStepFields = function(browser, field, user, raceFieldCollection, idOfTheDependencyField) {
            var idOfTheField = this.buildIdByName(field.name);
            var fieldIWantToChange = this.findDependentField(field.dependent.field, raceFieldCollection);
            var desiredValue = this.calculateFullFillingValue[field.dependent.condition](field.dependent, fieldIWantToChange);
            var nonDesiredValue = this.caculateNotFulFillingValue[field.dependent.condition](field.dependent, fieldIWantToChange, desiredValue);

            browser.execute(function (idOfTheDependencyField) {
                var classOfField = $(idOfTheDependencyField).hasClass("form-control locked");
                return classOfField;
            }, [idOfTheDependencyField], function (result) {
                if (!result.value) {
                    setTheValueAndCheckThatFieldIsPresent[fieldIWantToChange.type](browser, idOfTheDependencyField, desiredValue, user, fieldIWantToChange, idOfTheField);
                    setTheValueAndCheckThatFieldIsNotPresent[fieldIWantToChange.type](browser, idOfTheDependencyField, nonDesiredValue, user, fieldIWantToChange, idOfTheField);
                }
            });

        
    };
    

    setTheValueAndCheckThatFieldIsPresent = {

        checkbox: function(browser, id, desiredValue, user, field, idOfTheField) {
            browser.moveToElement(id, 10, 10);
            if(desiredValue){
                browser.click(id);
                browser.keys("\uE004");
                browser.waitForElementVisible(idOfTheField, 1000);
                browser.click(id);
            }else{
                browser.keys("\uE004");
                browser.waitForElementVisible(idOfTheField, 1000);
            }
        },

        radio: function(browser, id, desiredValue, user, field, idOfTheField) {
            browser.moveToElement(id, 10, 10);
            if (desiredValue) {
                browser.click(id);
                browser.keys("\uE004");
                browser.waitForElementNotVisible(idOfTheField, 1000);
                browser.click(id);
            } else {
                browser.keys("\uE004");
                browser.waitForElementNotVisible(idOfTheField, 1000);
            }
        },

        select: function(browser, id, desiredValue, user, field, idOfTheField) {
            if (desiredValue == undefined) {
                var short_name = buildShortNameById(id);
                browser.setValue(id, user[short_name]);
                browser.keys("\uE004");
                browser.waitForElementVisible(idOfTheField, 1000);
            }
            if(desiredValue) {

                if(desiredValue.length == undefined) {
                    desiredValue = [desiredValue];
                }
                desiredValue.forEach((value, index) => {
                    browser.setValue(id, value);
                    browser.keys("\uE004");
                    browser.waitForElementVisible(idOfTheField, 1000);
                });
            }
        },

        date: function(browser, id, desiredValue, user, field, idOfTheField) {
            if (desiredValue) {
                var parts = desiredValue.split("-");
                browser.setValue(id+"_year", parts[0]);
                browser.setValue(id+"_month", parts[1]);
                browser.setValue(id+"_day", parts[2]);
            }
            browser.waitForElementVisible(idOfTheField, 1000);
        }
    };
    setTheValueAndCheckThatFieldIsNotPresent = {

        checkbox: function(browser, id, nonDesiredValue, user, field, idOfTheField) {
            browser.moveToElement(id, 10, 10);
            if(nonDesiredValue){
                browser.click(id);
                browser.keys("\uE004");
                browser.waitForElementNotVisible(idOfTheField, 1000);
                browser.click(id);
            }else{
                browser.keys("\uE004");
                browser.waitForElementNotVisible(idOfTheField, 1000);
            }
        },

        radio: function(browser, id, nonDesiredValue, user, field, idOfTheField) {
            browser.moveToElement(id, 10, 10);
            if(nonDesiredValue){
                browser.click(id);
                browser.keys("\uE004");
                browser.waitForElementNotVisible(idOfTheField, 1000);
                browser.click(id);
            }else{
                browser.keys("\uE004");
                browser.waitForElementNotVisible(idOfTheField, 1000);
            }
        },

        select: function(browser, id, nonDesiredValue, user, field, idOfTheField) {
            if (nonDesiredValue == undefined) {
                var short_name = buildShortNameById(id);
                browser.setValue(id, user[short_name]);
                browser.waitForElementNotVisible(idOfTheField, 1000);
            }
            if(nonDesiredValue) {

                if(nonDesiredValue.length == undefined) {
                    nonDesiredValue = [nonDesiredValue];
                }
                if(nonDesiredValue != "undefined")
                    nonDesiredValue.forEach((value, index) => {
                        browser.setValue(id, value);
                        browser.keys("\uE004");
                        browser.waitForElementNotVisible(idOfTheField, 1000);
                    });

            }
        },

        date: function(browser, id, nonDesiredValue, user, field, idOfTheField) {
            if (nonDesiredValue) {
                var parts = nonDesiredValue.split("-");
                browser.setValue(id+"_year", parts[0]);
                browser.setValue(id+"_month", parts[1]);
                browser.setValue(id+"_day", parts[2]);
            }
            browser.waitForElementNotVisible(idOfTheField, 1000);
        }
    };
    
    
    this.caculateNotFulFillingValue = {

        eq: function(dependency, fieldIWantToChange, desiredValue){
            if(dependency.value_type == "integer") {
                var nonDesiredValue = [];
                fieldIWantToChange.options.forEach((option, index) => {
                    if(option.key != dependency.value){
                        nonDesiredValue.push(option.value);
                    }
                });
                return nonDesiredValue;
            }
            if (dependency.value_type == "bool")
                return !desiredValue;
            if (dependency.value_type == "date"){
                var parts = desiredValue.split("-");
                parts[0] = parseInt(parts[0])+1;
                var newVal = parts.join("-");
                return newVal;
            }
        },
        gt: function(dependency, fieldIWantToChange, desiredValue){

            return dependency.value;

        },
        in: function(dependency, fieldIWantToChange, desiredValue){
            if(dependency.value_type == "integer") {
                var nonDesiredValue = [];
                fieldIWantToChange.options.forEach((option, index) => {
                    if(desiredValue.indexOf(option.key) == -1){
                        nonDesiredValue.push(option.value);
                    }
                });
                return nonDesiredValue;
            }
        },
        ne: function(dependency, fieldIWantToChange, desiredValue){
            if(dependency.value_type == "integer") {
                var nonDesiredValue = [];
                fieldIWantToChange.options.forEach((option, index) => {
                    if(desiredValue.indexOf(option.value) == -1){
                        nonDesiredValue.push(option.value);
                    }
                });
                return nonDesiredValue;
            }
            return dependency.value;

        }

    };


    this.calculateFullFillingValue = {
        eq: function(dependency, fieldIWantToChange) {

            if(dependency.value_type == "integer") {
                var desiredValue = [];
                fieldIWantToChange.options.forEach((option, index) => {
                    if(option.key == dependency.value){
                        desiredValue.push(option.value);
                    }
                });
                return desiredValue;
            }
            return dependency.value;
        },

        gt: function(dependency, fieldIWantToChange) {
            if (dependency.value_type == "date"){
                var parts = dependency.value.split("-");
                parts[0] = parseInt(parts[0])+1;
                var newVal = parts.join("-");
                return newVal;
            }
            return dependency.value + 1;
        },

        in: function(dependency, fieldIWantToChange) {
            return dependency.value;
        },

        ne: function(dependency, fieldIWantToChange){
            if(dependency.value_type == "integer") {
                var desiredValue = [];
                if(fieldIWantToChange.options) {
                    fieldIWantToChange.options.forEach((option, index) => {

                        if (option.key != dependency.value) {
                            desiredValue.push(option.value);
                        }
                    });
                }
                return desiredValue;
            }
            if (dependency.value_type == "date"){
                var parts = dependency.value.split("-");
                parts[0] = parseInt(parts[0])+1;
                var newVal = parts.join("-");
                return newVal;
            }
            if (dependency.value_type == "bool")
                return !dependency.value;

        }
    };

    this.findDependentField = function (name, raceFieldCollection){

        var result = false;
        raceFieldCollection.forEach(function (field) {
            if(field.name == name) {
                result = field;
            }
        });
        return result;
    };


    buildShortNameById = function (id) {
        var shortName = id.split('_');
        var short_name;
        if(shortName.length < 5) {
            short_name = shortName[shortName.length - 1];
        }else{
            short_name = shortName[shortName.length - 2]+"_"+shortName[shortName.length - 1];
        }
        return short_name;
    };

    this.buildIdByName = function(name){
        var id = name.replace(/\]\[|\[/g,"_");
        id = "#" + id.replace("]","");
        return id;
    };



    


//**************************Funciones de inscripciones*******************************************




    this.stepIsAnInscription = function(step, browser) {
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
        hashMap["name"] = field.name;
        hashMap["data-is-field"] = 'data-is-field';
        hashMap["data-short-name"] = this.calculateName(field.name);
        var elementType = this.calculateType(field);

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

        if (field.type == "select" || field.type == "product")
        {
            delete hashMap["type"];

            if (field.required)
                delete hashMap["required"]
        }
        if (field.type == "phone" || field.type == "number")
            hashMap["type"] = "text";

        //FIN
        if(asRadio.indexOf(hashMap["data-short-name"]) != -1 && field.type != "hidden") {
            hashMap["type"] = "radio";
            delete hashMap["data-is-field"];
            delete hashMap["data-short-name"];
            delete hashMap["data-group"];
        }

        if(asTypeAhead.indexOf(hashMap["data-short-name"]) != -1 && field.type != "hidden") {
            hashMap["type"] = "text";
        }


        for (var attribute in hashMap)
            selector += `[${attribute}='${hashMap[attribute]}']`;

        return `${elementType}${selector}`;

    };


    this.calculateType = function(field) {

        var short_name = this.calculateName(field.name);
        var elementType = "input";
        var asRadio = [
            "gender"
        ];
        var asTypeAhead = [
            "club"
        ];

        if ((field.options && field.options.length > 1 || field.ws) && (field.type == "select" || field.type == "product") )
            elementType = "select";

        if(asRadio.indexOf(short_name) != -1 && field.type != "hidden") {
            elementType = "input";
        }
        if(asTypeAhead.indexOf(short_name) != -1 && field.type != "hidden") {
            elementType = "input";
        }

        if (field.options && field.type == "select" && field.options.length == 1 && !field.ws) {
            elementType = "input";
        }
        return elementType;

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
                browser.pause(300);
                browser.setValue(id, desiredValue);
                browser.click("body");
                browser.pause(300);
                
                if(desiredValue && !!desiredValue.match(/\d\d\d\d-\w*-\d\d?/)) {

                    var parts = desiredValue.split("-");
                    browser.setValue(id+"_year", parts[0]);
                    browser.setValue(id+"_month", parts[1]);
                    browser.setValue(id+"_day", parts[2]);
                }

                if (item.type == "radio" || item.type == "checkbox") {
                    browser.click(id + "_" + desiredValue);
                }
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




