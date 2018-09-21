# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "makin dem cookiezzzz"
Cookie.create(delicious: true, flavor: "oatmeal RAIZIN", size: 7, gluten_free: true )
Cookie.create(delicious: true, flavor: "chocolate chip", size: 10, gluten_free: false )
Cookie.create(delicious: true, flavor: "dough$$$", size: 2, gluten_free: true )
Cookie.create(delicious: false, flavor: "white chocolate chip", size: 5, gluten_free: true )
