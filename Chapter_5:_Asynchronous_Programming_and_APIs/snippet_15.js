const greeting = await delayedGreeting();
console.log(greeting);
const resultA = await firstTask();
console.log(resultA);
const resultB = await secondTask();
console.log(resultB);
}
sequentialOperations();