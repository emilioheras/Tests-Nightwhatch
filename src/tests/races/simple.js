
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
            "requiredFields":["name", "surname", "dni", "mail", "gender", "phone", "code"],
            "inscriptions":{
                "valid":[
                    users.simple.valid
                ],
                "invalid":[
                    users.simple.invalid
                ]
            },
            "steps": ["SIMPLE", "0"],
            "dependencies":{
                "dni": {
                    "field":"tipodni",
                    "operator":"!=",
                    "value":3
                }
                /*,
                "club":{
                    "field":"newClub",
                    "operator":"==",
                    "value":"false"
                },
                "club2":{
                    "field":"newClub",
                    "operator":"==",
                    "value":"true"
                },
                "auth":{
                    "field":"dateofbirthday",
                    "operator":">",
                    "value":"1998-10-31"
                },
                "auth_surname":{
                    "field":"dateofbirthday",
                    "operator":">",
                    "value":"1998-10-31"
                },
                "tipodni_auth":{
                    "field":"dateofbirthday",
                    "operator":">",
                    "value":"1998-10-31"
                },
                "dni_auth":{
                    "field":"dateofbirthday",
                    "operator":">",
                    "value":"1998-10-31"
                }
                */

            }
        }
    ]
}
