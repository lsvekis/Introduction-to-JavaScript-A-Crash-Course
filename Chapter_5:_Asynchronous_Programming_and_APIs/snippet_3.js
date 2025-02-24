console.log(`Starting: ${task}`);
setTimeout(() => {
callback(task);
}, 1000);
}
doTask("Loading Data", (task) => {
console.log(`Completed: ${task}`);
});