class CreateLenguages < ActiveRecord::Migration
  def change
    create_table :lenguages do |t|

    	t.string :name

      t.timestamps null: false
    end
  end
end
