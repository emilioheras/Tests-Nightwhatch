/**
 * Created by Fran on 11/07/2016.
 */

module.exports = new function() {
    
    this.transform = function(data) {
        data.forEach((race) => {
            this.buildRace(race);
        });
        return data;
    };

    this.buildRace = function(race) {
<<<<<<< HEAD
        race.events.forEach((event) => {
            this.buildEvent(event);
        });
        return race;
    };

    this.buildEvent = function(event) {
        if (event)
            this.createFormSteps(event);
        return event;
=======
        if(race.events) {
            race.events.forEach((event) => {
                this.buildEvent(event);
            });
            return race;
        } else {
            console.log(race);
        }
    };

    this.buildEvent = function(event) {
        if (event) {
            this.createFormSteps(event);
            return event;
        }else{
                console.log(event);
        }
>>>>>>> release/Release-1
    };

    this.createFormSteps = function(event) {
        var steps = [];
        if (event.form.fields && event.form.fields.length) {
            event.form.fields.forEach((field) => {
                steps.push(field.group.key);
            });
        }
        steps = steps.unique();
        if (steps && steps.length > 0)
            event.form.steps = steps;
    };

    Array.prototype.unique = function() {
        var unique = [];
        for (var i = 0; i < this.length; i++) {
            if (unique.indexOf(this[i]) == -1) {
                unique.push(this[i]);
            }
        }
        return unique;
    };
};