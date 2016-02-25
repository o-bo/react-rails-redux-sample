class UserSerializer < ActiveModel::Serializer

  attribute :id, :email, :created_at, :updated_at
end
