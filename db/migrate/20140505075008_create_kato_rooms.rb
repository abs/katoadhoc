class CreateKatoRooms < ActiveRecord::Migration
  def change
    create_table :kato_rooms do |t|
      t.string :Get

      t.timestamps
    end
  end
end
