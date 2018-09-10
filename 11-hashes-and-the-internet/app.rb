require 'rest-client'
require 'json'
require 'pry'



def get_input
  gets.chomp
end

def fetch_response(input)
  # interpolate
  # change spaces to pluses => .split.join("+") .sub(" ", "+")
  # what about bad urls??
  RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{input.sub(" ", "+")}"
end

def fetch_books(response)
  json = JSON.parse(response)
  json["items"]
end

def get_book_info(book_hash)
  book_hash["volumeInfo"]
end

def delimiter(num)
  puts "\n"
  # 20.times do
  #  print "*"
  # end
  puts "*" * num
end

def print_books(books)
  # each, map, select
  books.each do |book|
    print_book(get_book_info(book))
    delimiter(20)
  end
end

def print_book(book)
  puts book["title"]

  if book["authors"]
    puts book["authors"].join(', ')
  else
    puts "Not available. Not very effective. No authors found."
  end

  puts book["description"]
  puts book["publishedDate"]
end

def find_keywords(books, keyword)
  books.select do |book|
    # binding.pry
    # .downcase.split(" ").include?(keyword.downcase)
    # .downcase.include?(keyword.downcase)
    # what about punctuation?
    description = get_book_info(book)["description"]
    description.downcase.include?(keyword.downcase)
  end
end

def published_since(year)
end

def run
  puts "What do you want to know about fool?"
  input = get_input
  response = fetch_response(input)
  books = fetch_books(response)
  print_books(books)
  puts "Enter a keyword fool..."
  keyword = get_input
  books_with_keyword = find_keywords(books, keyword)
  print_books(books_with_keyword)
end

run

binding.pry





# find keywords in description
# return books published in the last 5 years
# let's print out book information for ^^^
# search for different kinds of books
