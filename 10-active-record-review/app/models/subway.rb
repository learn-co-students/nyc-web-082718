class Subway < ActiveRecord::Base
  has_many :rides
  has_many :passengers, through: :rides
end # end of Subway class
