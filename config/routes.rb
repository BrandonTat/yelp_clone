Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses do
      resources :reviews, only: [:index, :show, :create, :destroy]
    end
  end
  root "static_pages#root"
end
