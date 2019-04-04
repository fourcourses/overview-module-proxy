import request from './request'

const getRestaurant = restaurant => request(`http://localhost:3000//restaurant?restaurant=1`)

export { getRestaurant };