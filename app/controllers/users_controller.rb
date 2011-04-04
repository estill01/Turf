class UsersController < ApplicationController

  # def new
  #   @title = "Turf | Get some"
  #   @user = User.new(params[:user])
  # end
  # 
  # def create    
  #   @user = User.new(params[:user])
  #   @user.email = params[:user][:email]
  #   @user.save
  #   redirect_to root_path
  # end


  def new
    @title = "Turf | Get some"
    @user = User.new
  end
  
  def create    
    @user = User.new(params[:user])
    @user.email = params[:user][:email]
    if @user.save
      redirect_to root_path
      @title = "Dope"
    else
      redirect_to root_path
      @title = "Not Dope"
    end
  end


end
