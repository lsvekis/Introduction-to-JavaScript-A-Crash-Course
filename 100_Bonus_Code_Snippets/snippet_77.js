async function fetchInvalid() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/invalidurl");
if (!response.ok) throw new Error("Network response not ok");
const data = await response.json();
console.log(data);
} catch (error) {
console.error("Handled fetch error:", error);
}
}
fetchInvalid();