class HomesController < ApplicationController
  before_action :set_home, only: [:show, :edit, :update, :destroy]
  # GET /homes
  # GET /homes.json
  def index
    
    @php =File.read('./PHP/index.php')
    @phphtml =File.read('./PHP/template.html')
    
    @node = File.read('./nodejs/app.js')
    @nodehtml = File.read('./nodejs/index.html')
   
    @net = File.read('./net/JWT.cs')
    @nethtml = File.read('./net/index.html')
   
    @ror = File.read('./ror/JWT.rb')
    @rorhtml = File.read('./ror/index.html')
    
    @django = File.read('./python/views.py')
    @djangohtml = File.read('./python/katoTemplate.html')
    
  end

  # GET /homes/1
  # GET /homes/1.json
  def show
  end

  # GET /homes/new
  def new
    @home = Home.new
  end

  # GET /homes/1/edit
  def edit
  end

  # POST /homes
  # POST /homes.json
  def create
    @home = Home.new(home_params)

    respond_to do |format|
      if @home.save
        format.html { redirect_to @home, notice: 'Home was successfully created.' }
        format.json { render :show, status: :created, location: @home }
      else
        format.html { render :new }
        format.json { render json: @home.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /homes/1
  # PATCH/PUT /homes/1.json
  def update
    respond_to do |format|
      if @home.update(home_params)
        format.html { redirect_to @home, notice: 'Home was successfully updated.' }
        format.json { render :show, status: :ok, location: @home }
      else
        format.html { render :edit }
        format.json { render json: @home.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /homes/1
  # DELETE /homes/1.json
  def destroy
    @home.destroy
    respond_to do |format|
      format.html { redirect_to homes_url, notice: 'Home was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_home
    @home = Home.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def home_params
    params[:home]
  end
end
