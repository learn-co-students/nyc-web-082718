class CerealKillerController < ApplicationController
set :method_override, true
#CRUD

# Index - SHOW ALL DEM killaz
  #"/killers"
get '/cerealkiller' do
  @cerealkillers = CerealKiller.all #reach into the database grab my data
  erb :'cerealkiller/index' #show all cerealkiller view (index)
end

#  Create - Make a new one
# form
get '/cerealkiller/new' do
  erb :'cerealkiller/new' #show new cerealkiller view
end

# SHOW - Show One specific item and all the deetz
get '/cerealkiller/:id' do
  #gets params from url
  @cerealkiller = CerealKiller.find(params[:id]) #define instance variable for view
  erb :'cerealkiller/show' #show single cerealkiller view

end

post '/cerealkiller' do
  #below works with properly formatted params in HTML form
  @cerealkiller = CerealKiller.new(params) #create new cerealkiller
  if @cerealkiller.save #saves new cerealkiller or returns false if unsuccessful
    redirect "/cerealkiller/#{@cerealkiller.id}" #redirect back to cerealkiller index page
  else
    erb :'cerealkiller/new' # show new cerealkiller view again(potentially displaying errors)
  end
end

# Edit - Make changes to an exisiting entry
  # form
get '/cerealkiller/:id/edit' do
  #get params from url
  @cerealkiller = CerealKiller.find(params[:id]) #define intstance variable for view
  erb :'cerealkiller/edit' #show edit cerealkiller view
end

patch '/cerealkiller/:id' do

  #get params from url
  @cerealkiller = CerealKiller.find(params[:id]) #define variable to edit

  @cerealkiller.update(name: params[:name], brand: params[:brand]) #assign new attributes

  if @cerealkiller.save #saves new cerealkiller or returns false if unsuccessful
    redirect '/cerealkiller' #redirect back to cerealkiller index page
  else
    erb :'cerealkiller/edit' #show edit cerealkiller view again(potentially displaying errors)
  end

end

# DESTROY!! >:(



end
