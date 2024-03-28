require 'rails_helper'

RSpec.describe "Api::V1::Users", type: :request do
  
  setup do
	@user = create(:user)
	@user_valid_input = attributes_for(:user)
	@user_invalid_input = attributes_for(:invalid_input)
  end

  describe "GET /index" do
  	before do
		create_list(:user, 9)
		get api_v1_users_url, as: :json
	end
	
	it { expect(json.length).to eq(10) }	
	it { expect(response).to have_http_status(:success) }
  end
  

  describe "GEt /show" do
	before do
		get api_v1_user_url(@user), as: :json
	end

	it { expect(json['username']).to match(@user.username) }
	it { expect(response).to have_http_status(:success) }	
  end

  describe "POST /create" do
	context 'user enters valid input' do
		before do
			post api_v1_users_url,
			params: { user: @user_valid_input },
			as: :json
		end
		
		it { expect(response).to have_http_status(:created) }
	end

	context 'user enters invalid input' do
		before do
			post api_v1_users_url,
			params: { user: @user_invalid_input },
			as: :json
		end

		it { expect(response).to have_http_status(:unprocessable_entity) }
	end
	
  end


  describe "PATCH /update" do
	context "user enters valid input" do
		before do
			patch api_v1_user_url(@user),
			params: { user: @user_valid_input }, 
			as: :json
		end

		it { expect(response).to have_http_status(:success) }
	end


	context 'user enters invalid input' do
		before do
			patch api_v1_user_url(@user),
			params: { user: @user_invalid_input },
			as: :json
		end

		it { expect(response).to have_http_status(:unprocessable_entity) }
	end
  end

  describe 'DELETE /destroy' do
	before do
		delete api_v1_user_url(@user), as: :json
	end

	it { expect(response).to have_http_status(:no_content) }
  end
 	
end
























