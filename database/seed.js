const db  = require('./index.js');
const Restaurant = require('./index.js');
const faker = require('faker');


for (var i = 0; i < 5; i++){

const photoArray = [];
for (var j = 0; j < 5; j++){
  var randomNum = Math.floor(Math.random() * 25 + 1);
  photoArray.push(`https://s3-us-west-1.amazonaws.com/hrsf113fec/${randomNum}.jpg`)
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
  imageUrl: photoArray,
	reviews: faker.random.number(3),
	rating: faker.random.number(1),
	tags: tags,
	priceRange: {
                start: faker.random.number(4),
                end: faker.random.number(9)
                },
	type: types
}];

const insertSampleBlogs = function() {
  Restaurant.create(samplePosts)
    .then(() => db.disconnect());
};

insertSampleBlogs();

}

