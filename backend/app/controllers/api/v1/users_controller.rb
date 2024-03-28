class Api::V1::UsersController < ApplicationController
	before_action :setup_user, only: %i[show update destroy]
	
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

	def update
		if @user.update(permitted_user_params)
			render json: @user, status: :ok
		else
			render json: { errors: @user.errors }, status: :unprocessable_entity
		end
	end

	def destroy
		@user.destroy
		head 204
	end

	private

	def setup_user
		@user = User.find(params[:id])
	end

	def permitted_user_params
		params.require(:user).permit(:username, :email, :password, :password_confirmation)
	end
end
