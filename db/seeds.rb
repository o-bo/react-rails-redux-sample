# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(email: 'admin@sample.com', password: "adminsamplecom").add_role(:admin)
User.create(email: 'business@sample.com', password: "businesssamplecom").add_role(:business)
User.create(email: 'customer@sample.com', password: "customersamplecom").add_role(:customer)
