require 'pry'

class Squirrel
    attr_reader :name

    @@all = []
  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  ## Squirrel Make a new nest
  def make_nest(tree, materials)
    Nest.new(self, tree, materials)
  end

  ## Squirell all my nests
  def my_nests
    Nest.all.select do |nest|
        nest.squirrel == self
    end
  end

  ## Squirrel is forgetful, how many nests do I have?
  def nest_count
    my_nests.count
  end

  ## Squirrel wants to know which trees I have nests in?
  def my_trees
    # all of my nests.
    ## both the squirrel and the tree
    my_nests.map do |nest|
      # binding.pry
      nest.tree
    end.uniq 
  end


end # end Squirrel class
# binding.pry
