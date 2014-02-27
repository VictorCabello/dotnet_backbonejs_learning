using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace LearningDayBackbone
{
    public class BundleConfig
    {

        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/backbone")
                .Include("~/Scripts/underscore.js")
                .Include("~/Scripts/Backbone.js")
                .Include("~/Scripts/app/application.js")
                .Include("~/Scripts/app/Model/ErrorHandlingModel.js")
                .Include("~/Scripts/app/Model/User.js")
                .Include("~/Scripts/app/Model/Session.js")
                .Include("~/Scripts/app/Collection/User.js")
                .Include("~/Scripts/app/view/login.js")
                .Include("~/Scripts/app/view/user.js")
                );

        }
    }
}