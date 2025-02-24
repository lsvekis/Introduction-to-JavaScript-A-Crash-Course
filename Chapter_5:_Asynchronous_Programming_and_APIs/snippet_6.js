async function getData() {
try {
const response = await fetchData(); // fetchData from the previous example
console.log("Async/Await Data:", response.data);
} catch (error) {
console.error("Error in async/await:", error);
}
}
getData();
Coding Exercise 3