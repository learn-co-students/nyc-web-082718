class Team < ApplicationRecord
  has_many :team_assignments
  has_many :monsters, through: :team_assignments
end
