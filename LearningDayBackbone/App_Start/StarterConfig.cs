[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(LearningDayBackbone.Infrastructure.StarterConfig), "PreStart")]
[assembly: WebActivatorEx.PostApplicationStartMethod(typeof(LearningDayBackbone.Infrastructure.StarterConfig), "PostStart")]

namespace LearningDayBackbone.Infrastructure
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Web.Http;
    using System.Web.Mvc;
    using System.Web.Optimization;
    using System.Web.Routing;

    using LearningDayBackbone.Models;

    using WebMatrix.WebData;

    public class StarterConfig
    {
        public static void PreStart()
        {
            RegisterRoutes(RouteTable.Routes);
        }
        public static void PostStart()
        {
            RegisterMembership();
        }
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapHttpRoute(
                "PasswordsRpcApi",
                "api/passwords/{action}",
                new { controller = "passwords" });

            routes.MapRoute(
                "user-confirmation",
                "users/confirm/{token}",
                new
                {
                    controller = "Supports",
                    action = "ConfirmUser"
                });

            routes.MapRoute(
                "password-reset",
                "passwords/reset/{token}",
                new
                {
                    controller = "Supports",
                    action = "ResetPassword"
                });
        }
        public static void RegisterMembership()
        {
            Database.SetInitializer<UsersContext>(null);

            try
            {
                using (var context = new UsersContext())
                {
                    if (!context.Database.Exists())
                    {
                        ((IObjectContextAdapter)context).ObjectContext.CreateDatabase();
                    }
                }

                WebSecurity.InitializeDatabaseConnection("DefaultConnection", "Users", "Id", "Email", true);
                //WebSecurity.CreateUserAndAccount("victor", "pass", null, false);
                //WebSecurity.CreateAccount("victor", "pass", false);
            }
            catch (Exception e)
            {
                throw new InvalidOperationException("The ASP.NET Simple Membership database could not be initialized. For more information, please see http://go.microsoft.com/fwlink/?LinkId=256588", e);
            }
        }
    }
}
