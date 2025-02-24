function doTask(callback) {
setTimeout(() => {
console.log("Task completed.");
callback();
}, 1000);
}
doTask(() => console.log("Callback executed."));