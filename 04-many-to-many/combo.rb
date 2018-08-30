require_relative 'squirrel'
require_relative 'tree'
require_relative 'nest'

s1 = Squirrel.new('Theo')
s2 = Squirrel.new('Avlin')
s3 = Squirrel.new('Smion')
t1 = Tree.new('maple')
t2 = Tree.new('oak')
t3 = Tree.new('pine')
n1 = Nest.new(s1, t1, "needles")
n2 = Nest.new(s1, t1, "needles")
n3 = Nest.new(s2, t1, "needles")
n4 = Nest.new(s2, t2, "needles")
n5 = Nest.new(s3, t3, "needles")
n6 = Nest.new(s3, t3, "needles")
n7 = Nest.new(s3, t3, "needles")

#Deliverables

binding.pry

## Tree wants to know all its nests ?
## Tree wants to know all of its squirrels?
