

UtilsForm = function() {


    this.fillStepFields= function (browser, user) {

        browser.execute(function (params) {

            var result = [];
            var fields = $(".form-register fieldset.active [name]:not([type=hidden])");
            var pushed = [];

            fields.each(function (index, item) {

                var name = $(item).data("short-name");
                var id = $(item).attr("id");

                if (!id)
                    return true;

                if (!name)
                    name = $(item).closest("[data-short-name]").data("short-name");

                if ($(item).is("[type=radio]")) {
                    id = id.split("_").slice(0, id.split("_").length - 1).join("_");
                }

                if (pushed.indexOf(id) == -1) {

                    result.push({
                        id: id,
                        name: name
                    });

                    pushed.push(id);
                }


            });


            return result;

        }, [], function (result) {

            result.value.forEach((item, index) => {

                var id = '#' + item.id;

                browser.pause(500);

                if (!user.hasOwnProperty(item.name))
                    return false;

                var desiredValue = user[item.name];
                browser.setValue(id, desiredValue);

                if (desiredValue && !!desiredValue.match(/\d\d\d\d-\w*-\d\d?/)) {

                    var parts = desiredValue.split("-");
                    browser.setValue(id + "_year", parts[0]);
                    browser.setValue(id + "_month", parts[1]);
                    browser.setValue(id + "_day", parts[2]);
                }

                browser.click(id + "_" + desiredValue);
                browser.click("body");

            });
        });

        return false;

    };
}

module.exports = new UtilsForm;



