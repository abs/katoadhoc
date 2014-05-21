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
            SetInfo(Response, "__skey__", "__userid__", "__username__", "__roomid__", "__roomname__", __duration__);
            return View();
        }

        private object SetInfo(System.Web.HttpResponseBase Response, string sKey, string userId, string userName,
            string roomId, string roomName, int expiration)
        {
            return Kato.KeyGenerator.SetInfo(sKey, userId, userName, roomId, roomName, expiration);
        }
    }
}