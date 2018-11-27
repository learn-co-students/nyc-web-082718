class CreateMonsterElements < ActiveRecord::Migration[5.2]
  def change
    create_table :monster_elements do |t|
      t.belongs_to :monster, foreign_key: true
      t.belongs_to :element, foreign_key: true

      t.timestamps
    end
  end
end
