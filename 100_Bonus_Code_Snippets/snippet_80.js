function delayedGreeting() {
return new Promise(resolve => {
setTimeout(() => resolve("Hello after 2 seconds!"), 2000);
});
}
async function greet() {
const greeting = await delayedGreeting();
console.log(greeting);
}
greet();
Advanced Concepts – Closures, Prototypes, & Classes