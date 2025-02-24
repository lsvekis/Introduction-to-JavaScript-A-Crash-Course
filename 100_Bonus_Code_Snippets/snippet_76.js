async function fetchTodo() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const todo = await response.json();
console.log("Todo title:", todo.title);
} catch (error) {
console.error("Fetch error:", error);
}
}
fetchTodo();