
puts "Creating Passengers"
10.times do
  Passenger.create(name: Faker::FunnyName.name, age: Faker::Number.between(1, 60), neighborhood: Faker::Address.state, gender: Faker::Gender.type)
end
puts "Passengers created!"

puts "Creating Subways"
10.times do
  Subway.create(line: Faker::Color.color_name, capacity: Faker::Number.between(1, 1000), status: 'Delayed', local_or_express: ['Local', 'Express'].sample)
end
puts "Subways created!"

puts "Creating Rides"
10.times do
  Ride.create(subway_id: Subway.all.sample.id, passenger_id: Passenger.all.sample.id)
end
puts "Rides created!"
