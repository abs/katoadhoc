using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Kato
{
    public class KeyGenerator
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="pkey">Public key issued by kato admin.</param>
        /// <param name="skey">Secret key issued by kato admin.</param>
        /// <param name="userId">Unique user ID.</param>
        /// <param name="userName">User name.</param>
        /// <param name="roomId">Unique room ID.</param>
        /// <param name="roomName">Room name.</param>
        /// <param name="expiration">Token expiration time in seconds.</param>
        /// <param name="userEmail">User email address (visible in tooltip over user name in history, must be unique when used within the scope of a given public key. (optional)</param>
        /// <param name="welcomeText">Text message to be sent out by welcome robot when room is created. (optional)</param>
        /// <param name="robotName">Name of welcome robot, if not specified defaults to 'Welcome Robot'. (optional)</param>
        /// <returns></returns>
        public static object SetInfo(System.Web.HttpResponseBase Response,string skey, string userId, string userName, string roomId, string roomName, int expiration,
            string userEmail = "__useremail__", string welcomeText = "__welcometext__", string robotName = "__robotname__")
        {
            var payload = new Dictionary<string, object>();

            payload.Add("exp", (Math.Round(GetTime() / 1000.00)) + expiration);
            payload.Add("user_id", userId);
            payload.Add("user_name", userName);
            payload.Add("room_id", roomId);
            payload.Add("room_name", roomName);

            if (!string.IsNullOrEmpty(userEmail) || userEmail == "__useremail__")
                payload.Add("user_email", userEmail);

            if (!string.IsNullOrEmpty(welcomeText) || welcomeText == "__welcometext__")
                payload.Add("welcome_text", welcomeText);

            if (!string.IsNullOrEmpty(robotName) || robotName == "__robotname__")
                payload.Add("welcome_robot_name", robotName);
            var cookie = new System.Web.HttpCookie("KATO_ADHOC_TOKEN");
            cookie.Value = JWT.JsonWebToken.Encode(payload, skey, JWT.JwtHashAlgorithm.HS256);
            Response.Cookies.Add(cookie);
            return Response;
        }


        /// <summary>
        /// Calculates Linux epoche.
        /// </summary>
        /// <returns>Returns Liunux epoche in milliseconds.</returns>
        private static Int64 GetTime()
        {
            Int64 retval = 0;
            DateTime st = new DateTime(1970, 1, 1);
            TimeSpan t = (DateTime.Now - st);
            retval = (Int64)(t.TotalMilliseconds + 0.5);
            return retval;
        }
    }
}
