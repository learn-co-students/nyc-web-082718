require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson" => {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        "Reggie Evans" => {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        "Brook Lopez" => {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        "Mason Plumlee" => {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        "Jason Terry" => {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      }
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien" => {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        "Bismak Biyombo" => {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        "DeSagna Diop" => {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        "Ben Gordon" => {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        "Brendan Haywood" => {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      }
    }
  }
end


# The purpose of this function is to do the following:
# this returns the number of points scored by this player
def num_points_scored(name)
  ## Version 1.0 ##

  # At the end of lecture, we did the following using .each:

  # look through all the players => get a list of players to look through
  game_hash.each do |team, team_data|
    # binding.pry
    # data[:players]["Alan Anderson"][:points]
    team_data[:players].each do |player_name, player_data|
      if player_name == name
        # Exit out of all loops by using return to exit out of this function.
        return player_data[:points]
      end
    end
  end
end
# This will work, but it has a few problems once we consider the next set of
# tests where we want to get shoe sizes.
# 1. It looks very clunky.
# 2. It cannot be easily reused.


# e.g., shoe_size goes through the exact same steps but pulls out :shoe instead.
def shoe_size(name)
  game_hash.each do |team, team_data|
    team_data[:players].each do |player_name, player_data|
      if player_name == name
        return player_data[:shoe]
      end
    end
  end
end
# This works, but if you are copy pasting huge chunks of code like this,
# that's a sign that you should be abstracting into smaller, reusable pieces
# of code. So let's do that.


# Our ideal num_points_scored function:
def num_points_scored(name)
  # 1. write out what I want to do here
  # 2. write out the ideal code for this

  ## Version 2.0 ##

  # 1. get all of the player hashes
  players = get_all_players
    # some imaginary method that will give us all the players from both teams

  # 2. get the player's data who matches the given name
  player_data = players[name]
    # since the keys are the player names, we can get the player's data
    # out of the hash by accessing it like this

  # 3. get the points from that data
  player_data[:points]
    # finally, with the player_data, we can grab out just the value we want
    # and return it (points)
end
# By breaking it up this way, you can begin to see how this would be more
# reusable in the long run. So let's write this by tackling that first step.


# Think about the ideal result of get_all_players.
# This will return a hash of all the players:
# => { name: {  points: }, name: {  points: }, ... }
def get_all_players
  # 1. write out what I want to do here
  # 2. write out the ideal code for this

  ## Version 1.0 ##

  # 1. go through each team
  # 2. add that team's :players to a hash of all players
  # 3. return the final hash of all players

  # start with an empty hash (what we want to eventually return)
  all_players = {}

  # 1. go through each team
  game_hash.each do |team, team_data|
    # 2. use merge! to add the current team's :players to the all_players hash
    all_players.merge! team_data[:players]
  end

  # 3. return all_players
  all_players
end
# If you test this, it will work!
# However, it doesn't look very clean. There's probably a better way.


def get_all_players
  ## Version 2.0 ##

  # Same steps, but with a slight tweak...
  all_players = {}

  # We don't need team. We only want to loop through the data.
  # So, why don't we use .values to and then just loop through the values
  # in the hash!
  game_hash.values.each do |team_data|
    all_players.merge! team_data[:players]
  end

  all_players
end
# If you test this, it will work!
# However, this still isn't quite as clean as we hoped.
#
# Let's take a look at the available iterator methods and see if maybe there's
# a better one to use:
# each... tried that. No.
# map... No, not quite. We'd just end up with a data structure that looks like
#   what I ended up having in class:
#     [
#       { name: {  points: ... }, name: {  points: ... }, ... },
#       { name: {  points: ... }, name: {  points: ... }, ... },
#     ]
# select... No, we aren't trying to pick out values.
# find... No, again we aren't trying to pick out a value.
#
# Stumped? Let's look at the Ruby docs to see if they help.
# They keyword you want to Google is: Enumerable
# These methods that you use to loop through hashes and arrays are methods on
# objects that are enumerable.
# If you search for "Ruby Enumerable", you'll find this page in the Ruby docs:
#   https://ruby-doc.org/core-2.5.1/Enumerable.html
# Take a second to look through the methods. I'll wait...
# ...
# ...
# Ok, you may not have found what to use as it's not a pattern you are familiar
# with yet. What we are doing is *collecting* resources as we iterate through.
# To do that, we want to use the .reduce method:
#   https://ruby-doc.org/core-2.5.1/Enumerable.html#method-i-reduce
# So how does that work?


def get_all_players
  ## Version 3.0 ##

  # Instead of each, we use reduce.
  # Give it the starting object you want to put all of your data into.
  # In our code, that was `all_players = {}`, so we give it an empty hash.
  game_hash.values.reduce({}) do |memo, obj|
    # Now, as you loop through, you will have two variables available on
    # every iteration:
    #   memo => This is all of the data you've collected up until now.
    #   obj => The data for the current iteration.
    #          In our case, this is equal to team_data because we are
    #          iterating over game_hash.values

    # Now, instead of merging everything into all_players, we merge them into
    # our collector: memo
    memo.merge! obj[:players]
  end
  # We don't have to return all_players because the return value of .reduce
  # is the final value of memo.

  # Condensed, our resulting code is much cleaner. Just 3 lines!!
  # game_hash.values.reduce({}) do |memo, obj|
  #   memo.merge! obj[:players]
  # end
end
# If you test this, it will work and it looks good!


# Let's go back to our code and check it out now:
def num_points_scored(name)
  ## Version 2.0 ##

  # 1. get all of the player hashes
  players = get_all_players
  # 2. get the player's data who matches the given name
  player_data = players[name]
  # 3. get the points from that data
  player_data[:points]
end
# This works, but we've been trying to clean up out code.
# How can we clean this up?


def num_points_scored(name)
  ## Version 3.0 ##

  # Instead of constantly assigning to variables, why not do it in one line!
  get_all_players[name][:points]
end
# This reads well and works!


# Now let's take our condensed, clean code and apply it to shoe_size:
def shoe_size(name)
  # Thinking through the steps, it works the same way up until step 3 where
  # instead of trying to get :points, we want to get :shoe.
  # So the same exact line of code will work with a slight tweak:
  get_all_players[name][:shoe]
end
# If you test this, it will work!
# Super clean. Super reusable.


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


## In-lecture Task ##
#
# instructors = [
#   { name: 'Mike', cats: true },
#   { name: 'Brooke', cats: false },
#   { name: 'Evans', cats: true }
# ]
#
# # [ { name: }, { name: }, { name: }]
# # [ 'name', 'name', 'name' ]
# def get_instructor_names(instructors)
#     # instructors.map { |hash| hash[:name] }
#
#     # map will return an array
#     instructors.map do |hash|
#       hash[:name] # returning name
#       # { name: hash[:name] }
#       # hash
#       # puts 'do something'
#     end
# end
#
# # MAP!
# # [
# #   { name: 'Mike', cats: true },     => transformation => result 1
# #   { name: 'Brooke', cats: false },  => transformation => result 2
# #   { name: 'Evans', cats: true }     => transformation => result 3
# # ]
# # # The map's return value:
# # [
# #   result 1,
# #   result 2,
# #   result 3
# # ]
#
# binding.pry
