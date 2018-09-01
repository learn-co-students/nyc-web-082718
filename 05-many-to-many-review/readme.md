## Instructions
1. Read the below and map out the relationship, draw a diagram.
2. Create methods to correspond with each of the deliverables.
3. Build out examples in the run file, TEST YOUR CODE!


### Relationships


## Spaceship

<!-- ### Attributes
* name (String)
* been_to_space? (Boolean)
* Spaceships should not be able to change their name, but they should be able to change whether or not they've been to space -->

### Methods
  <!-- * Should return all of the spaceship instances -->
<!-- * Spaceship.find_by_name(name)
  * Should return all of the spaceship instances that match the passed in name -->
<!-- * Spaceship.fresh_spaceship
  * Should return all of the spaceship instances that have not yet been to space -->
<!-- * Spaceship#astronauts
  * Should return all of the astronauts that have been aboard that spaceship -->
<!-- * Spaceship#add_astronaut(astronaut, mission_name)
  * Should associate the astronaut to the spaceship. -->

## Space_Flight

<!-- ### Attributes
* spaceship
* astronaut
* mission_name
* Space_Flights should not be able to change their spaceship, astronaut or mission name -->

### Methods
* Space_Flight.all
  * Should return all of the instances of SpaceFlights
* Space_Flight.mission_names
  * Should puts "The mission name of this spaceship is {insert mission name here}" for every Space_Flight
* Space_Flight#astronaut
  * Should return the astronaut associated with the Space_Flight
* Space_Flight#spaceship
  * Should return the spaceship associated with the Space_Flight



## Astronaut

<!-- ### Attributes
* name (String)
* age (Number)
* been_to_Space? (Boolean)
* Astronauts should be able to change their age and whether they've been to space, but not their name -->

### Methods
* Astronaut.all
  * Should return all of the instances of astronauts
* Astronaut.eldest
  * Should return the oldest astronaut
* Astronaut.been_to_space?
  * Should return an array of astronaut instances, who have visited space
* Astronaut.find_all_by_name(name)
  * Should return all of the astronauts whose name matches the passed in string
* Astronaut#space_flights
  * Should return the number of space_flights that an astronaut has been a part of
* Astronaut#spaceships
  * Should return the name of all of the spaceships that this astronaut has flown in
* Astronaut#add_spaceship(spaceship, misson_name)
  * Should associate an astronaut to a spaceship
