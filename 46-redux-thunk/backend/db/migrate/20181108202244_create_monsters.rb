class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name
      t.integer :hp
      t.integer :power
      t.integer :defense
      t.integer :speed
      t.integer :special_attack
      t.integer :special_defense

      t.string :sprite_front
      t.string :sprite_back

      t.timestamps
    end
  end
end
