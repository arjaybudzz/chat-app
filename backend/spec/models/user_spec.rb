require 'rails_helper'

RSpec.describe User, type: :model do
	describe 'username validations' do
		it { should validate_presence_of(:username) }
	end
	
	describe 'email validations' do
		it { should validate_presence_of(:email) }
		it { should validate_uniqueness_of(:email).case_insensitive }
		context 'email format validation' do
			invalid_emails = %w[example @example example.com]
			invalid_emails.each do |invalid_email|
				it { should_not allow_value(invalid_email).for(:email) }
			end
		end
	end

	describe 'password validations' do
		it { should have_secure_password }
	end
end
