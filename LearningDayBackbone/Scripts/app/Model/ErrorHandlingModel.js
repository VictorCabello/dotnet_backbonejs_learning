(function () {
    window.App.Models['ErrorHandlingModel'] = Backbone.Model.extend({
       
        initialize: function (attributes, options) {
            options || (options = {});
            this.bind("error", this.defaultErrorHandler);
            this.init && this.init(attributes, options);
        },

        defaultErrorHandler: function (model, error) {
            this.redirectToDefault();
        },
        hasClientUrl: function () {
            var hash = window.location.hash;
            if (hash.length > App.clientUrlPrefix.length) {
                return true;
            }
            if (App.clientUrlPrefix.indexOf(hash) === 0) {
                return false;
            }
            return true;
        },
        redirectToDefault:function () {
            App.router.navigate('', {
                trigger: true
        });
    }


    });

})();