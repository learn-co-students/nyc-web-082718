name = "andrew"

def say_name(name)
  puts name
end

say_name(name) # what will happen 🤔

not_hoisted()

def not_hoisted
  puts "Will this method execute 🤔"
end
