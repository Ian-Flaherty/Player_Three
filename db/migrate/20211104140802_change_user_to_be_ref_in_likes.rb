class ChangeUserToBeRefInLikes < ActiveRecord::Migration[6.1]
  def change
    remove_column :likes, :user_id, :string
    remove_column :likes, :movie_id, :string
    add_reference :likes, :users, foreign_key: true
    add_reference :likes, :movies, foreign_key: true
  end

end
