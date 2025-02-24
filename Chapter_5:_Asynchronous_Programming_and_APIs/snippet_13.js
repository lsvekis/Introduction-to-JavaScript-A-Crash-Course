<html lang="en">
<head>
<meta charset="UTF-8">
<title>Todo Display</title>
</head>
<body>
<h2 id="todoTitle">Loading...</h2>
<script>
async function displayTodo() {
try {
const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
if (!res.ok) throw new Error("Failed to load todo");
const todo = await res.json();
document.getElementById("todoTitle").textContent = todo.title;
} catch (error) {
document.getElementById("todoTitle").textContent = "Error loading todo";
console.error(error);
}
}
displayTodo();
</script>
</body>
</html>