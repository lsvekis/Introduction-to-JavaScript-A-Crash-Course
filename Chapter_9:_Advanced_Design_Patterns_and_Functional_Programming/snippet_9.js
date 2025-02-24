class Subject {
constructor() {
this.observers = [];
}
subscribe(observer) {
this.observers.push(observer);
}
unsubscribe(observer) {
this.observers = this.observers.filter(obs => obs !== observer);
}
notify(data) {
this.observers.forEach(observer => observer.update(data));
}
}
class Observer {
constructor(name) {
this.name = name;
}
update(data) {
console.log(`${this.name} received update: ${data}`);
}
}
const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("New Event Occurred");
// Output: Observer 1 received update: New Event Occurred
//         Observer 2 received update: New Event Occurred
Coding Exercises