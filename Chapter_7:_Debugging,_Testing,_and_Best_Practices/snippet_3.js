function multiply(a, b) {
console.log("Multiplying:", a, b);
const result = a + b; // Incorrect operation
console.log("Result:", result);
return result;
}
// Fix: Change '+' to '*'
function fixedMultiply(a, b) {
console.log("Multiplying:", a, b);
const result = a * b;
console.log("Result:", result);
return result;
}
multiply(3, 4);      // Debug and observe the incorrect result
fixedMultiply(3, 4); // Should output 12