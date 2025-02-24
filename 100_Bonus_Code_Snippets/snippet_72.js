const promiseExample = new Promise((resolve, reject) => {
setTimeout(() => resolve("Promise resolved!"), 1000);
});
promiseExample.then(message => console.log(message));