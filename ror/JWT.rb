class KatoRoomsController < ApplicationController
  before_action :set_kato_room, only: [:show, :edit, :update, :destroy]
  # GET /kato_rooms
  # GET /kato_rooms.json
  def index
    user_id = params['userid']
    user_name = params['username']
    room_id = params['roomid']
    room_name = params['roomname']
    duration = params['exp']

    pkey = 'EK1UcCeetSxCVAYEZw9zxr6iCHX0gm1JSSkamHVcxVQ'
    skey = "pTif3EypiNOYIV8_QKQvm3KdJugGjSXVRkHdi0CX_1k"

    token = JWT.encode(
    {"exp"=>(((Time.now.to_f * 1000).to_i)+duration.to_i),
      "user_id"=>user_id,
      "user_name"=>user_name,
      "room_id"=>room_id,
      "room_name"=>room_name,
      "user_email" => "",
      "welcome_text" => "Welcome",
      "welcome_robot_name" => "Welcoming robot"},skey)

    url = 'https://kato.im/adhoc#/' + pkey + '/' + token

    respond_to do |format|
      format.html {render action: "index"}
      format.json {render json: { "JWTToken" => url}}
    end
  end
end