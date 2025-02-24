function fetchData() {
return new Promise((resolve, reject) => {
// Simulate an asynchronous operation using setTimeout
setTimeout(() => {
const success = true; // Change to false to simulate an error
if (success) {
resolve({ data: "Sample Data" });
} else {
reject("Error fetching data");
}
}, 1500);
});
}
fetchData()
.then(response => {
console.log("Data received:", response.data);
})
.catch(error => {
console.error("Error:", error);
});
Coding Exercise 2