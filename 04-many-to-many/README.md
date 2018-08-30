# ruby-many-to-many-relationships

## SWBAT

* Implement both sides of a many to many relationships
* Practice keeping groups of data related to classes on the class as a class variable
* Demonstrate single source of truth by not storing collections of objects on other objects
* Demonstrate single source of truth by not storing one object in multiple collections


```ruby

class_room = Classroom.new
#bad -- stringland
class_room.students #=> ['ben', 'matt', "stacy"]

class_room.students.first #=> 'ben'
# mo' better Object land
class_room.students #=> ['<Student#6453436 @name="ben"> ', Student.new('matt'), "stacy"]

```

### Reader/WRiters
```ruby
attr_reader :attribute

  # def attribute
  #   @attribute
  # end

  def self.all
    @@all
  end
```

### One to many
<!-- belongs_to generally means should be initialized with other model -->
* Book belongs_to Author
* Author has_many books
```ruby
class Book

def initialize(author)
  @author = author
end
```

### Many to Many
* Project can have many backers
* Backer can back many projects

* Parents can have many Children
* Children can have many parents

* Citi bikes has many Rider
* Rider can ride many Citi bikes

* Ballers can play many games
* Games can be played by many ballers

* Squirrels can have many Trees
* Trees can have many Squirrels
* Squirrel has_many Nests
* Nest belongs_to Squirrel
* also same for tree








### Review 0bject Orientation

#### Passing objects to methods and initializers

```ruby
class_room = Classroom.new
class_room.students = #['forrest', 'Michael']

class_room.students => #[<#Student#aiwojr8qu>,<#Student#a234234u>]

Student.new('Yan')
Student.new(String.new('Yan'))
```

#### Readers and writers
```ruby
def name
  @name
end
attr_reader :name
```
### Intro to many to many relationships

#### One to many relationships
* Author has_many Books
* Book belongs_to

#### Modeling more complex relationships
