const db  = require('./index.js');
console.log('db', db.Restaurant);
const Restaurant = require('./index.js');
const faker = require('faker');


for (var i = 0; i < 5; i++){
const samplePosts = [{ 
	id: faker.random.number(5),
  name: faker.random.word(),
  description: faker.lorem.paragraphs(3),
  imageUrl: ['https://i.imgur.com/jvl5mdI.jpg', 'https://i.imgur.com/AFT1cI6.jpg', 'https://i.imgur.com/rd9yHKH.jpg'],
	reviews: faker.random.number(3),
	rating: faker.random.number(1),
	tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
	priceRange: {
                start: faker.random.number(4),
                end: faker.random.number(9)
                },
	type: ['french', 'german']
}];

const insertSampleBlogs = function() {
  Restaurant.create(samplePosts)
    .then(() => db.disconnect());
};

insertSampleBlogs();

}



// const RestaurantOverView = {
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   website: faker.internet.url(),
//   address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
//   bio: faker.lorem.sentences(),
//   image: faker.image.avatar()
// }
