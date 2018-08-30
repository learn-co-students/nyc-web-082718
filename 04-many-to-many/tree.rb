require 'pry'

class Tree
    attr_reader :name

    @@all = []
  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end


  ## Tree wants to know all its nests ?
  def my_nests
    Nest.all.select do |nest|
      nest.tree == self
    end
  end
  ## Tree wants to know all of its squirrels?
  def my_squirrels
    my_nests.map do |nest|
      nest.squirrel
    end
  end


end # end Tree class
# binding.pry
