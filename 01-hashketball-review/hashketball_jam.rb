require 'pry'

# Before diving into the lecture objectives, there was one thing that had
# to be done to this dataset so we could *meaningfully* play around with
# each, map, select, and find.
# That is convert the :players key in the hash into an array of hashes
# where the player name is just another key in the hash like this:
# players: [
#   { player_name: "Alan Anderson", number: 0, shoes: 16, ... },
#   { player_name: "Reggie Evans", number: 30, shoes: 14, ... },
#   ...
# ]
#
# So, our new starting point is this:
def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end


# From here, we can pick up from the point in the lecture where we were trying
# to build out num_points_scored:
def num_points_scored(name)

end


# Our goal is the same: return the number of points scored by this player
def num_points_scored(name)
  # However, our data is now different.

  # Given that we have :home and :away, each being a hash with a :players key
  # that is now an array of player hashes (name included), we cannot do this
  # anymore to get the matching player:
  #   game_hash[:home][:players][name]
  # Try it out with binding.pry. You'll get this error:
  #   TypeError: no implicit conversion of String into Integer
  # That's because game_hash[:home][:players] is an array and trying to use
  # [name] on it won't work as that would be how you try to access a value
  # in array based on it's position (name is a string, not an integer).

  # So what do we want to do here?
  # 1. write out what I want to do here
  # 2. write out the ideal code for this

  # Let's break it down into steps:
  # 1. get an array of all the players
  # 2. loop through that array and pick out the one whose name matches
  # 3. get the points for that player

  # Let's write out our ideal code for accomplishing this:
  players = get_all_players
  player = find_player(players, name)
  player[:points]
end
# Given the imaginary methods:
# => get_all_players: returns all of the players in a single array
# => find_player: returns the player whose name matches
# This will work. So let's write them.


# returns all of the players from both teams in a single array:
#   [ { player_name, number, ... }, { player_name, number, ... }, ... ]
def get_all_players
  # Same steps:
  # 1. write out what I want to do here
  # 2. write out the ideal code for this

  # 1. go through each team
  # 2. compile the players into a single array

  # The ideal code doesn't read in a way that can be broken down into other
  # functions. At least not any that sound meaningful.
  # That's a good sign that you should do all the work here.

  ## Attempt #1 ##

  # 1. go through each team ==> programatically means loop through them
  game_hash.each do |team, team_data|
    # 2. compile the players into a single array
    # For this, we need some place to compile them, so let's add that first...
  end

  ## Attempt #2 ##
  all_players = [] # place to store all the players as we loop

  game_hash.each do |team, team_data|
    # Now for each player, we need to loop through them and add them to all_players:
    team_data[:players].each do |player|
      all_players << player
    end
  end

  # Let's check what we have as a result:
  # binding.pry
  # Awesome! It works. We can now return all_players.
  all_players
end
# This is good and works, but it looks a bit clunky.
# Perhaps there is a better way...


def get_all_players
  ## Version 2.0 ##

  all_players = []

  # Same steps, but since we don't care about team, let's use .values to just
  # iterate over the team_data:
  game_hash.values.each do |team_data|
    team_data[:players].each do |player|
      all_players << player
    end
  end

  all_players
end
# Better... but only slightly so.
# Maybe there's some magic in Ruby to help us.


def get_all_players
  ## Version 3.0 ##

  all_players = []

  game_hash.values.each do |team_data|
    # Maybe Ruby can let us use shovel (<<) and it will be able to combine
    # the arrays for us?
    all_players << team_data[:players]
  end

  # binding.pry
  # Nope. Our data now looks like this:
  # [
  #   [ { player }, { player }, ... ],
  #   [ { player }, { player }, ... ]
  # ]
  # But... there is actually a neat method you can use to convert nested arrays
  # into a single array!
  # I can't quite remember the name, so let's look it up.
  # If you Google "ruby array methods", you'll find this doc page:
  #   https://ruby-doc.org/core-2.2.0/Array.html
  # See if you can find the method I'm talking about...
  # ...
  # Back? Did you find it?
  # It's .flatten
  #   https://ruby-doc.org/core-2.2.0/Array.html#method-i-flatten
  all_players.flatten
end
# Even better. We used built-in methods to make our code even shorter.
# However, we can do better!!


def get_all_players
  ## Version 4.0 ##

  all_players = []

  game_hash.values.each do |team_data|
    all_players << team_data[:players]
  end
  # This pattern of going through each value and then plucking out just a single
  # piece of the data is very, very common.
  # What we are doing is what .map was built for.

  ## Example of .map ##
  instructors = [
    { name: 'Mike', cats: true },
    { name: 'Brooke', cats: false },
    { name: 'Evans', cats: true }
  ]
  # Goal, get an array that looks like this:
  #   ['Mike', 'Brooke', 'Evans']
  # This can be accomplished by .map:
  instructor_names = instructors.map do |instructor|
    instructor[:name]
  end
  # The result of map is the data you returned in each iteration.
  # Map is very cool in that you can do more than just pick data to return.
  # You can also transform the data!
  # For example, doubling the number in this array:
  x = [1, 2, 3, 4]
  doubled_x = x.map do |num|
    num * 2
  end
  # doubled_x == [2, 4, 6, 8]
  # Or even more fun, deciding what to return based on the data you are looping over:
  meow = instructors.map do |instructor|
    if instructor[:cats]
      instructor[:cats] = "😸"
    else
      instructor[:cats] = "😿"
    end
    instructor
  end
  # meow == [{ name: "Mike", cats: "😸" }, { name: "Brooke", cats: "😿" }, { name: "Evans", cats: "😸" }]

  # Knowing how map works, we can now rewrite our .each but with a map instead
  # and get rid of the initial empty array, all_players = [], because .map
  # will now return the same resulting value:
  all_players = game_hash.values.map do |team_data|
    # We can also get rid of the shovel as we don't need to put them into an array.
    team_data[:players]
  end

  # binding.pry
  all_players.flatten
end
# Even better, but let's do one more tweak to make this code really consise.


def get_all_players
  ## Version 5.0 ##

  # We can just chain .flatten onto the end of map.
  # By doing this, we can get rid of all_players.
  game_hash.values.map do |team_data|
    team_data[:players]
  end.flatten
end
# Bam!! Super concise, three lines of code.


# Back to our original goal:
def num_points_scored(name)
  players = get_all_players # Works!
  player = find_player(players, name) # Up next...
  player[:points]
end


# returns the player whose name matches
def find_player(players, name)
  # 1. write out what I want to do here
  # 2. write out the ideal code for this

  # 1. look at each player
  # 2. pick the one whose name matches

  # Very straightforward, so again, we should do the work here.
  # Now if we're looping through all the players to find the right one,
  # we could start in the same way that we started trying to do get_all_players.
  # And we'll end up with something like this:
  the_player = {}
  players.each do |player|
    if player[:player_name] == name
      the_player = player
    end
  end
  the_player

  # But, as we know. This probably isn't ideal. So let's look for a method
  # that better does what we want. Back to the docs:
  #   https://ruby-doc.org/core-2.2.0/Array.html
  # ...
  # Back? What did you find?
  # There are two that look interesting: .select and .find
  # They both read like they do what we want, but there must be a difference.
  the_player = players.select do |player|
    # .select wants you to return a true or false value
    # anything true will count as a match that will be returned.
    # So all we need is the conditional part of our if statement:
    player[:player_name] == name
  end
  # binding.pry
  # Check the result, and it looks almost good.
  # the_player == [{ player }]
  # An array with a single player.
  # We could return the matching player like this:
  the_player[0]
  # However, that's not ideal. If we read .select more closely, we realize that
  # it returns *all* matches. So if more than one thing matches our conditional,
  # then this array will be more than a single thing.

  # Let's try .find:
  the_player = players.find do |player|
    # It expects the same thing so the same conditional here:
    player[:player_name] == name
  end
  # binding.pry
  # Check the result, and it looks perfect!
  # the_player == { player }
  # So what is the difference?
  # .find will return the very *first* match.
  # .select will return all matches; hence the array as a result.
  # When you need to just find a single thing, use .find.
  # When you want to select all the matches, use .select.
  the_player
end


# Since .find return what we want, we can now cleanup our code into this:
def find_player(players, name)
  players.find do |player|
    player[:player_name] == name
  end
end
# Nice and concise.


# Back to our original goal:
def num_points_scored(name)
  players = get_all_players # Works!
  player = find_player(players, name) # Works!

  # binding.pry
  player[:points] # Does this work?
  # Test it and you'll see that it does!
end
# Of course, we've done nothing but make our code shorter, cleaner, and more readable.
# Let's do that to num_points_scored.


def num_points_scored(name)
  players = get_all_players
  find_player(players, name)[:points]
end
# Condensing some of the code will make this much more readable.
# Now that that is working, let's tackle the next test: show_size


# return the show size of this player
def shoe_size(name)
  # 1. write out what I want to do here
  # 2. write out the ideal code for this

  # 1. get an array of all the players
  # 2. loop through that array and pick out the one whose name matches
  # 3. get the shoe size for that player
  # Deja vu?
  # We can use the same exact methods to accomplish this task!

  players = get_all_players
  find_player(players, name)[:shoe] # :shoe is the only tweak we need
end
# Test it, and it works!


## Conclusion ##
# The takeaway from all of this is that by breaking up your complex tasks into
# small, granular tasks, you will be able to write code that:
# 1. Is readable.
# 2. Is reusable.
# 3. Easier to compose.
#
# Methods that have one job are easier to reuse and compose together.
# That is what we call the *Single Responsibility Principle*.
# Your methods should do one job and one job only.
