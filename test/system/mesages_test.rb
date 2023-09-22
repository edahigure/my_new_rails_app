require 'application_system_test_case'

class MesagesTest < ApplicationSystemTestCase
  setup do
    @mesage = mesages(:one)
  end

  test 'visiting the index' do
    visit mesages_url
    assert_selector 'h1', text: 'Mesages'
  end

  test 'should create mesage' do
    visit mesages_url
    click_on 'New mesage'

    fill_in 'Text', with: @mesage.text
    click_on 'Create Mesage'

    assert_text 'Mesage was successfully created'
    click_on 'Back'
  end

  test 'should update Mesage' do
    visit mesage_url(@mesage)
    click_on 'Edit this mesage', match: :first

    fill_in 'Text', with: @mesage.text
    click_on 'Update Mesage'

    assert_text 'Mesage was successfully updated'
    click_on 'Back'
  end

  test 'should destroy Mesage' do
    visit mesage_url(@mesage)
    click_on 'Destroy this mesage', match: :first

    assert_text 'Mesage was successfully destroyed'
  end
end
