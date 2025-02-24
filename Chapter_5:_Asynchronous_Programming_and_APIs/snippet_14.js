try {
const res = await fetch("https://jsonplaceholder.typicode.com/invalidurl");
if (!res.ok) throw new Error("Network response not ok");
const data = await res.json();
console.log(data);
} catch (error) {
console.error("Request failed:", error);
}
}
fetchInvalid();