return new Promise((resolve, reject) => {
setTimeout(() => {
if (username === "user") {
resolve("Login successful");
} else {
reject("Invalid username");
}
}, 1500);
});
}
simulateLogin("user")
.then(msg => console.log(msg))
.catch(err => console.error(err));