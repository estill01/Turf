class UsersController < ApplicationController

  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])
    @user.email = params[:user][:email]
    redirect_to(:root)
    # @user.send_new_user_email
  end
    
end
