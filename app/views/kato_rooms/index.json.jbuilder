json.array!(@kato_rooms) do |kato_room|
  json.extract! kato_room, :id, :Get
  json.url kato_room_url(kato_room, format: :json)
end
