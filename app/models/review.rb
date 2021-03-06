# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  user_id     :integer          not null
#  review_text :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  photo_url   :string
#

class Review < ApplicationRecord
  validates :business_id, :user_id, :review_text, :rating, presence: true
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }
  
  belongs_to :business
  belongs_to :user
end
