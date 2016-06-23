//Usuarios validos
var userSimple = require("../users/simple.js");
var userRfea = require("../users/rfea.js");
var userFetri = require("../users/fetri.js");
var userPreferente = require("../users/preferente.js");
//Usuarios invalidos
var userSimpleInvalid = require("../users/simpleInvalid.js");
var userRfeaInvalid = require("../users/rfeaInvalid.js");
var userFetriInvalid = require("../users/fetriInvalid.js");
var userPreferenteInvalid = require("../users/preferenteInvalid.js");
var userEmpty = require("../users/anonymousEmpty.js");
module.exports = {
	simple: {
		valid: userSimple,
		invalid: userSimpleInvalid
	},

	rfea: {
		valid: userRfea,
		invalid: userRfeaInvalid
	},

	fetri: {
		valid: userFetri,
		invalid: userFetriInvalid
	},
	preferente: {
		valid: userPreferente,
		invalid: userPreferenteInvalid
	},
	empty: {
		invalid: userEmpty
	}
}