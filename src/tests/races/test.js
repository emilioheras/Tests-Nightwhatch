var user = require("../users/rfea.js");

module.exports = {
	"id":"travesia-nocturna-a-nado-noche-de-san-juan-2016",
	"events": [
		{
			"id": "574ee02e-fe74-42be-a7d9-1216bc5ffd28",
			"team_size": 2,
			"mode": "RFEA",
			"fields": {
				"basic": ["name", "surname", "mail", "verify_email", "dni", "tipodni", "gender", "dateofbirthday", "prefix_phone", "phone", "prefix_phone_emergency", "phone_emergency", "code", "address", "country_id", "province_id", "city_id", "club", "club2"],
				"advanced": [],
				"extra": []
			},
			"inscriptions":{
				"valid":[
					[user]
				],
				"invalid":[
					[user.invalid]
				]
			}
		}
	]
}