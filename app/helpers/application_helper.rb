module ApplicationHelper

  def title
    default_title = "ShopperSeeks | Get what you want"
    base_title = "ShopperSeeks | "
    
    if @title.nil?
      default_title
    else
      "#{base_title} + #{@title}"
    end
  end


end
