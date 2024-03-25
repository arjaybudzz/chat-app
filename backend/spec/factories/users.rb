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
  end
end
