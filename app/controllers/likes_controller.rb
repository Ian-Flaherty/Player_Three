class LikesController < ApplicationController
  before_action :set_like, only: [:show, :update, :destroy]
  before_action :authorize_request

  # GET /likes
  def index
    @likes = @current_user.likes

    render json: @likes, include: :movie
  end

  # GET /likes/1
  def show
    render json: @like, include: :movie
  end

  # POST /likes
  def create
    @like = Like.new(like_params)
    
    if @like.save
      render json: @like, include: :movie, status: :created, location: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /likes/1
  def update
    if @like.update(like_params)
      render json: @like, include: :movie
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /likes/1
  def destroy
    @like.destroy
  end
  
  def add_movie
    @movie = Movie.find(params[:movie_id])
    @like = Like.find(params[:id])
    
    @like.movies << @movie
    render json: @like, include: :movies
  end
  
  private
  
  # Use callbacks to share common setup or constraints between actions.
  def set_like
    @like = Like.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def like_params
    params.require(:like).permit(:user_id, :movie_id, :rating)
  end
end
