# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Like.destroy_all
Movie.destroy_all

@admin = User.create!(username: 'LIMA', email: 'mikeflaherty@yahoo.com', password: '123456')
@Bean = User.create!(username: 'BEAN', email: 'johnflaherty@yahoo.com', password: '123456')

puts "#{User.count} users created"

@movie = Movie.create(title: 'Dune', image_url: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg')

puts "#{Movie.count} movies created"

@like = Like.create(user: @admin, movie: @movie, rating: 'true')

puts "#{Like.count} likes created"
