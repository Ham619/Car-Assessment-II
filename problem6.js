function getBMWAndAudiCars(inventory) {
    const BMWAndAudiCars = inventory.filter(car => car.car_make === "BMW" || car.car_make === "Audi");
    return BMWAndAudiCars;
}

module.exports = getBMWAndAudiCars;
