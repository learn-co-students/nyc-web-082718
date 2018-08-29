require 'pry'
class Author
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name
    # push self to the class variables
    @@all << self
  end

  def self.all
    @@all
  end

  #write a new book
  def write_book(title, pages)
    Book.new(title, self, pages)
  end

  #how many books did I(me) write?
  def my_books
    #Need all them books doe
    # author is me?
    Book.all.select do |book_obj|
      book_obj.author == self
    end

  end

  # My books more than 50 pages long
  def my_long_books
    # go through all of *MY BOOKS*
    # check if the pages are greater than 50
    # return a new list of those books that are over 50 pages
    my_books.select do |book|
      book.pages > 50
    end
  end

end # end Author class
# binding.pry
