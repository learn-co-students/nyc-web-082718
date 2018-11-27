Rails.application.routes.draw do
  resources :team_assignments
  resources :teams
  resources :monster_attacks, only: [:index]
  resources :monster_elements, only: [:index]
  resources :attacks, only: [:index]
  resources :monsters, only: [:index]
  resources :elements, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
