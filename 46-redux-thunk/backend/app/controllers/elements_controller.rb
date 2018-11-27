class ElementsController < ApplicationController
  def index
    elements = Element.all
    render json: elements
  end
end
