using System.Web.Mvc;

namespace JWT_test.Controllers
{
    public class JWTModel
    {
        public string JWTToken { get; set; }

    }
    public class JWTController : Controller
    {
        public ActionResult Index(string userid, string roomid)
        {
            Kato.KeyGenerator.SetInfo(Response, "__skey__", "__userid__", "__username__", "__roomid__", "__roomname__", __duration__);
            return View();
        }
    }
}