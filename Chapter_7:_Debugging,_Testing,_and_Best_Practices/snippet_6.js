function divide(a, b) {
if (b === 0) {
throw new Error("Division by zero is not allowed.");
}
return a / b;
}
try {
console.log(divide(10, 0));
} catch (error) {
console.error("Error during division:", error.message);
}
Coding Exercises