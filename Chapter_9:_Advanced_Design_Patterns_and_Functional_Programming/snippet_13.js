function curryAdd(a) {
return function(b) {
return a + b;
};
}
const addFive = curryAdd(5);
console.log(addFive(10)); // Output: 15
Partial Application
Pre-fill some arguments of a function to create a new function.