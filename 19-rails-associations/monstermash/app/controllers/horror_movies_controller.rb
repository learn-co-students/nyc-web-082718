class HorrorMoviesController < ApplicationController

  def index
    @horror_movies = HorrorMovie.all
  end

  def show
    @horror_movie = HorrorMovie.find_by(id: params[:id])
    #code
  end

  def new
    @horror_movie = HorrorMovie.new
    #code
  end

  def create
    @horror_movie = HorrorMovie.create(horror_movie_params)
    redirect_to @horror_movie
  end

  def edit
    @horror_movie = HorrorMovie.find_by(id: params[:id])
  end

  def update
    @horror_movie = HorrorMovie.find_by(id: params[:id])
    @horror_movie.update(horror_movie_params)
    redirect_to @horror_movie
  end

  def destroy
    @horror_movie = HorrorMovie.find_by(id: params[:id])
    @horror_movie.destroy
    redirect_to horror_movies_path
  end


private

  def horror_movie_params
    params.require(:horror_movie).permit(:name)
  end

end # end the class
