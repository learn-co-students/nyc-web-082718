require 'pry'
class Astronaut
  attr_reader :name
  attr_accessor :been_to_space, :age

  @@all = []
  def initialize(name, age, been_to_space)
    @name = name
    @age = age
    @been_to_space = been_to_space
    @@all << self
  end

  def self.all
    @@all
  end

end #end Astronaut
