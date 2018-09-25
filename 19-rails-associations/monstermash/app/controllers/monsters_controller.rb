class MonstersController < ApplicationController
  before_action :find_monster, only: [:show, :edit, :update, :destroy]

  def index
    @monsters = Monster.all
  end

  def show

  end

  def new
    @monster = Monster.new
    @horror_movie_options = HorrorMovie.all.map { |hm| [hm.name, hm.id]}
    #code
  end

  def create
    @monster = Monster.create(monster_params)
    redirect_to @monster
  end

  def edit

  end

  def update

    @monster.update(monster_params)
    redirect_to @monster
  end

  def destroy
    @monster.destroy
    redirect_to monsters_path
  end


private

def monster_params
  params.require(:monster).permit(:name, :fear_factor, :horror_movie_id)
end

def find_monster
  @monster = Monster.find_by(id: params[:id])
end


end
