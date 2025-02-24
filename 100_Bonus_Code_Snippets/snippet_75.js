async function asyncWithError() {
try {
const result = await promiseReject;
console.log(result);
} catch (error) {
console.error("Caught error:", error);
}
}
asyncWithError();