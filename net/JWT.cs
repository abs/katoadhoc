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
		public JsonResult Index(string userid, string roomid)
        {
            var token = Kato.KeyGenerator.GenerateKey("EK1UcCeetSxCVAYEZw9zxr6iCHX0gm1JSSkamHVcxVQ", "pTif3EypiNOYIV8_QKQvm3KdJugGjSXVRkHdi0CX_1k", "1", "foo", "1", "bar", 3600);

            return Json(new JWTModel { JWTToken = token }, JsonRequestBehavior.AllowGet);
        }
    }
}