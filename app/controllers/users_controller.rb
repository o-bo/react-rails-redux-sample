class UsersController < ApplicationController

  before_action :authenticate_user!

  def index
    respond_to do |format|
      format.html {}
      format.json { render json: Users.all.to_json }
    end
  end
end
