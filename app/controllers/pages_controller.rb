class PagesController < ApplicationController
  
  def home
    @user = User.new
    @title = "Turf | Get some"
  end
  
end
