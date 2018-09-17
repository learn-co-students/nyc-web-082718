class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

  get '/' do
    erb :home
  end

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    erb :form
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  post '/books' do
    Book.create(params)
    redirect '/books'
  end

  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :edit
  end

  patch '/books/:id' do
    book = Book.find(params[:id])
    book.update(title: params[:title], snippet: params[:snippet])
    redirect "/books/#{book.id}"
  end




end
