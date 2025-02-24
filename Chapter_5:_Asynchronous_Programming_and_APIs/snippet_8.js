async function fetchPosts() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
// Check if the response is ok (status in the range 200-299)
if (!response.ok) {
throw new Error("Network response was not ok");
}
const posts = await response.json();
console.log("Fetched Posts:", posts.slice(0, 3)); // Log first 3 posts for brevity
} catch (error) {
console.error("Fetch error:", error);
}
}
fetchPosts();
Coding Exercise 4