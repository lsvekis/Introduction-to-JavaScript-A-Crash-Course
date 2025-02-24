import axios from 'axios';
export async function fetchTodo() {
try {
const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
console.log("Fetched Todo:", response.data);
} catch (error) {
console.error("Error fetching todo:", error);
}
}