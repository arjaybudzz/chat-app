class Api::V1::TokensController < ApplicationController
	def create
		@user = User.find_by_email(permitted_login_params[:email])

		if @user.authenticate(permitted_login_params[:password])
			render json: {
				token: JsonWebToken.encode(user_id: @user.id),
				id: @user.id
			}

		else
			head :unauthorized
		end
	end

	private

	def permitted_login_params
		params.require(:user).permit(:email, :password)
	end

end
