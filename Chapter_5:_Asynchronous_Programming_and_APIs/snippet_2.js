function greet(name, callback) {
console.log(`Hello, ${name}!`);
callback();
}
function sayGoodbye() {
console.log("Goodbye!");
}
// Calling greet and passing sayGoodbye as a callback
greet("Alice", sayGoodbye);
Coding Exercise 1