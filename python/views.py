def service(request):
	pkey = "__pkey__"
	skey = "__skey__"

	user_id = "__userid__"
	user_name = "__username__"
	room_id = "__roomid__"
	room_name = "__roomname__"

	from katoAdhocExpress import kato
	token = kato.generateUrl(pkey, skey, exp, user_id, user_name, room_id, room_name, user_email, welcome_text, welcome_robot_name )
	jsonToReturn = {"JWTToken":token};

	t = loader.get_template('katoTemplate.html')
	c = Context(jsonToReturn)
	return HttpResponse(t.render(c))