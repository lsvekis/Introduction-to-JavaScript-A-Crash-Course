class Task {
constructor(title, description) {
this.title = title;
this.description = description;
this.completed = false;
}
markComplete() {
this.completed = true;
console.log(`Task "${this.title}" marked as complete.`);
}
display() {
console.log(`Title: ${this.title}`);
console.log(`Description: ${this.description}`);
console.log(`Status: ${this.completed ? "Completed" : "Incomplete"}`);
}
}
class TaskManager {
constructor() {
this.tasks = [];
}
addTask(task) {
this.tasks.push(task);
console.log(`Task "${task.title}" added.`);
}
removeTask(title) {
this.tasks = this.tasks.filter(task => task.title !== title);
console.log(`Task "${title}" removed.`);
}
listTasks() {
console.log("Listing Tasks:");
this.tasks.forEach(task => task.display());
}
}
// Using the Task Manager
const manager = new TaskManager();
const task1 = new Task("Buy Groceries", "Milk, Bread, Eggs");
const task2 = new Task("Clean Room", "Organize books and clean the floor");
manager.addTask(task1);
manager.addTask(task2);
manager.listTasks();
task1.markComplete();
manager.listTasks();
manager.removeTask("Clean Room");
manager.listTasks();
Coding Exercise