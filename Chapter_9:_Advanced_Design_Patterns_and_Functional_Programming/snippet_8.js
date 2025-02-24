function carFactory(make, model) {
return {
make,
model,
drive() {
console.log(`${make} ${model} is driving.`);
}
};
}
const car1 = carFactory("Toyota", "Corolla");
car1.drive(); // Output: Toyota Corolla is driving.
Observer Pattern
Defines a subscription mechanism to notify multiple objects about events.