require 'pry'

class Nest
  attr_accessor :squirrel, :tree, :material
  @@all = []

  def initialize(squirrel, tree, material)
    @squirrel = squirrel
    @tree = tree
    @material = material
    @@all << self
  end


  def self.all
    @@all
  end
  
end #end Nest class
