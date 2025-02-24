function memoize(fn) {
const cache = {};
return function(...args) {
const key = JSON.stringify(args);
if (cache[key]) {
return cache[key];
}
const result = fn(...args);
cache[key] = result;
return result;
};
}
function fibonacci(n) {
if (n < 2) return n;
return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // Fast calculation of the 10th Fibonacci number
Coding Exercises