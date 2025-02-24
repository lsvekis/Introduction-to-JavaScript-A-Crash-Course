function greet(greeting, name) {
return `${greeting}, ${name}!`;
}
const sayHello = greet.bind(null, "Hello");
console.log(sayHello("Bob")); // Output: Hello, Bob!
Memoization
Cache the results of function calls to improve performance on expensive operations.