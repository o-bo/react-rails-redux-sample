class UsersController < ApplicationController

  before_action :authenticate_user!

  def index
    respond_to do |format|
      format.html {}
      format.json { render json: User.all }
    end
  end
end
