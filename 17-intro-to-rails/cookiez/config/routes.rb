Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/cookies', to: "cookies#index"
  # get '/cookies/:id', to: "cookies#show"
  resources :cookies
end
