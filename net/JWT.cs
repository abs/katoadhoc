public JsonResult Index(string userid, string roomid)
        {
            var payload = new Dictionary<string, object>() { 
            { "exp",(Math.Round(GetTime()/ 1000.00))+3600 },
            { "user_id", userid }, 
            {"user_name" , "foo"}, 
            {"room_id" , roomid}, 
            {"room_name", "bar"} };

            var pkey = "EK1UcCeetSxCVAYEZw9zxr6iCHX0gm1JSSkamHVcxVQ";

            var skey = "pTif3EypiNOYIV8_QKQvm3KdJugGjSXVRkHdi0CX_1k";

            string token = "https://kato.im/adhoc#/" + pkey + "/" + JWT.JsonWebToken.Encode(payload, skey, JWT.JwtHashAlgorithm.HS256);
            Console.Out.WriteLine(token);

            return Json(token, JsonRequestBehavior.AllowGet);
        }

        private Int64 GetTime()
        {
            Int64 retval = 0;
            DateTime st = new DateTime(1970, 1, 1);
            TimeSpan t = (DateTime.Now - st);
            retval = (Int64)(t.TotalMilliseconds + 0.5);
            return retval;
        }