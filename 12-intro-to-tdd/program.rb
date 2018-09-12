require 'pry'

def is_palindrome?(word)
  raise ArgumentError if !word.is_a?(String)
  downcased_word = word.downcase.gsub(/\W/,"")
  return false if downcased_word.length < 2
  downcased_word == downcased_word.reverse

  # word == word.reverse
  #
  # if word.class != String
  #   raise ArgumentError
  # # elsif word.empty?
  # #   false
  # elsif word.length < 2
  #   false
  # else
  #   word == word.reverse
  # end
end
