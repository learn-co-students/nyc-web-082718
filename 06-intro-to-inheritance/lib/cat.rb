require_relative './pet.rb'

# can initialize a cat
# initializes with a name (FAILED - 1)
# can't change its name <--  don't want a writer, attr_accessor
# initializes with a nervous mood (FAILED - 2)
# can change its mood (FAILED - 3) <- writer, attr_accessor

class Cat < Pet

  attr_reader :speak
  #
  # def initialize(name, speak)
  #   # super is saying "Hey, go into the same method in the parent class and call that method"
  #   super(name)
  #   @speak = speak
  #   binding.pry
  # end

  def initialize(name)
    # super is saying "Hey, go into the same method in the parent class and call that method"
    @speak = "meow"
    binding.pry
    super
  end

  def runs

  end

  def stops

  end

  # attr_reader :name
  # attr_accessor :mood
  #
  # # initialize
  # def initialize(name)
  #   # has a name, but fails??!??!?!
  #   @name = name
  #   # initializes with a nervous mood
  #   # string, boolean, instance variable
  #   @mood = "nervous"
  #
  # end

  # conflicting things between child and parent
  # we'll make some differing functionality.

end
