class AddMainAttackToMonster < ActiveRecord::Migration[5.2]
  def change
    add_column :monsters, :main_attack_id, :integer
  end
end
