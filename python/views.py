def index(request):
	from katoAdhocExpress import kato
	
	skey = "__pkey__"
	exp = __exp__
	user_id = '__user_id__'
	user_name = "__user_name__"
	room_id = '__room_id__'
	room_name = "__room_name__"
	
	user_email= '__user_email__' 		
	welcome_text= '__welcome_text__' 		
	welcome_robot_name= '__welcome_robot_name__'
	
	t = loader.get_template('katoTemplate.html')
	res = HttpResponse(t.render(Context(None)))
	
	kato.setInfo(res, skey, exp, user_id, user_name, room_id, room_name, user_email, welcome_text, welcome_robot_name)
	
	return res