const getBMWAndAudiCars = require('./problem6');
const inventory = require('./inventory');


const BMWAndAudiCars = getBMWAndAudiCars(inventory);
console.log(JSON.stringify(BMWAndAudiCars, null, 2));
