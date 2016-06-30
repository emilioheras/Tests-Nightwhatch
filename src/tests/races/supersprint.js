
var users = require("../../users.js");


module.exports = {
    "id":"carrera-inscriptiones-test",
    "events": [
        {
            "id": "371",
            "mode": "SUPERSPRINT",
            "team_size": 1,
            "fields": {
                "basic": ["selprice",
                    "name", 
                    "surname", 
                    "mail", 
                    "verify_email", 
                    "dni", 
                    "tipodni", 
                    "gender", 
                    "dateofbirthday", 
                    "prefix_phone", 
                    "phone", 
                    "prefix_phone_emergency", 
                    "phone_emergency", 
                    "code", 
                    "address", 
                    "country_id", 
                    "province_id", 
                    "city_id", 
                    "club", 
                    "club2",
                    "nacionalidad"],
                "advanced": [],
                "extra": [348, 349, 350, 351, 352, 353, 371]
            },
            "requiredFields":["selprice","name", "surname", "dni", "mail", "verify_email", "gender", "phone", "phone_emergency", "code", "address", "province_id", 350],
            "inscriptions":{
                "valid":[
                    users.simple.valid
                ],
                "invalid":[
                    users.simple.invalid
                ]
            },
            "steps": ["SUPERSPRINT", "0"],
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
