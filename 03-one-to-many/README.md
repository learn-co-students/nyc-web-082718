
### The world so far

Objects can create other objects
```ruby
Klass.new(arguements sometimes) -- initialize
  attr_accesor
  @instance_variable - #instance variables/ methods
  @@class_variable # available to Class

class School
  attr_accesor :name, :students
  def initialize(name, students)
    @name = name
     @students = students

  school1 = School.new("flatiron", [Student.new("Brooke", 21, "tall"), "Your Boi", "gchja boi"])
  School.class_method

  class Student
      attr_accesor :name, :age, :height
    def initalize (name, age, height)

  instance_of_student =  Student.new("Brooke", 21, "tall")

  school1.students #=> ["J Cash", "Your Boi", "gchja boi"]
  school1.students[0] #=> <student#9847569845376 @name = "Brooke", @age = 21, @height= "tall">
  school1.students[0].name #=> "Brooke"
```


### Objectives
One to Many
Single Source of Truth

Model: a Class whose primary responsibility is to store data
Domain: The subject matter of the "problem"
Domain modeling: Creating Models for your domain to represent real or abstract ideas
Relationships: How the models/classes are connected to each other
One to many relationship: A relationship describing a single model  that contains or keeps track of other models
one to many another one to many = Many to many

Why do we care so much about codifying and being really specific about the terminology of has-many/belongs-to? The terms are very powerful because we can use the same idea to describe relationships across many different types of domains. The relationship between artist and song, is the same as book and author, user and tweets, etc.


## Objectives

- Implement one object to many objects relationship
  - One object has many objects
  - One object belongs to another object
    - A universe has many galaxies; a galaxy belongs to a universe
    - An author has many books; a book belongs to an author
    - A user has many tweets; a tweet belongs to a user
- Demonstrate single source of truth
- Infer type of method (class or instance) through naming conventions
- Review `self`

---

## Deliverables

- Create a User class. The class should have these methods:
  - `#initialize` which takes a username and have
  - an accessor method for the username
  - `#tweets` that returns an array of Tweet instances
  - `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
- Create a Tweet class. The class should have these methods:
  - `Tweet#message` that returns a string
  - `Tweet#user` that returns an instance of the user class
  - `Tweet.all` that returns all the Tweets created.
  - `Tweet#username` that returns the username of the tweet's user
