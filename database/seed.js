const db  = require('./index.js');
const Restaurant = require('./index.js');
const faker = require('faker');


for (var i = 0; i < 5; i++){

const photoArray = [];
for (var j = 0; j < 10; j++){
  var randomNum = Math.floor(Math.random() * 25 + 1);
  photoArray.push({imageUrl: `https://s3-us-west-1.amazonaws.com/hrsf113fec/${randomNum}.jpg`, caption: faker.random.word() + faker.date.past()})

}

const tags = [];
for(var j = 0; j < 5; j++){
  tags.push(faker.random.word())
}

const types = [];
for(var j = 0; j < 3; j++){
  types.push(faker.random.word())
}


const samplePosts = [{ 
	id: faker.random.number(5),
  name: faker.random.word(),
  description: faker.lorem.paragraphs(3),
  images: photoArray,
	reviews: faker.random.number({min: 1, max: 999}),
	rating: faker.random.number({min: 1, max: 5, precision: 0.01}),
	tags: tags,
	priceRange: {
                start: faker.random.number({min: 3, max: 10}),
                end: faker.random.number({min: 11, max: 30})
                },
	type: types
}];

const insertSampleBlogs = function() {
  Restaurant.create(samplePosts)
    .then(() => db.disconnect());
};

insertSampleBlogs();

}

