require 'rails_helper'

RSpec.describe User, type: :model do
	describe 'username validations' do
		it { should validate_presence_of(:username) }
	end
	
	describe 'email validations' do
		it { should validate_presence_of(:email) }
	end
end
