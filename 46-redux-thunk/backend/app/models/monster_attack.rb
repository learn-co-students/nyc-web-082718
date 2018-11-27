class MonsterAttack < ApplicationRecord
  belongs_to :monster
  belongs_to :attack
end
