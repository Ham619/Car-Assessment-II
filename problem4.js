function getAllCarYears(inventory) {
    return inventory.map(car => car.car_year);
}

module.exports = getAllCarYears;
