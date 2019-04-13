const mongoose = require('mongoose');
const mongoUri = 'mongodb://172.17.0.2/opentable';
mongoose.connect(mongoUri);
const db = mongoose.connection;
mongoose.Promise = global.Promise;

let resSchema = mongoose.Schema({ 
	id: Number,
  name: String,
  description: String,
  images: [
    {imageUrl: String,
     caption: String}],
	reviews: Number,
	rating: Number,
	tags: [String],
	priceRange: {
                start: Number,
                end: Number
                },
	type: [String]
});

let Restaurant = mongoose.model('Restaurant', resSchema);

let search = (id) => {
  return Restaurant.find({id: id}).sort().limit(25)
}


module.exports.db = db;
module.exports.Restaurant = Restaurant;
module.exports.search = search;