class KatoRoomsController < ApplicationController
  before_action :set_kato_room, only: [:show, :edit, :update, :destroy]
  # GET /kato_rooms
  # GET /kato_rooms.json
  def index

    pkey = '__pkey__'
    skey = '__skey__'
    duration = __duration__
    
    token = JWT.encode(
    {"exp"=>(((Time.now.to_f * 1000).to_i)+duration.to_i),
      "user_id"=>__userid__,
      "user_name"=>"__username__",
      "room_id"=>__roomid__,
      "room_name"=>"__roomname__",
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