
var userSimple = require("./simple/simple.js");
var userSimpleInvalid = require("./simple/simpleInvalid.js");

var userRfea = require("./rfea/rfea.js");
var userRfeaInvalid = require("./rfea/rfeaInvalid.js");
var userRfea1step = require("./rfea/rfeaInvalid.js");

var userFetri = require("./fetri/fetri.js");
var userFetriInvalid = require("./fetri/fetriInvalid.js");
var userFetri1step = require("./fetri/fetri1step.js");

var userPreferente = require("./preferente/preferente.js");
var userPreferenteInvalid = require("./preferente/preferenteInvalid.js");
var userPreferente1step = require("./preferente/preferente1step.js");

var userEmpty = require("./anonymousEmpty.js");

module.exports = {
	simple: {
		valid: userSimple,
		invalid: userSimpleInvalid,
	},

	rfea: {
		//valido
		valid: userRfea,
		//no pasa ni el primer step
		invalid: userRfeaInvalid,
		//pasa el primero pero no el segundo step
		valid1step: userRfea1step
		//pasa el primer step pero deja el segundo en ""

	},

	fetri: {
		valid: userFetri,
		invalid: userFetriInvalid,
		valid1step: userFetri1step
	},
	preferente: {
		valid: userPreferente,
		invalid: userPreferenteInvalid,
		valid1step: userPreferente1step
	},
	vacio: {
		//todos los campos en ""
		invalid: userEmpty
	}
}