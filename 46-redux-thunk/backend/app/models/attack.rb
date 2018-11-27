class Attack < ApplicationRecord
  belongs_to :element 
  
  has_many :monster_attacks 
  has_many :monsters, through: :monster_attacks 
end
