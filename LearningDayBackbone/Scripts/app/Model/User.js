﻿
(function () {
    window.App.Models['User'] = Backbone.Model.extend({
        defaults: { name: 'unknown' },
        urlRoot: '/api/user'
    });

})();