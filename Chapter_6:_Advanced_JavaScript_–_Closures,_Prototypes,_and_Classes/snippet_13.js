this.make = make;
}
Vehicle.prototype.start = function() {
console.log(`${this.make} vehicle starting.`);
};
function Car(make, model) {
Vehicle.call(this, make);
this.model = model;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.drive = function() {
console.log(`${this.make} ${this.model} is driving.`);
};
const myCar = new Car("Toyota", "Corolla");
myCar.start(); // Output: Toyota vehicle starting.
myCar.drive(); // Output: Toyota Corolla is driving.