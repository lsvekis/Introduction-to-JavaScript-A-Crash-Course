function createCar(make, model) {
return {
make,
model,
drive() {
console.log(`${make} ${model} is driving.`);
}
};
}
const car1 = createCar("Toyota", "Corolla");
car1.drive();