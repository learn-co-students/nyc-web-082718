class Tree < ActiveRecord::Base
has_many :squirrels, through: :nests
has_many :nests

end # end Tree Class
