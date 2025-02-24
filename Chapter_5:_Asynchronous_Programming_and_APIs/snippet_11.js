return new Promise(resolve => {
setTimeout(() => resolve("First task complete"), 1000);
});
}
function secondTask() {
return new Promise(resolve => {
setTimeout(() => resolve("Second task complete"), 2000);
});
}
Promise.all([firstTask(), secondTask()])
.then(results => console.log("Results:", results))
.catch(error => console.error(error));