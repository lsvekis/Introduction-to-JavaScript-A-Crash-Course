if (n <= 1) return 1;
return n * factorial(n - 1);
}
const memoizedFactorial = memoize(factorial);
console.log("Factorial of 5:", memoizedFactorial(5)); // Output: 120