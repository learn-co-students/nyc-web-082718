class CreateCerealKillers < ActiveRecord::Migration
  def change
    create_table :cereal_killers do |t|
      t.string :name
      t.string :brand
    end
  end
end
