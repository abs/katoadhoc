def service(request):
	pkey = "__pkey__"
	skey = "__skey__"

	user_id = "__userid__"
	user_name = "__username__"
	room_id = "__roomid__"
	room_name = "__roomname__"
	
	
	from datetime import datetime, timedelta
	import jwt, json
	expDate = datetime.now() + timedelta(hours=1)
	
	payload = '{"exp":'+str(expDate.timestamp())+',"user_id":"'+user_id+'","user_name":"'+user_name+'","room_id":"'+room_id+'","room_name":"'+room_name+'"}';
	
	generatedJWT = jwt.encode(json.loads(payload), skey, "HS256")
	jwtToString = generatedJWT.decode()
	token = "https://kato.im/adhoc#/"+pkey+"/"+jwtToString;
	jsonToReturn = {"JWTToken":token};

	t = loader.get_template('katoTemplate.html')
	c = Context(jsonToReturn)
	return HttpResponse(t.render(c))