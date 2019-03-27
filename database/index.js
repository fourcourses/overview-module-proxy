const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/opentable');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


let overviewSchema = mongoose.Schema({
  id: Number,
  Name: String,
  imageUrl: Array,
  Reviews: Number,
  Rating: Number,
  Tags: Array,
  Price_Range: Array,
  Type: Array
});

let overview = mongoose.model('Overview', repoSchema);

// let save = (overview) => {
//   var document = new Repo({

//   })
//   return Repo.findOneAndUpdate({id: repo.id}, document, {upsert: true, rawResult: true})
//   .then(() => console.log('Successfully Inserted'));
// }

// let find = () => {
//   console.log('searching');
//   return Repo.find().sort({'forks': -1}).limit(25)
// }

// module.exports.save = save;
// module.exports.find = find;