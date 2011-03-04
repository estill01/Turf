class PagesController < ApplicationController

  def home
    @title = "Get want you want"
  end
  
  def about
    @title = "About"
  end
  
  def contact
    @title = "Contact"
  end
  
  def faq
    @title = "How it works"
  end
  
  def tos
    @title = "Terms of Service"
  end

  def privacy
    @title = "Privacy Policy"
  end

end
