constructor() {
this.count = 0;
this.observers = [];
}
subscribe(observer) {
this.observers.push(observer);
}
increment() {
this.count++;
this.notify();
}
notify() {
this.observers.forEach(observer => observer.update(this.count));
}
}
class Display {
update(count) {
console.log(`Counter updated: ${count}`);
}
}
const counter = new Counter();
const display = new Display();
counter.subscribe(display);
counter.increment(); // Output: Counter updated: 1
counter.increment(); // Output: Counter updated: 2