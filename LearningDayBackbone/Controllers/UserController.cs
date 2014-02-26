using LearningDayBackbone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LearningDayBackbone.Controllers
{
    public class UserController : ApiController
    {


        UserModel[] users = new UserModel[] 
        { 
            new UserModel {  name = "Tomato Soup"}, 
            new UserModel {  name = "Yo-yo"}, 
            new UserModel {  name = "Hammer"} 
        };


        public IEnumerable<UserModel> GetAllProducts()
        {
            return users;
        }

        [Authorize]
        public UserModel Post(UserModel aModel)
        {
            users[0] = aModel;

            return aModel;
        }

    }
}
