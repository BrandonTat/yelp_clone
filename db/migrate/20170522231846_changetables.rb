class Changetables < ActiveRecord::Migration[5.0]
  def change
    remove_column :businesses, :category_id, :integer    
  end
end
