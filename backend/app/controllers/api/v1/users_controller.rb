class Api::V1::UsersController < ApplicationController
	before_action :setup_user, only: %i[show]
	
	wrap_parameters include: %i[username email password password_confirmation]

	def index
		@user = User.all
		render json: @user
	end

	def show
		render json: @user
	end

	def create
		@user = User.build(permitted_user_params)
	
		if @user.save
			render json: @user, status: :created
		else
			render json: @user.errors, status: :unprocessable_entity
		end
	end

	private

	def setup_user
		@user = User.find(params[:id])
	end

	def permitted_user_params
		params.require(:user).permit(:username, :email, :password, :password_confirmation)
	end
end
