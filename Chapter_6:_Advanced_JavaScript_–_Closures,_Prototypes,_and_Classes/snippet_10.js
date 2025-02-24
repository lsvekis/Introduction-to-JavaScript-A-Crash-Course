count: 0,
increment() {
this.count++;
console.log(this.count);
}
};
const unboundIncrement = counterObject.increment;
// Using bind to ensure 'this' remains counterObject
const boundIncrement = unboundIncrement.bind(counterObject);
boundIncrement(); // Output: 1
boundIncrement(); // Output: 2