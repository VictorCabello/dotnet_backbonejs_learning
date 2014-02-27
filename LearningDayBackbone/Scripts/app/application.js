(function () {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };
    App.Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'login': 'login',
            'show/:id': 'show',
            'download/*random': 'download',
            'search/:query': 'search',
            'user' : 'user',
            '*default': 'default'
        },
        login: function () {


            App['login'] = new App.Views.Login();

        },
        user: function () {


            App['viewUser'] = new App.Views.User();

        },

        index: function () {
            $('.container').html("Index route has been called.. ..");
        },

        show: function(id){
            $('.container').html("Show route has been called.. with id equals : "+   id);
        },

        download: function(random){
            $('.container').html("download route has been called.. with random equals : "  + random);
        },

        search: function(query){
            $('.container').html("Search route has been called.. with query equals : "  + query);
        },

        default: function(myDefault){
            $('.container').html("This route is not hanled.. you tried to access: " + myDefault);

        }


    });

    $(document).ready(function () {
        App.router = new App.Router;
        Backbone.history.start();
    });
})();
