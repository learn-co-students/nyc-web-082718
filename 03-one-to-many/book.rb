require 'pry'
class Book
  attr_accessor :title, :pages
  attr_reader :author

  @@all = []

  def initialize(title, author, pages)
    @title = title
    @pages = pages
    @author = author
    @@all << self
  end
  # attr_reader :author equivalent
  # def author
  #   @author
  # end

  def self.all
    @@all
  end


end  # end book class
