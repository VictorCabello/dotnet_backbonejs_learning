
(function () {
    window.App.Views['User'] = Backbone.View.extend({
        el: $('.container'), // attaches `this.el` to an existing element.
        events: {
            'click button#add': 'addItem',
            'click button#en': 'change2en',
            'click button#es': 'change2es'
        },
        initialize: function () {
            _.bindAll(this, 'render', 'addItem', 'appendItem'); // remember: every function that uses 'this' as the current object should be in here
            this.collection = new App.Collections.User();
            this.collection.fetch();
            this.render();
            this.collection.bind('add', this.appendItem); // collection event binder
        },

        render: function () {
            var template = _.template($('#user-list-template').html(), { users: this.collection.models });
            $(this.el).html(template);
            $(this.el).i18n();

        },

        addItem: function () {
            var myUserModel = new App.Models.User();
            myUserModel.save({ success: function () { alert("hola") } });
            this.collection.add(myUserModel); // add item to collection; view is updated via event 'add'
        },

        appendItem: function (user) {
            //language = "es";
            //$.i18n.init({ lng: language, debug: true });
            var text = $.t("data.delete");
            $('tbody', this.el).append("<tr> <td>" + user.get('name') + "</td> <td> " + text + "</td> </tr>");
        },
        change2en: function () {
            language = "en";
            //alert("Change to english");
            $.i18n.init({ lng: language, debug: true });
            $(this.el).i18n();
        },
        change2es: function () {
            language = "es";
            //alert("Change to español");
            $.i18n.init({ lng: language, debug: true });
            $(this.el).i18n();
        }

    }); 

})();