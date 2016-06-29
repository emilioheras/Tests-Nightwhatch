
var userSimple = require("./tests/users/simple.valid.complete.js");
var userSimpleInvalid = require("./tests/users/simple.invalid.incomplete.js");;

var userRfea = require("./tests/users/rfea.valid.complete.js");
var userRfeaInvalid = require("./tests/users/rfea.invalid.incomplete.js");
var userRfeaIncomplete = require("./tests/users/rfea.valid.incomplete.js");

var userFetri = require("./tests/users/fetri.valid.complete.js");
var userFetriInvalid = require("./tests/users/fetri.invalid.incomplete.js");
var userFetriIncomplete = require("./tests/users/fetri.valid.incomplete.js");

var userPreferente = require("./tests/users/preferente.valid.complete.js");
var userPreferenteInvalid = require("./tests/users/preferente.invalid.incomplete.js");
var userPreferenteIncomplete = require("./tests/users/preferente.valid.incomplete.js");


//valid: completa el proceso entero
//invalid: No pasa del primer step porque rellena con datos falsos
//incomplete: Pasa el primer step pero no rellena el segundo

module.exports = {
	simple: {
		valid: userSimple,
		invalid: userSimpleInvalid,
	},

	rfea: {
		//valido
		valid: userRfea,
		invalid: userRfeaInvalid,
		incomplete: userRfeaIncomplete,
	},

	fetri: {
		valid: userFetri,
		invalid: userFetriInvalid,
		incomplete: userFetriIncomplete,
	},
	preferente: {
		valid: userPreferente,
		invalid: userPreferenteInvalid,
		incomplete: userPreferenteIncomplete,
	}
	
}