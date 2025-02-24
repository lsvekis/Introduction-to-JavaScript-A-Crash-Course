list.forEach((todo, index) => {
console.log(`${index + 1}. ${todo.title} - ${todo.completed ? "Completed" : "Incomplete"}`);
});
}
listTodos(todos);