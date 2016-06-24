
var userSimple = require("./simple/simple.js");
var userSimpleInvalid = require("./simple/simpleInvalid.js");;

var userRfea = require("./rfea/rfea.js");
var userRfeaInvalid = require("./rfea/rfeaInvalid.js");
var userRfea1step = require("./rfea/rfeaInvalid.js");
var userRfeaV2step = require("./rfea/rfeaV2step.js");

var userFetri = require("./fetri/fetri.js");
var userFetriInvalid = require("./fetri/fetriInvalid.js");
var userFetri1step = require("./fetri/fetri1step.js");
var userFetriV2step = require("./fetri/fetriV2step.js");

var userPreferente = require("./preferente/preferente.js");
var userPreferenteInvalid = require("./preferente/preferenteInvalid.js");
var userPreferente1step = require("./preferente/preferente1step.js");
var userPreferenteV2step = require("./preferente/preferenteV2step.js");
var userEmpty = require("./baseEmpty.js");


//valid: completa el proceso entero
//invalid: No pasa del primer step porque rellena con datos falsos
//invalid1step: Pasa el primer step pero rellena con datos falsos el segundo
//vacio2step: Pasa el primer step pero deja en blanco el segundo
//vacio.invalid: Todos los datos vacios

module.exports = {
	simple: {
		valid: userSimple,
		invalid: userSimpleInvalid,
	},

	rfea: {
		//valido
		valid: userRfea,
		invalid: userRfeaInvalid,
		invalid1step: userRfea1step,
		vacio2step: userRfeaV2step
	},

	fetri: {
		valid: userFetri,
		invalid: userFetriInvalid,
		invalid1step: userFetri1step,
		vacio2step: userFetriV2step
	},
	preferente: {
		valid: userPreferente,
		invalid: userPreferenteInvalid,
		invalid1step: userPreferente1step,
		vacio2step: userPreferenteV2step
	},
	vacio: {
		invalid: userEmpty
	}
}