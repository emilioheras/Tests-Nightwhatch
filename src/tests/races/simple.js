//NO FUNCIONA PORQUE FALTA DECIDIR SI TE INSCRIBES A TI MISMO U A OTRA PERSONA
var users = require("../../users.js");


module.exports = {
    "id":"carrera-inscriptiones-test",
    "events": [
        {
            "id": "366",
            "mode": "SIMPLE",
            "team_size": 1,
            "fields": {
                "basic": ["name", "surname", "mail", "verify_email", "dni", "tipodni", "gender", "dateofbirthday", "prefix_phone", "phone", "prefix_phone_emergency", "phone_emergency", "code", "address", "country_id", "province_id", "city_id", "club", "club2"],
                "advanced": [],
                "extra": []
            },
            "required":["name", "surname", "mail", "dni", "gender", "dateofbirthday", "code"],
            "inscriptions":{
                "valid":[
                    users.simple.valid
                ],
                "invalid":[
                    users.simple.invalid
                ]
            },
            "steps": ["SIMPLE", "0"]
        }
    ]
}
