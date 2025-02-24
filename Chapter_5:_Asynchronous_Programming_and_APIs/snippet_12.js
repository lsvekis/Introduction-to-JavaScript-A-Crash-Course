return new Promise(resolve => {
setTimeout(() => resolve("Task A finished"), 1500);
});
}
function taskB() {
return new Promise(resolve => {
setTimeout(() => resolve("Task B finished"), 3000);
});
}
Promise.race([taskA(), taskB()])
.then(result => console.log("First finished:", result))
.catch(error => console.error(error));