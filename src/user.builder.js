/**
 * Created by Javier on 11/07/2016.
 */
var formFunctions   = require("./functions.forms");

var baseUser            = require("./tests/users/base.complete");
var baseUserPreferent   = require("./tests/users/preferente.valid.complete");
var baseUserFetri       = require("./tests/users/fetri.valid.complete");
// var baseUserTeam        = require("./tests/users/team.valid.complete");
var baseUserRfea        = require("./tests/users/rfea.valid.complete");


module.exports = new function() {

    this.buildAppropriateUser = function (formFields, event) {
        if (event) {
            var correctUser = this.chooseAppropriateUser(event);

            var result = JSON.parse(JSON.stringify((correctUser)));
            var fields = this.extractShortNames(formFields);
            for (var field in result) {
                if (fields.indexOf(field) == -1)
                    delete result[field];
            }
        }
        return result;

    };



    this.chooseAppropriateUser = function (event) {
        var user ={};
        var steps = JSON.stringify(event.form.steps);
        if(steps) {
            if (steps.match(/Preference/))
                user = this.buildTestUser(baseUser, baseUserPreferent);

            if (steps.match(/RFEA/))
                user = this.buildTestUser(baseUser, baseUserRfea);

            if (steps.match(/FETRI/))
                user = this.buildTestUser(baseUser, baseUserFetri);

            if (steps.match(/Team/))
                user = this.buildTestUser(baseUser, baseUserTeam);
        }


        return user;

    };

    this.buildTestUser = function (baseUser, addUserData) {
        var testUser = JSON.stringify(JSON.parse(baseUser).concat(JSON.parse(addUserData)));
        
        return testUser;

    };


    this.extractShortNames = function (formFields){
        var shortNames = [];

        if(formFields)
            formFields.forEach((field) => {
                shortNames.push(formFunctions.calculateName(field.name));
            });
        return shortNames;
    };










};

