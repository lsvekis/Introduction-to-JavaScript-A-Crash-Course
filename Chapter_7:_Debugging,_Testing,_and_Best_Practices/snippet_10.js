function asyncAdd(a, b, callback) {
setTimeout(() => {
callback(a + b);
}, 500);
}
function testAsyncAdd() {
asyncAdd(4, 5, (result) => {
assertEqual(result, 9, "asyncAdd() should return the sum after a delay");
});
}
testAsyncAdd();
Coding Exercises