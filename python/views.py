def index(request):
	from katoAdhocExpress import kato

	skey = "__skey__"
	user_id = "__userid__"
	user_name = "__username__"
	room_id = "__roomid__"
	room_name = "__roomname__"
	exp = __duration__

	user_email= '__useremail__'
	welcome_text= '__welcometext__'
	welcome_robot_name= '__welcomerobotname__'

	t = loader.get_template('katoTemplate.html')
	res = HttpResponse(t.render(Context(None)))

	kato.setInfo(res, skey, exp, user_id, user_name, room_id, room_name, user_email, welcome_text, welcome_robot_name)

	return res
