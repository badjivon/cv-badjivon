Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: "landing#home"
  resources :experiences, only: [:index]
  resources :links, only: [:index]
  resources :projects, only: [:index]
end
