class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name
      t.integer :fear_factor
      t.integer :horror_movie_id

      t.timestamps
    end
  end
end
