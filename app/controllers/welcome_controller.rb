class WelcomeController < ApplicationController

  def index
    if current_user
      render 'welcome/index'
    else
      redirect_to new_user_session_path
    end
  end
end
