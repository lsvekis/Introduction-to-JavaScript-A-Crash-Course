function calculate(a, b, operation, callback) {
const result = operation(a, b);
callback(result);
}
calculate(5, 3, (x, y) => x + y, (result) => console.log("Sum is:", result));
// Alternatively, using a defined operation:
function addOperation(x, y) { return x + y; }
calculate(5, 3, addOperation, (result) => console.log("Sum is:", result));