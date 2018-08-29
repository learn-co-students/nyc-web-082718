require 'pry'
#need access to the other files
require_relative '../book'
require_relative '../author'


a1 = Author.new("Princess Acorn")
a2 = Author.new("Montell Jordan")
a3 = Author.new("Reverend Run")


 b1 = Book.new("art of war", a1, 49)
 b2 = Book.new("ready player 1", a1, 100)
 b3 = Book.new("GOT", a3, 100)
 b4 = Book.new("HP", a2, 100)


binding.pry
