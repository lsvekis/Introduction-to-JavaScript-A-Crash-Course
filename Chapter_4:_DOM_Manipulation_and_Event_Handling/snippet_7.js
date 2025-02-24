<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Interactive List</title>
<style>
li { cursor: pointer; margin: 5px 0; }
</style>
</head>
<body>
<h2>My To-Do List</h2>
<input type="text" id="itemInput" placeholder="Enter new item">
<button id="addButton">Add Item</button>
<ul id="todoList"></ul>
<script>
const addButton = document.getElementById("addButton");
const itemInput = document.getElementById("itemInput");
const todoList = document.getElementById("todoList");
// Function to add a new list item
function addItem() {
const itemText = itemInput.value.trim();
if (itemText !== "") {
const li = document.createElement("li");
li.textContent = itemText;
// Add click event to update item text
li.addEventListener("click", function() {
const newText = prompt("Update item:", li.textContent);
if (newText) {
li.textContent = newText;
}
});
// Add right-click event to remove item
li.addEventListener("contextmenu", function(e) {
e.preventDefault();
li.remove();
});
todoList.appendChild(li);
itemInput.value = "";
}
}
addButton.addEventListener("click", addItem);
// Optionally, add an event listener for the Enter key
itemInput.addEventListener("keydown", function(e) {
if (e.key === "Enter") {
addItem();
}
});
</script>
</body>
</html>