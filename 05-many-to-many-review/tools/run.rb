require_relative '../models/Astronaut'
require_relative '../models/Space_Flight'
require_relative '../models/Spaceship'
require 'pry'



s1 = Spaceship.new("apollo", false)
s2 = Spaceship.new("serenity", true)
s3 = Spaceship.new("challenger", false)
s4 = Spaceship.new("apollo", true)
astronaught1 = Astronaut.new("May", 9, true)


space_fight1 = SpaceFlight.new(s1, astronaught1,"YOLO007")
binding.pry
