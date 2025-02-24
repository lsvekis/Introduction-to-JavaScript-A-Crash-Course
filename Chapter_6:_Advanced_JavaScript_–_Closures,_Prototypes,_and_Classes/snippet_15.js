class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
greet() {
console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
}
}
const alice = new Person("Alice", 28);
alice.greet(); // Output: Hello, I'm Alice and I'm 28 years old.