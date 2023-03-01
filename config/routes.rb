Rails.application.routes.draw do
  resources :messages, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'root#index'
  # Defines the root path route ("/")
  # root "articles#index"
end
