const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/opentable';
const db = mongoose.connect(mongoUri);
mongoose.Promise = global.Promise;

let resSchema = mongoose.Schema({ 
	id: Number,
  name: String,
  description: String,
  imageUrl: [String],
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
  console.log('searching');
  return Restaurant.find({id: id}).sort().limit(25)
}


module.exports = db;
module.exports = Restaurant;
module.exports.search = search;