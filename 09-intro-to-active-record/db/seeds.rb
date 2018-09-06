require 'faker'


puts " Making Squirrels in the factory "
Squirrel.create(name: Faker::Name.name, color: Faker::Color.color_name)
Squirrel.create(name: Faker::Name.name, color: Faker::Color.color_name)
# Squirrel.create(name: Faker::Name.name, color: Faker::Color.color_name)
# Squirrel.create(name: Faker::Name.name, color: Faker::Color.color_name)
# Squirrel.create(name: Faker::Name.name, color: Faker::Color.color_name)
p "Squirrelzzz done "

p 'tree time'
Tree.create(name: Faker::FamilyGuy.character)
p ' treezzz done '

p 'nests'
Nest.create(squirrel_id: Squirrel.all.sample.id, tree_id: Tree.all.sample.id)
p 'n done.'
