class TeamAssignmentsController < ApplicationController

  def index 
    ta = TeamAssignment.all
    render json: ta
  end 
end
