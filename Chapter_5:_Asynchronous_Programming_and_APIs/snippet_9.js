try {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
if (!response.ok) throw new Error("Failed to fetch user data");
const users = await response.json();
users.forEach(user => console.log(user.name));
} catch (error) {
console.error("Error fetching user data:", error);
}
}
fetchUserData();