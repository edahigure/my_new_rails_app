require 'test_helper'

class MesagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mesage = mesages(:one)
  end

  test 'should get index' do
    get mesages_url
    assert_response :success
  end

  test 'should get new' do
    get new_mesage_url
    assert_response :success
  end

  test 'should create mesage' do
    assert_difference('Mesage.count') do
      post mesages_url, params: { mesage: { text: @mesage.text } }
    end

    assert_redirected_to mesage_url(Mesage.last)
  end

  test 'should show mesage' do
    get mesage_url(@mesage)
    assert_response :success
  end

  test 'should get edit' do
    get edit_mesage_url(@mesage)
    assert_response :success
  end

  test 'should update mesage' do
    patch mesage_url(@mesage), params: { mesage: { text: @mesage.text } }
    assert_redirected_to mesage_url(@mesage)
  end

  test 'should destroy mesage' do
    assert_difference('Mesage.count', -1) do
      delete mesage_url(@mesage)
    end

    assert_redirected_to mesages_url
  end
end
