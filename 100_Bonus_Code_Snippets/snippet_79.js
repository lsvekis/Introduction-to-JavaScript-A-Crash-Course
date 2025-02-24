const promiseA = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));
const promiseB = new Promise(resolve => setTimeout(() => resolve("Slow"), 3000));
Promise.race([promiseA, promiseB]).then(result => console.log("Promise.race result:", result));