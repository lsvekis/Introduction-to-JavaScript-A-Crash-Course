function createGreeter(greeting) {
return function(name) {
console.log(`${greeting}, ${name}!`);
};
}
const sayHello = createGreeter("Hello");
sayHello("Alice"); // Output: Hello, Alice!
Coding Exercises