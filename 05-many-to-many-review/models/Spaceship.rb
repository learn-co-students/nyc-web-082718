require 'pry'
class Spaceship
  attr_reader :name
  attr_accessor :been_to_space

  @@all = []

  def initialize(name, been_to_space)
    @name = name
    @been_to_space = been_to_space
    @@all << self
  end

  def self.all
    @@all
  end
#  * Should return all of the spaceship instances that match the passed in name
  def self.find_by_name(name)
    self.all.select do |space_ship|
      # binding.pry
      space_ship.name == name
    end
  end
# Should return all of the spaceship instances that have not yet been to space
  def self.fresh_spaceship
    self.all.select do |space_ship|
      # binding.pry
      space_ship.been_to_space == false
    end
  end

  def my_flights
    SpaceFlight.all.select do |flight|
      flight.spaceship == self
    end
  end

  # * Should return all of the astronauts that have been aboard that spaceship

   def astronauts
     my_flights.map do |flight|
       flight.astronaut
     end
   end#astronauts

  # * Should associate the astronaut to the spaceship.
   def add_astronaut(astronaut, mission_name)
     SpaceFlight.new(self, astronaut, mission_name)
   end

end #end Spaceship


# binding.pry
