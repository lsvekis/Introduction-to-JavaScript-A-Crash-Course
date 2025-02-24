const counterObj = {
count: 0,
increment() {
this.count++;
console.log(this.count);
}
};
const unbound = counterObj.increment;
const bound = unbound.bind(counterObj);
bound(); // 1
bound(); // 2