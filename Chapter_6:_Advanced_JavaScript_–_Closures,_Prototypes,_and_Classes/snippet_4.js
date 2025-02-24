let count = 0;
return {
increment() {
count++;
return count;
},
decrement() {
count--;
return count;
}
};
}
const counterObj = createCounter();
console.log(counterObj.increment()); // 1
console.log(counterObj.decrement()); // 0