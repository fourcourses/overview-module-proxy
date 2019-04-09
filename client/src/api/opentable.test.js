const opentable = require('./opentable');

describe('get restaurant', () => {
  it('should load restaurant data', () => {
    return opentable.getRestaurant()
    .then(data => {
      expect(data).toBeDefined();
      //console.log('this is the data', data);
    })
  })
})