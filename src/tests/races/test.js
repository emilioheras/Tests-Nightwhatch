// var user = require("../users/rfea.js");
var user = require("../users/fetri.js");
module.exports = {
	"id":"carrera-inscriptiones-test",
	"events": [
		{
			"id": "368",
			"mode": "simple",
			"team_size": 1,
			"fields": {
				"basic": ["name", "surname", "mail", "verify_email", "dni", "tipodni", "gender", "dateofbirthday", "prefix_phone", "phone", "prefix_phone_emergency", "phone_emergency", "code", "address", "country_id", "province_id", "city_id", "club", "club2"],
				"advanced": [],
				"extra": []
			},
			"inscriptions":{
				"valid":[
					user
				],
				"invalid":[
					user.invalid
				]
			},
			"steps": ["FETRI", "0"]
		}
	]
}