const promise1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 1500));
Promise.all([promise1, promise2]).then(results => console.log("Promise.all results:", results));