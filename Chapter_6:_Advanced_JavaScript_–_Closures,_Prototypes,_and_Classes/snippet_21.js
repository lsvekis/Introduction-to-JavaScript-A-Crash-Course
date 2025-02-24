const task = this.tasks.find(task => task.title === title);
if (task) {
task.description = newDescription;
console.log(`Task "${title}" updated.`);
} else {
console.log(`Task "${title}" not found.`);
}
};
// Testing the update method:
manager.updateTask("Buy Groceries", "Milk, Bread, Eggs, and Cheese");
manager.listTasks();