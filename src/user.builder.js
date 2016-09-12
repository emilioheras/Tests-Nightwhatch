/**
 * Created by Fran on 11/07/2016.
 */
var formFunctions       = require("./functions.forms");
var baseUser            = require("./tests/users/base.complete");
var baseUserPreferent   = require("./tests/users/preferente.valid.complete");
var baseUserFetri       = require("./tests/users/fetri.valid.complete");
var baseUserTeam        = require("./tests/users/team.valid.complete");
var baseUserRfea        = require("./tests/users/rfea.valid.complete");


module.exports = new function() {
<<<<<<< HEAD
=======

    this.buildAnInappropriateUser = function (formFields, event) {

        if (event) {
            var correctUser = this.chooseAppropriateUser(event);
            var result = correctUser;
            result.dni = "88888888";
            result.phone = "76637";
            result.mail = "holaaaPgmail.com";
            result.code = 333444;
            var fields = this.extractShortNames(formFields);
            if(formFields)
                formFields.forEach((field, index) => {
                    if (field.name.match(/dateofbirthday/)) {
                        if(result.dateofbirthday >= field.maxValue)
                            result.dateofbirthday = this.chooseAppropriateDate(result.dateofbirthday, field.maxValue);
                    }

                });
            for (var field in result) {
                if (fields.indexOf(field) == -1)
                    delete result[field];
            }
        }
        if(Object.keys(result).length)
            return result;
    };
>>>>>>> release/Release-1
    
    this.buildAppropriateUser = function (formFields, event) {

        if (event) {
            var correctUser = this.chooseAppropriateUser(event);
            var result = correctUser;
            var fields = this.extractShortNames(formFields);
<<<<<<< HEAD
=======
            if(formFields)
            formFields.forEach((field, index) => {
                if (field.name.match(/dateofbirthday/)) {
                    if(result.dateofbirthday < field.maxValue)
                      result.dateofbirthday = this.chooseAppropriateDate(result.dateofbirthday, field.maxValue);
                }
            });
>>>>>>> release/Release-1
            for (var field in result) {
                if (fields.indexOf(field) == -1)
                    delete result[field];
            }
        }
        if(Object.keys(result).length)
            return result;
    };
<<<<<<< HEAD


=======
    
    this.chooseAppropriateDate = function (dateofbirthday, maxValue) {
        var partsDateMinValue = maxValue.split("-");
        var partsDateActualValue = dateofbirthday.split("-");
        dateofbirthday = (parseInt(partsDateMinValue[0])+1)+"-"+partsDateActualValue[1]+"-"+partsDateActualValue[2];
        return dateofbirthday;
    };
>>>>>>> release/Release-1

    this.chooseAppropriateUser = function (event) {

        var user = JSON.parse(JSON.stringify((baseUser)));
        var steps = JSON.stringify(event.form.steps);

        if(steps) {
            
            if (steps.match(/Preference/)) {
                user = baseUserPreferent;
            }
            if (steps.match(/RFEA/)) {
                user = baseUserRfea;
            }
            if (steps.match(/FETRI/)) {
                user = baseUserFetri;
            }
<<<<<<< HEAD
            if (steps.match(/Team/))
                user = baseUserTeam;
=======
            if (steps.match(/Team/)) {
                user = baseUserTeam;
            }
>>>>>>> release/Release-1
        }
        return user;

    };


    this.extractShortNames = function (formFields) {
        var shortNames = [];
        if(formFields)
            formFields.forEach((field) => {
                shortNames.push(formFunctions.calculateName(field.name));
            });
        return shortNames;
    };


};

