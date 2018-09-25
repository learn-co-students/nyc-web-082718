class BeanieBabiesController < ApplicationController

  #all them beanie babies
  def index
    @beanie_babies = BeanieBaby.all
  end

  #'beaniebabies/:id'
  def show
    @beanie_baby = BeanieBaby.find_by(id: params[:id])
  end

  #get request to the form
  def new
    @beanie_baby = BeanieBaby.new
  end

  #post - create a new beaniebaby
  def create
    @beanie_baby = BeanieBaby.create(beanie_baby_params)
    if @beanie_baby.valid?
      redirect_to @beanie_baby
    else
      flash[:error] = @beanie_baby.errors.full_messages
      redirect_to new_beanie_baby_path
    end
  end

  # get edit form
  def edit
    @beanie_baby = BeanieBaby.find_by(id: params[:id])
  end

  #put/patch to edit the database
  def update
    @beanie_baby = BeanieBaby.find_by(id: params[:id])
    @beanie_baby.update(beanie_baby_params)
    if @beanie_baby.valid?
      redirect_to @beanie_baby
    else
      flash[:error] = @beanie_baby.errors.full_messages
      redirect_to edit_beanie_baby_path
    end
  end

  #delete -- destroy the instance from database
  def destroy
    @beanie_baby = BeanieBaby.find_by(id: params[:id])
    @beanie_baby.destroy
    redirect_to beanie_babies_path
  end


  private


  ### STRONG 💪 params
  # whitelist params that I want to prevent haX0rZ
  def beanie_baby_params
    params.require(:beanie_baby).permit(:name, :price)
  end

end
