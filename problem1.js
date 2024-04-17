function findCarById(inventory, id) {
    const car = inventory.find(car => car.id === id);
    return car ? car : "Car not found";
}

module.exports = findCarById;
