return a * b * c;
}
const doubleAndMultiply = multiplyThree.bind(null, 2);
console.log(doubleAndMultiply(3, 4)); // Expected: 2 * 3 * 4 = 24