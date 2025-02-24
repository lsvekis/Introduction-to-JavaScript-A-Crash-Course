let subscribers = [];
return {
subscribe(fn) {
subscribers.push(fn);
},
notify(message) {
subscribers.forEach(fn => fn(message));
}
};
}
const notifier = createNotifier();
notifier.subscribe(msg => console.log("Subscriber 1:", msg));
notifier.subscribe(msg => console.log("Subscriber 2:", msg));
notifier.notify("Hello Observers!");