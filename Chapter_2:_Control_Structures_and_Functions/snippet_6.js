let role = "admin";
if (isLoggedIn) {
if (role === "admin") {
console.log("Welcome, Admin");
} else {
console.log("Welcome, User");
}
} else {
console.log("Please log in");
}