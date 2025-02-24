return new Promise(resolve => {
setTimeout(() => {
resolve("Hello after 2 seconds!");
}, 2000);
});
}
async function greet() {
const message = await delayedGreeting();
console.log(message);
}
greet();