value: "tester",
testThis() {
function regularFunction() {
console.log("Regular function:", this.value);
}
const arrowFunction = () => {
console.log("Arrow function:", this.value);
};
regularFunction();       // Likely undefined in strict mode or global value
arrowFunction();         // Inherits 'this' from testThis(), outputs "tester"
}
};
tester.testThis();