require 'test_helper'

class KatoRoomsControllerTest < ActionController::TestCase
  setup do
    @kato_room = kato_rooms(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:kato_rooms)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create kato_room" do
    assert_difference('KatoRoom.count') do
      post :create, kato_room: { Get: @kato_room.Get }
    end

    assert_redirected_to kato_room_path(assigns(:kato_room))
  end

  test "should show kato_room" do
    get :show, id: @kato_room
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @kato_room
    assert_response :success
  end

  test "should update kato_room" do
    patch :update, id: @kato_room, kato_room: { Get: @kato_room.Get }
    assert_redirected_to kato_room_path(assigns(:kato_room))
  end

  test "should destroy kato_room" do
    assert_difference('KatoRoom.count', -1) do
      delete :destroy, id: @kato_room
    end

    assert_redirected_to kato_rooms_path
  end
end
