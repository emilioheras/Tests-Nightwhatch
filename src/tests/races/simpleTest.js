//NO FUNCIONA PORQUE FALTA DECIDIR SI TE INSCRIBES A TI MISMO U A OTRA PERSONA
var users = require("../users/users.js");


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
            "inscriptions":{
                "valid":[
                    users.simple.valid
                ],
                "invalid":[
                    users.simple.invalid,
                    users.vacio.invalid
                ]
            },
            "steps": ["SIMPLE", "0"]
        }
    ]
}
//
// fetri.valid.complete.js
// fetri.invalid.complete.js
// fetri.valid.incomplete.js
// fetri.invalid.incomplete.js
// base.complete.js
// base.incomplete.js
// base.js