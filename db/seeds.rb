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
@movie = Movie.create(title: 'I Love You Man', image_url: 'https://m.media-amazon.com/images/I/51Njncob1tL._AC_.jpg')
@movie = Movie.create(title: 'Batman Beyond', image_url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/404181fc-df58-44ff-b037-1470b14e387b/d9cdfnj-c1977cb9-ff53-443a-b939-14155a8acf07.jpg/v1/fill/w_1280,h_1979,q_75,strp/batman_beyond_movie_poster__edit_by_madhatter139_d9cdfnj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk3OSIsInBhdGgiOiJcL2ZcLzQwNDE4MWZjLWRmNTgtNDRmZi1iMDM3LTE0NzBiMTRlMzg3YlwvZDljZGZuai1jMTk3N2NiOS1mZjUzLTQ0M2EtYjkzOS0xNDE1NWE4YWNmMDcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.stgcO2cOCpH4mO337W7tbv4K1GSamm31AGQhDAriVFU')
@movie = Movie.create(title: 'Shreck', image_url: 'https://m.media-amazon.com/images/I/71HPEO8IJTL._AC_SY679_.jpg')
@movie = Movie.create(title: 'Forest Gump', image_url: 'https://m.media-amazon.com/images/I/61F7SuvJ58L._AC_SL1000_.jpg')
@movie = Movie.create(title: 'The Social Neetwork', image_url: 'https://m.media-amazon.com/images/I/518zV7F39qL._AC_.jpg')
@movie = Movie.create(title: 'Free Guy', image_url: 'https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg')

puts "#{Movie.count} movies created"

@like = Like.create(user: @admin, movie: @movie, rating: 'true')

puts "#{Like.count} likes created"
