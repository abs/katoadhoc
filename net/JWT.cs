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
            var token = Kato.KeyGenerator.GenerateUrl("__pkey__", "__skey__", "__userid__", "__username__", "__roomid__", "__roomname__", __duration__);

            return Json(new JWTModel { JWTToken = token }, JsonRequestBehavior.AllowGet);
        }
    }
}