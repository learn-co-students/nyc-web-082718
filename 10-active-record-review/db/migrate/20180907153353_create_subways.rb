class CreateSubways < ActiveRecord::Migration[5.2]
  def change
    create_table :subways do |t|
      t.string :line
      t.integer :capacity
      t.string :status
      t.string :local_or_express
    end
  end
end
