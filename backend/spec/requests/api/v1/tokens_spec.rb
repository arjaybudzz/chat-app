require 'rails_helper'

RSpec.describe "Api::V1::Tokens", type: :request do
  setup do
	@user = create(:sample_user)
  end 

  describe "POST /create" do
 	context 'user logged in correctly' do
		let(:correct_login) { attributes_for(:valid_login) }

		before do
			post api_v1_tokens_url,
			params: { user: correct_login },
			as: :json
		end

		it { expect(json['token'].nil?).to eq(false) }
		it { expect(response).to have_http_status(:success) }
	end

	context 'user logged in incorrectly' do
		let(:incorrect_login) { attributes_for(:invalid_login) }

		before do
			post api_v1_tokens_url,
			params: { user: incorrect_login },
			as: :json
		end 
		
		it { expect(response).to have_http_status(:unauthorized) }
	end
  end
end
