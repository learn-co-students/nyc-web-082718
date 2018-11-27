class AddEvolutionLevelToMonster < ActiveRecord::Migration[5.2]
  def change
    add_column :monsters, :evo_level, :integer
  end
end
