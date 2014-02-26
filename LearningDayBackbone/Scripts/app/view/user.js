
(function () {
    window.App.Views['User'] = Backbone.View.extend({
        el: $('body'), // attaches `this.el` to an existing element.
        events: {
            'click button#add': 'addItem'
        },
        initialize: function () {
            _.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here

            this.counter = 0; // total number of items added thus far
            this.render();
        },

        render: function () {
            $(this.el).append("<button id='add'>Add user</button>");
            $(this.el).append("<ul></ul>");
        },

        addItem: function () {
            this.counter++;
            $('ul', this.el).append("<li>Adding user " + this.counter + "</li>");
        }
        

    });

})();