class Monster < ApplicationRecord
  has_many :monster_elements
  has_many :elements, through: :monster_elements

  has_many :monster_attacks
  has_many :attacks, through: :monster_attacks

  has_many :team_assignments
  has_many :teams, through: :team_assignments
end
