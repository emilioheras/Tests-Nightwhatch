var base = require("./anonymous");

var RFEA = {
    "license_type_validate": "CARNET PLUS",
    "carnet_validate":"903",
    "birth_validate":"1972-Agosto-05"
};

var user = Object.assign(base, RFEA);

module.exports = user;