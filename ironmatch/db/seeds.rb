# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


	User.create(name: "Ana", age: 20, food: "Fish and Chips", lenguage: "HMTL", photo: "http://www.beerinlove.com/img/users/anonymous.jpg");
	User.create(name: "Juan", age: 25, food: "Pizza", lenguage: "Javascript", photo: "http://www.beerinlove.com/img/users/anonymous.jpg");
	User.create(name: "Pedro", age: 19, food: "Hamburguer", lenguage: "PHP", photo: "http://www.beerinlove.com/img/users/anonymous.jpg");
	User.create(name: "Noelia", age: 30, food: "Hamburguer", lenguage: "Javascript", photo: "http://www.beerinlove.com/img/users/anonymous.jpg");
	User.create(name: "Tatiana", age: 27, food: "Pizza", lenguage: "PHP", photo: "https://media.licdn.com/media/AAEAAQAAAAAAAAN0AAAAJGFiZDgwYjZhLTUxMDAtNDg2Mi1hYzJmLWVlOTBiM2E0Yzk3Mg.jpg");
	User.create(name: "Julia", age: 18, food: "Pizza", lenguage: "HMTL", photo: "http://www.beerinlove.com/img/users/anonymous.jpg");
	User.create(name: "Manu", age: 27, food: "Pasta", lenguage: "PHP", photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALrAAAAJDA4NWUyYjI5LWMxODYtNGNiNC04NTVlLTdmODU5NzM3YTQ0MA.jpg");
	User.create(name: "Alvaro", age: 31, food: "Fish and Chips", lenguage: "Javascript", photo: "http://www.beerinlove.com/img/users/anonymous.jpg");
	User.create(name: "Sergio", age: 19, food: "Pasta", lenguage: "HMTL", photo: "http://www.beerinlove.com/img/users/anonymous.jpg");
	User.create(name: "Maria", age: 23, food: "Pasta", lenguage: "PHP", photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/23d/0fe/160c340.jpg");

	Lenguage.create(name: "HTML");
	Lenguage.create(name: "PHP");
	Lenguage.create(name: "Javascript");
	Lenguage.create(name: "Ruby on Rails");