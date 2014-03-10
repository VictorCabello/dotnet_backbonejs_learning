
(function () {
    window.App.Views['User'] = Backbone.View.extend({
        el: $('.container'), // attaches `this.el` to an existing element.
        events: {
            'click button#add': 'addItem'
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
        },

        addItem: function () {
            var myUserModel = new App.Models.User();
            myUserModel.save({ success: function () { alert("hola") } });
            this.collection.add(myUserModel); // add item to collection; view is updated via event 'add'
        },

        appendItem: function (user) {
            $('tbody', this.el).append("<tr> <td>" + user.get('name') + "</td> <td> delete</td> </tr>");
        }
        

    });

})();