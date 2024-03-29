FactoryBot.define do
  factory :user do
    username { Faker::Name.first_name }
    email { Faker::Internet.unique.email }
    password { 'password' }
    password_confirmation { 'password' }

    factory :invalid_input do
	username { Faker::Name.first_name }
	email { 'invalid email' }
	password { 'password' }
	password_confirmation { 'password' }
    end

    factory :sample_user do
	username { 'someuser' }
	email { 'someuser@gmail.com' }
	password { 'password' }
	password_confirmation { 'password' }
	

	trait :correct do
		email { 'someuser@gmail.com' }
		password { 'password' }
	end

	trait :incorrect do
		email { 'someuser@gmail.com' }
		password { 'wrong_password' }
	end	

	factory :valid_login, traits: [:correct]	
	factory :invalid_login, traits: [:incorrect]
    end
  end
end
