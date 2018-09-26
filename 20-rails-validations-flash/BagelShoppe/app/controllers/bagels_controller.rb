class BagelsController < ApplicationController
  before_action :find_bagel, only: [:show, :edit, :update, :destroy]

  def index
    @bagels = Bagel.all
  end

  def show

  end

  def new
    @bagel = Bagel.new
  end

  def create
    @bagel = Bagel.create(bagel_params)
    if @bagel.valid?
      redirect_to @bagel
    else
      flash[:error] = @bagel.errors.full_messages
      redirect_to new_bagel_path
    end
  end

  def edit

  end

  def update
    @bagel.update(bagel_params)
    if @bagel.valid?
      redirect_to @bagel
    else
      flash[:error] = @bagel.errors.full_messages
      redirect_to edit_bagel_path
    end

  end

  def destroy
    @bagel.destroy
    redirect_to bagels_path
  end


private

  def bagel_params
    params.require(:bagel).permit(:name, :price)
  end

  def find_bagel
    @bagel = Bagel.find_by(id: params[:id])
  end

end
