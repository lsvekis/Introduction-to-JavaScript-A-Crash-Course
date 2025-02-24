return function(message) {
console.log(`${prefix}: ${message}`);
};
}
const debugLogger = createLogger("DEBUG");
debugLogger("This is a debug message."); // Output: DEBUG: This is a debug message.