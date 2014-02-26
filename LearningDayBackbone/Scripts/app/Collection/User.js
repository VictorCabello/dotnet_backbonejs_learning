
(function () {
    window.App.Collections['User'] = Backbone.Collection.extend({
        model: App.Models.User,
        url: '/api/user'
    });

})();