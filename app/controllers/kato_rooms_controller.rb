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

    render json: { url: url  }
  end

  # GET /kato_rooms/1
  # GET /kato_rooms/1.json
  def show
  end

  # GET /kato_rooms/new
  def new
    @kato_room = KatoRoom.new
  end

  # GET /kato_rooms/1/edit
  def edit
  end

  # POST /kato_rooms
  # POST /kato_rooms.json
  def create
    @kato_room = KatoRoom.new(kato_room_params)

    respond_to do |format|
      if @kato_room.save
        format.html { redirect_to @kato_room, notice: 'Kato room was successfully created.' }
        format.json { render :show, status: :created, location: @kato_room }
      else
        format.html { render :new }
        format.json { render json: @kato_room.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /kato_rooms/1
  # PATCH/PUT /kato_rooms/1.json
  def update
    respond_to do |format|
      if @kato_room.update(kato_room_params)
        format.html { redirect_to @kato_room, notice: 'Kato room was successfully updated.' }
        format.json { render :show, status: :ok, location: @kato_room }
      else
        format.html { render :edit }
        format.json { render json: @kato_room.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /kato_rooms/1
  # DELETE /kato_rooms/1.json
  def destroy
    @kato_room.destroy
    respond_to do |format|
      format.html { redirect_to kato_rooms_url, notice: 'Kato room was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_kato_room
    @kato_room = KatoRoom.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def kato_room_params
    params.require(:kato_room).permit(:Get)
  end
end
