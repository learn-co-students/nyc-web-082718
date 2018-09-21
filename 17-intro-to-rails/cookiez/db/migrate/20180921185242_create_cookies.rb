class CreateCookies < ActiveRecord::Migration[5.2]
  def change
    create_table :cookies do |t|
      t.boolean :delicious
      t.string :flavor
      t.integer :size
      t.boolean :gluten_free

      t.timestamps
    end
  end
end
