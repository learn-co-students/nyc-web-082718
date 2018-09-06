class Squirrel < ActiveRecord::Base

has_many :nests
has_many :trees, through: :nests

# def nests
#   Nests.all.select do |nest|
#     nest.squirrel == self
#   end
# end
end # end Squirrel Class
