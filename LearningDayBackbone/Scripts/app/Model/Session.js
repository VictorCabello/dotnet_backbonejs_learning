
(function () {
    window.App.Models['Sessions'] = App.Models.ErrorHandlingModel.extend({
        urlRoot: '/api/sessions',
        defaults: { RememberMe: false }
    });

})();