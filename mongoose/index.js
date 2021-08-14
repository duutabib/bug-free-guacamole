// create db interaction 

const mongoose = require('mongoose');

const Dishes = require('./models/dishes');


// connection to mongo server

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);


connect.then((db) => {
	console.log('connected to server');
	
	var newDish = Dishes({
		name: "samolin",
		description:  "salmone with some lin"
	});
	
	newDish.save()
		.then((dish) => {
			console.log(dish);
			
			return Dishes.find({}).exec();
		})
		.then((dishes) => {
			console.log(dishes);
			return Dishes.deleteOne({});
		})
		.then(() => {
			return mongoose.connection.close();
		})
		.catch((err) => {
			console.log(err);
		});
});
