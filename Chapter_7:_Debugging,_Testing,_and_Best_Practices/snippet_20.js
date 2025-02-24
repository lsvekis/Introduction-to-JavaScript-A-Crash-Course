return str.split('').reverse().join('');
}
function assertEqual(actual, expected, testName) {
if (actual === expected) {
console.log(`PASSED [${testName}]`);
} else {
console.error(`FAILED [${testName}]: Expected "${expected}", but got "${actual}"`);
}
}
// Test cases:
assertEqual(reverseString("hello"), "olleh", "reverseString should reverse 'hello'");
assertEqual(reverseString("JavaScript"), "tpircSavaJ", "reverseString should reverse 'JavaScript'");