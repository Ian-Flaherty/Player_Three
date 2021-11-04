class NameColumnsAndLikes < ActiveRecord::Migration[6.1]
  def change
    rename_column :likes, :users_id, :user_id
    rename_column :likes, :movies_id, :movie_id

  end
end
