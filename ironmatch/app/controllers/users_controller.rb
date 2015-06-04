class UsersController < ApplicationController

	def index
		@users = User.all
	end

	def show

		@user = User.find params[:id]
		@users = User.all
	end

	def new
		@user = User.new
		@lenguages = Lenguage.all.map{|lenguage| lenguage.name}
	end

	def create
		@user = User.new user_params
		if @user.save
			redirect_to @user
		else
			render 'new'
		end
	end

	private
	def user_params
		params.require(:user).permit(:name, :age, :food, :lenguage, :photo)
	end

end
