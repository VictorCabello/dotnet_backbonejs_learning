
(function () {
    window.App.Views['Login'] = Backbone.View.extend({
        el: $('.container'), // attaches `this.el` to an existing element.
        loginForm: $("<form id='login' />"),
        model: window.App.Models.Session,
        events: {
            'click button#login': 'login'
        },
        initialize: function () {
            _.bindAll(this, 'render', 'login'); // remember: every function that uses 'this' as the current object should be in here

            this.render();
        },

        render: function () {
            var self = this;
            $(this.el).html('');
            $(this.el).append($(this.loginForm));
            $(this.loginForm).append("<input type='text' name='Email'/>");
            $(this.loginForm).append("<input type='text' name='Password'/>");
            $(this.el).append("<button id='login'>Login</button>");
        },

        login: function () {

            var frm = $(this.loginForm);
            var data = { Email: 'victor', Password: 'pass' };//this.getFormData(frm);
            console.log(data);

            App.session = new App.Models.Sessions(data);
            App.session.save();
        },

        getFormData: function ($form){
            var unindexed_array = $form.serializeArray();
            var indexed_array = {};

            $.map(unindexed_array, function(n, i){
                indexed_array[n['name']] = n['value'];
            });

            return indexed_array;
        }

    });

})();