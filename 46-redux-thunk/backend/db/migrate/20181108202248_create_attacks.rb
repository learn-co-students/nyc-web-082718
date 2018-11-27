class CreateAttacks < ActiveRecord::Migration[5.2]
  def change
    create_table :attacks do |t|
      t.string :name
      t.integer :power
      t.integer :accuracy
      t.belongs_to :element, foreign_key: true

      t.timestamps
    end
  end
end
