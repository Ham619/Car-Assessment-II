const countOlderCars = require('./problem5');
const inventory = require('./inventory');

const targetYear = 2000;

const olderCarsCount = countOlderCars(inventory, targetYear);
console.log(`Number of cars older than ${targetYear}: ${olderCarsCount}`);
