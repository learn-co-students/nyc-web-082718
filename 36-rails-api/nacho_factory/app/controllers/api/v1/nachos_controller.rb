class Api::V1::NachosController < ApplicationController


  def index # GET /api/v1/nachos
    @nachos = Nacho.all
    render( {json: @nachos, status: :ok} )
  end

  def show
    @nacho = Nacho.find(params[:id])
    render json: NachoSerializer.new(@nacho), status: :ok
  end

  def create # POST api/v1/nachos
    @nacho = Nacho.create(nacho_params)
    #send back the new nacho!
    render json: @nacho, status: :created
  end


  private

  # the internet is scary, lets whitelist the appropriate attributes💪
  def nacho_params
    params.require(:nacho).permit(:name, :price, :tasty)
  end

end
