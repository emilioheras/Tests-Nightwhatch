
var users = require("../users/users.js");


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
					users.simple.valid,
					users.rfea.valid,
					users.fetri.valid,
					users.preferente.valid
				],
				"invalid":[
					users.simple.invalid,
					users.rfea.invalid,
					users.fetri.invalid,
					users.preferente.invalid,
					users.empty
				]
			},
			"steps": ["FETRI", "0"]
		}
	]
}