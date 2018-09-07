class Passenger < ActiveRecord::Base
  has_many :rides
  has_many :subways, through: :rides
end # end of Passenger class
