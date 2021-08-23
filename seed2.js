const mongoose = require('mongoose');
const City = require('./models/city.model');

mongoose
	.connect(
		'mongodb+srv://younes:xG3eRIaAjemu0jJu@cluster0.48ygn.mongodb.net/hexatrip?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		Promise.all([
			new City({
				name: 'Paris',
				image: 'http://10.0.2.2/assets/images/paris.jpg',
				activities: [
					{
						image: 'http://10.0.2.2/assets/images/activities/louvre.jpg',
						name: 'Louvre',
						city: 'Paris',
						price: 25.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/chaumont.jpg',
						name: 'Chaumont',
						city: 'Paris',
						price: 0.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/dame.jpg',
						name: 'Notre Dame',
						city: 'Paris',
						price: 10.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/defense.jpg',
						name: 'La défense',
						city: 'Paris',
						price: 0.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/effeil.jpg',
						name: 'Tour Eiffel',
						city: 'Paris',
						price: 15.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/luxembourg.jpg',
						name: 'Jardin Luxembourg',
						id: 'a6',
						city: 'Paris',
						price: 0.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/mitterrand.jpg',
						name: 'Bibliothèque Mitterrand',
						id: 'a7',
						city: 'Paris',
						price: 0.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/montmartre.jpeg',
						name: 'Montmartre',
						id: 'a8',
						city: 'Paris',
						price: 0.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/catacombe.jpg',
						name: 'Catacombes',
						id: 'a9',
						city: 'Paris',
						price: 10.0,
					},
				],
			}).save(),
			new City({
				name: 'Lyon',
				image: 'http://10.0.2.2/assets/images/lyon.jpg',
				activities: [
					{
						image: 'http://10.0.2.2/assets/images/activities/lyon_opera.jpeg',
						name: 'Opéra',
						id: 'l1',
						city: 'Lyon',
						price: 100.0,
					},
					{
						image:
							'http://10.0.2.2/assets/images/activities/lyon_bellecour.jpeg',
						name: 'Place Bellecour',
						id: 'l2',
						city: 'Lyon',
						price: 0.0,
					},
					{
						image:
							'http://10.0.2.2/assets/images/activities/lyon_basilique.jpeg',
						name: 'Basilique St-Pierre',
						id: 'l3',
						city: 'Lyon',
						price: 10.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/lyon_mairie.jpeg',
						name: 'Mairie',
						id: 'l4',
						city: 'Lyon',
						price: 0.0,
					},
				],
			}).save(),
			new City({
				name: 'Bordeaux',
				image: 'http://10.0.2.2/assets/images/bordeaux.jpg',
				activities: [
					{
						image: 'http://10.0.2.2/assets/images/activities/bourse.jpg',
						name: 'Place de la Bourse',
						id: 'b1',
						city: 'Bordeaux',
						price: 0.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/citevin.jpg',
						name: 'Cité du Vin',
						id: 'b2',
						city: 'Bordeaux',
						price: 20.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/peyberland.jpg',
						name: 'Tour Pey-Berland',
						id: 'b3',
						city: 'Bordeaux',
						price: 5.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/catherine.jpg',
						name: 'Rue Sainte-Catherine',
						id: 'b4',
						city: 'Bordeaux',
						price: 0.0,
					},
				],
			}).save(),
			new City({
				name: 'Nice',
				image: 'http://10.0.2.2/assets/images/nice.jpeg',
				activities: [
					{
						image:
							'http://10.0.2.2/assets/images/activities/nice_orthodox.jpeg',
						name: 'Eglise Orthodoxe',
						id: 'n1',
						city: 'Nice',
						price: 5.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/nice_riviera.jpeg',
						name: 'Riviera',
						id: 'n2',
						city: 'Nice',
						price: 0.0,
					},
					{
						image:
							'http://10.0.2.2/assets/images/activities/nice_promenade.jpeg',
						name: 'Promenade des Anglais',
						id: 'n3',
						city: 'Nice',
						price: 0.0,
					},
					{
						image: 'http://10.0.2.2/assets/images/activities/nice_opera.jpeg',
						name: 'Opéra',
						id: 'n4',
						city: 'Nice',
						price: 100.0,
					},
				],
			}).save(),
		]).then(res => {
			console.log('data installed');
			mongoose.connection.close();
		});
	});
