
(function () {
    window.App.Views['User'] = Backbone.View.extend({
        el: $('.container'), // attaches `this.el` to an existing element.
        events: {
            'click button#add': 'addItem'
        },
        initialize: function () {
            _.bindAll(this, 'render', 'addItem', 'appendItem'); // remember: every function that uses 'this' as the current object should be in here

            this.collection = new App.Collections.User();
            this.collection.bind('add', this.appendItem); // collection event binder

            this.render();
        },

        render: function () {
            var self = this;
            $(this.el).html('');
            $(this.el).append("<button id='add'>Add User</button>");
            $(this.el).append("<ul></ul>");
            _(this.collection.models).each(function (user) { // in case collection is not empty
                self.appendItem(user);
            }, this);
        },

        addItem: function () {
            var myUserModel = new App.Models.User();
            this.collection.add(myUserModel); // add item to collection; view is updated via event 'add'
        },

        appendItem: function (user) {
            $('ul', this.el).append("<li>" + user.get('name') + "</li>");
        }
        

    });

})();