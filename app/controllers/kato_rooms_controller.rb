class KatoRoomsController < ApplicationController
  before_action :set_kato_room, only: [:show, :edit, :update, :destroy]
  # GET /kato_rooms
  # GET /kato_rooms.json
  def index

    @url =KatoAdHocExpress.setInfo( "EMxxK0z32ULskJgTKlgrouB6C9fDIjkXq92UPb1ICwk",3600, "1", "foo", "1", "bar")
    cookies[:KATO_ADHOC_TOKEN] = @url
    
    
    respond_to do |format|
      format.html {render action: "index"}
      format.json {render json: { "JWTToken" => @url}}
    end
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
