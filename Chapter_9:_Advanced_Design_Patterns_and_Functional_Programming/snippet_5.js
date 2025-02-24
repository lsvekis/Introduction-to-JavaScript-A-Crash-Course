const increment = num => num + 1;
const compose = (f, g) => x => f(g(x));
const doubleAfterIncrement = compose(double, increment);
console.log(doubleAfterIncrement(3)); // (3 + 1) * 2 = 8