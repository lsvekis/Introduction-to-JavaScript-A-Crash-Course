// Intentional bug: using addition instead of multiplication
return num + num;
}
// Debug using console logs or breakpoints:
console.log("Square of 4 (buggy):", square(4));
// Correct the function:
function correctSquare(num) {
return num * num;
}
console.log("Square of 4 (correct):", correctSquare(4));