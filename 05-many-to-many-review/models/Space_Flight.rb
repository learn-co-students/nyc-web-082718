
class SpaceFlight
  attr_reader :spaceship, :astronaut, :mission_name

  @@all = []
  def initialize(spaceship, astronaut, mission_name)
    @spaceship = spaceship
    @astronaut = astronaut
    @mission_name = mission_name
    @@all << self
  end

  def self.all
    @@all
  end
  # def astronaut
  #   @astronaut
  # end


  def self.mission_names
    all.each do |flight|
      puts "soeminaiurao is #{flight.mission_name}"
    end
  end
end #end SpaceFlight
