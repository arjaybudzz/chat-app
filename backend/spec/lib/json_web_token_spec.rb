require "rails_helper"

RSpec.describe JsonWebToken do
	setup do
		@user = create(:user)
		@token = JsonWebToken.encode(user_id: @user.id)
	end

	describe "decoded token must match the original user id" do
		it { expect(JsonWebToken.decode(@token)[:user_id]).to match(@user.id) }
	end
end
