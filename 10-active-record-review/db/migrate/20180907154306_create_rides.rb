class CreateRides < ActiveRecord::Migration[5.2]
  def change
    create_table :rides do |t|
      t.integer :passenger_id
      t.integer :subway_id
    end
  end
end
