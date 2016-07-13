/**
 * Created by Javier on 11/07/2016.
 */
var request         = require('sync-request');
var navegation      = require("./navegation.functions");

module.exports = new function() {

    this.getRacesFromApi = function(api){
        var currentDate = navegation.currentDate();

        var races= request('GET', `${api}/api/races/ii-trail-night-sendas-de-higueruelas`);
        // var races = request('GET', `${api}/api/races?limit=5&date=${currentDate}&page=1`); //testear carreras (limit negativo=anteriores a la fecha, limit positivo=posteriores a la fecha)
        // var races = request('GET', `${api}/api/services/races/inscriptions/form/375`); //testear las carreras con inscripciones abiertas



        races = this.imTestingOneOrMoreRaces(races);


        races.forEach((race) => {
            var events = this.getEventsFromApi(api, race);
            if(events)
                events.forEach((event) => {
                    var form = this.getFormFromApi(api, event);
                    if(form)
                        event.form = form;
                });
            race.events = events;
        });

        return races;
    };

    this.getEventsFromApi = function (api, race) {
        var events = request('GET', `${api}/api/events?race=${race.id}`);
        events = JSON.parse(events.getBody()).data;
        return events;
    };

    this.getFormFromApi = function (api, event) {
        var form = request('GET', `${api}/api/services/inscription/form/${event.id}`);
        form = JSON.parse(form.getBody()).data;
        return form;
    };

    this.imTestingOneOrMoreRaces = function(races){
        races = JSON.parse(races.getBody()).data;

        if(races.length == undefined)
            races = [races];

        return races;
    };
};