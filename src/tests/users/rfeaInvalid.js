var base = require("./anonymousInvalid.js");

var RFEA = {
    "license_type_validate": "CARNET PLUS",
    "carnet_validate":"908",
    "birth_validate":"1974-Agosto-05"
};

var user = Object.assign(base, RFEA);

module.exports = user;