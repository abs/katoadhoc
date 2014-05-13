class KatoRoomsController < ApplicationController
  before_action :set_kato_room, only: [:show, :edit, :update, :destroy]
  # GET /kato_rooms
  # GET /kato_rooms.json
  def index
    
    url = KatoAdHocExpress.generateKey('__pkey__','__skey__', __duration__,'__userid__', '__username__','__roomid__','__roomname__')
    respond_to do |format|
      format.html {render action: "index"}
      format.json {render json: { "JWTToken" => url}}
    end
  end
end