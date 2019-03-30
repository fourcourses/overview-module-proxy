const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/opentable');
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

// let save = (restaurant) => {
//   var document = new Restaurant({
    

//   })
//   return Restaurant.findOneAndUpdate({id: restaurant.id}, document, {upsert: true, rawResult: true})
//   .then(() => console.log('Successfully Inserted'));
// }

let search = () => {
  console.log('searching');
  return Restaurant.find().sort().limit(25)
}

// module.exports.save = save;
module.exports = db;
module.exports = Restaurant;
module.exports.search = search;