require 'jwt'
class KatoAdHocExpress
  def self.setInfo(response, skey, duration, user_id, user_name, room_id, room_name)
  pkey = pkey
    skey = skey
    
    token = JWT.encode(
    {"exp"=>(((Time.now.to_f * 1000).to_i)+duration.to_i),
      "user_id"=>user_id,
      "user_name"=>user_name,
      "room_id"=>room_id,
      "room_name"=>room_name},skey)
	  
    response.cookies[:KATO_ADHOC_TOKEN] = token
	
  end
end