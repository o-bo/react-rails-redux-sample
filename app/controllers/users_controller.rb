class UsersController < ApplicationController

  before_action :authenticate_user!

  def index
    respond_to do |format|
      format.html {}
      format.json { render json: User.all }
    end
  end


  def create
    user = User.create permit_params

    if user.valid?
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end


  private

  def permit_params
    params.require(:user).permit(:email, :password)
  end
end
