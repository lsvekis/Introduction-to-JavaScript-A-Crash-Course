function parseJSON(jsonString) {
try {
const data = JSON.parse(jsonString);
return data;
} catch (error) {
console.error("Failed to parse JSON:", error);
return null;
}
}
parseJSON('{"name": "Alice"}');   // Valid JSON
parseJSON("invalid json");        // Triggers error handling