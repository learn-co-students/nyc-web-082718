class AttacksController < ApplicationController
  def index
    attacks = Attack.all
    render json: attacks
  end
end
