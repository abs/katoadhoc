using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace JWT_test.Controllers
{
    public class JWTModel
    {
        public string JWTToken { get; set; }

    }
    public class JWTController : Controller
    {
        public JsonResult Index()
        {
            var payload = new Dictionary<string, object>() {
                { "exp",(Math.Round(GetTime()/ 1000.00))+__duration__ },
                { "user_id", "__userid__" }, 
                { "user_name" , "__username__" }, 
                { "room_id" , "__roomid__" }, 
                { "room_name", "__roomname__" } 
            };

            var pkey = "__pkey__";

            var skey = "__skey__";

            string token = "https://kato.im/adhoc#/" + pkey + "/" + JWT.JsonWebToken.Encode(payload, skey, JWT.JwtHashAlgorithm.HS256);

            return Json(new JWTModel { JWTToken = "token" }, JsonRequestBehavior.AllowGet);
        }

        //Calculates linux epoche.
        private Int64 GetTime()
        {
            Int64 retval = 0;
            DateTime st = new DateTime(1970, 1, 1);
            TimeSpan t = (DateTime.Now - st);
            retval = (Int64)(t.TotalMilliseconds + 0.5);
            return retval;
        }
    }
}