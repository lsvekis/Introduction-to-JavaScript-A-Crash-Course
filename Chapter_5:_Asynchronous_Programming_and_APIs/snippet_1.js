// Synchronous example
console.log("Start");
for (let i = 0; i < 1000000000; i++) {} // Time-consuming loop
console.log("End"); // This will run only after the loop completes
// Asynchronous example using setTimeout
console.log("Start");
setTimeout(() => {
console.log("This runs asynchronously after 2 seconds");
}, 2000);
console.log("End"); // This logs immediately after "Start"
Coding Tip
Tip: Use asynchronous techniques to ensure that long-running tasks (such as API calls or heavy computations) do not freeze the user interface.