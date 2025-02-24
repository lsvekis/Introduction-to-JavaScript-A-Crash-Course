function assertEqual(actual, expected, testName) {
if (actual === expected) {
console.log(`PASSED [${testName}]`);
} else {
console.error(`FAILED [${testName}]: Expected "${expected}", but got "${actual}"`);
}
}
// Example test
function add(a, b) {
return a + b;
}
assertEqual(add(2, 3), 5, "add() should return the sum of two numbers");
assertEqual(add(2, 3), 6, "add() should return the sum of two numbers (intentional failure)");