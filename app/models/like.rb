class Like < ApplicationRecord
  has_many :movies
  belongs_to :users
end
