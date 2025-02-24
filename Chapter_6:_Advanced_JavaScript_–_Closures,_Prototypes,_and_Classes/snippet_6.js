const person = {
name: "Alice",
greet() {
console.log(`Hello, my name is ${this.name}`);
}
};
person.greet(); // Output: Hello, my name is Alice