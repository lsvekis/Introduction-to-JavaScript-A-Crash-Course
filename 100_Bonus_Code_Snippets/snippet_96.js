function asyncAdd(a, b, callback) {
setTimeout(() => {
callback(a + b);
}, 500);
}
asyncAdd(4, 5, (result) => {
assertEqual(result, 9, "asyncAdd() should return correct sum");
});