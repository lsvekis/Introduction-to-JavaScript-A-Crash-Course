try {
const message = await simulateLogin(username);
console.log(message);
} catch (error) {
console.error(error);
}
}
loginUser("wrongUser"); // Should log error message
loginUser("user");      // Should log "Login successful"