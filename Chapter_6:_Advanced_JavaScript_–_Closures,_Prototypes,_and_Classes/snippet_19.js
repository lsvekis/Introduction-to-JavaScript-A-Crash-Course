constructor(name, age) {
this.name = name;
this.age = age;
}
greet() {
console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
}
static info() {
console.log("This is the Person class.");
}
}
Person.info(); // Output: This is the Person class.