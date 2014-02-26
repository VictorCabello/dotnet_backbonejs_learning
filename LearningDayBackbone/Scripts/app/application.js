﻿(function () {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };
    App.Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'show/:id': 'show',
            'download/*random': 'download',
            'search/:query': 'search',
            'user' : 'user',
            '*default': 'default'
        },

        user: function () {


            App['viewUser'] = new App.Views.User();

        },

        index: function () {
            $(document.body).append("Index route has been called.. ..");
        },

        show: function(id){
            $(document.body).append("Show route has been called.. with id equals : "+   id);
        },

        download: function(random){
            $(document.body).append("download route has been called.. with random equals : "  + random);
        },

        search: function(query){
            $(document.body).append("Search route has been called.. with query equals : "  + query);
        },

        default: function(myDefault){
            $(document.body).append("This route is not hanled.. you tried to access: " + myDefault);

        }


    });

    $(document).ready(function () {
        new App.Router;
        Backbone.history.start();
    });
})();
