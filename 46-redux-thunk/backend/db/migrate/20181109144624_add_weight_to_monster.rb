class AddWeightToMonster < ActiveRecord::Migration[5.2]
  def change
    add_column :monsters, :weight, :integer
  end
end
