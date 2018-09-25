Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :beanie_babies, except: [:show]
  get 'beanie_babies/:id', to: 'beanie_babies#show', as:'johrten'

end
