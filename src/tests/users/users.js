//Usuarios validos
var userSimple = require("./simple.js");
var userRfea = require("./rfea.js");
var userFetri = require("./fetri.js");
var userPreferente = require("./preferente.js");
//Usuarios invalidos
var userSimpleInvalid = require("./simpleInvalid.js");
var userRfeaInvalid = require("./rfeaInvalid.js");
var userFetriInvalid = require("./fetriInvalid.js");
var userPreferenteInvalid = require("./preferenteInvalid.js");
var userEmpty = require("./anonymousEmpty.js");
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
	vacio: {
		invalid: userEmpty
	}
}