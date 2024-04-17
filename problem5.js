function countOlderCars(inventory, year) {
    const olderCars = inventory.filter(car => car.car_year < year);
    return olderCars.length;
}

module.exports = countOlderCars;
