// Todo factory function (pure)
function createTodo(title) {
return { title, completed: false };
}
// Pure function to add a todo (returns a new list)
function addTodo(list, todo) {
return [...list, todo];
}
// Pure function to remove a todo by title
function removeTodo(list, title) {
return list.filter(todo => todo.title !== title);
}
// Pure function to mark a todo as completed
function completeTodo(list, title) {
return list.map(todo =>
todo.title === title ? { ...todo, completed: true } : todo
);
}
// Initial state
let todos = [];
// Simulate adding todos
todos = addTodo(todos, createTodo("Learn JavaScript"));
todos = addTodo(todos, createTodo("Practice Functional Programming"));
console.log("Todos after adding:", todos);
// Complete a todo
todos = completeTodo(todos, "Learn JavaScript");
console.log("Todos after completing:", todos);
// Remove a todo
todos = removeTodo(todos, "Practice Functional Programming");
console.log("Todos after removal:", todos);
Coding Exercise