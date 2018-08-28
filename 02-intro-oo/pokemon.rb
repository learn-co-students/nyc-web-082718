require 'pry'

# global variables
# $omg

class Pokemon
  attr_accessor :name
  attr_reader :type, :level
  # attr_writer :level

  @@all = []
  # binding.pry

  def initialize(name, level, type)
    @name = name
    @level = level
    @type = type
    binding.pry
    # self < = instance
    @@all << self
  end

  def level_up!
    @level = @level + 1
  end

  def eat_rare_candy(number)
    number.times do
      level_up!
    end
  end

  def self.all
    # binding.pry
    @@all
  end

  # @name
  # @level
  # @type

  # 1. how to shorten this very
  # repetitive code
  # 2. how to just do this in one line

  # getter
  # def name
  #   @name
  # end

  # assign / setter
  # def name=(name)
  #   @name = name
  # end

  # def level
  #   @level
  # end

  # def level=(level)
  #   @level = level
  # end

  # def type
  #   @type
  # end

  # def type=(type)
  #   @type = type
  # end

end

binding.pry
