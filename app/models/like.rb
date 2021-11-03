class Like < ApplicationRecord
  has_many :movies, through: :user
  belongs_to :movies
  belongs_to :user
  
  def liked
    Movie.where(rating: true)
  end
end
