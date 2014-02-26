
(function () {
    window.App.Models['User'] = App.Models.ErrorHandlingModel.extend({
        defaults: { name: 'unknown' },
        urlRoot: '/api/user'
    });

})();