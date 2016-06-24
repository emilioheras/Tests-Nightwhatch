
var users = require("../../users.js");


module.exports = {
	"id":"iv-triatln-olmpico-trigranada",
	"events": [
		{
			"id": "56f02bd0-c9dc-4193-80de-3b68bc5ffd28",
			"mode": "fetri",
			"team_size": 1,
			"fields": {
				"basic": ["name", "surname", "mail", "verify_email", "dni", "tipodni", "gender", "dateofbirthday", "prefix_phone", "phone", "prefix_phone_emergency", "phone_emergency", "code", "address", "country_id", "province_id", "city_id", "club", "club2"],
				"advanced": [],
				"extra": []
			},
			"inscriptions":{
				"valid":[
					users.fetri.valid
				],
				"invalid":[
					users.fetri.invalid,
					users.fetri.incomplete
				]
			},
			"steps": ["FETRI", "0"]
		}
	]
}