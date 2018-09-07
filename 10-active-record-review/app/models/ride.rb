class Ride < ActiveRecord::Base
  belongs_to :passenger
  belongs_to :subway
end # end of Ride class
