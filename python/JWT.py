def service(request):
	pkey = "__pkey__"
	skey = "__skey__"

	user_id = "__userid__"
	user_name = "__username__"
	room_id = "__roomid__"
	room_name = "__roomname__"
	duration = "__duration__"
    
	from datetime import datetime, timedelta
	expDate = datetime.now() + timedelta(seconds=duration)
	
	payload = '{"exp":'+str(expDate.timestamp())+',"user_id":"'+user_id+'","user_name":"'+user_name+'","room_id":"'+room_id+'","room_name":"'+room_name+'"}';
	
	import jwt, json
	generatedJWT = jwt.encode(json.loads(payload), skey, "HS256")
	jwtToString = generatedJWT.decode()
	token = "https://kato.im/adhoc#/"+pkey+"/"+jwtToString;
	jsonToReturn = '{"JWTToken":"'+token+'"}';


	return HttpResponse(jsonToReturn,mimetype='application/json')