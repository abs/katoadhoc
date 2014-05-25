class KatoRoomsController < ApplicationController
  before_action :set_kato_room, only: [:show, :edit, :update, :destroy]
  def index
    url = KatoAdhoc.setInfo('__skey__', __duration__, '__userid__', '__username__', '__roomid__', '__roomname__')
    cookies[:KATO_ADHOC_TOKEN] = url
    respond_to do |format|
      format.html {render action: "index"}
      format.json {render json: { "JWTToken" => url}}
    end
  end
end
