class MonsterAttacksController < ApplicationController
  def index
    monster_attacks = MonsterAttack.all
    render json: monster_attacks
  end
end
