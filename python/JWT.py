def service(request):
	pkey = "EK1UcCeetSxCVAYEZw9zxr6iCHX0gm1JSSkamHVcxVQ"
	skey = "pTif3EypiNOYIV8_QKQvm3KdJugGjSXVRkHdi0CX_1k"

	user_id = "0"
	user_name = "bars"
	room_id = "0"
	room_name = "bar"
	
	from datetime import datetime, timedelta
	expDate = datetime.now() + timedelta(hours=1)
	
	payload = '{"exp":'+str(expDate.timestamp())+',"user_id":"'+user_id+'","user_name":"'+user_name+'","room_id":"'+room_id+'","room_name":"'+room_name+'"}';
	
	import jwt, json
	generatedJWT = jwt.encode(json.loads(payload), skey, "HS256")
	jwtToString = generatedJWT.decode()
	token = "https://kato.im/adhoc#/"+pkey+"/"+jwtToString;
	jsonToReturn = '{"JWTToken":"'+token+'"}';


	return HttpResponse(jsonToReturn,mimetype='application/json')