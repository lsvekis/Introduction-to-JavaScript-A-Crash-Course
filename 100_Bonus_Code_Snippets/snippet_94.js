function parseJSON(jsonStr) {
try {
return JSON.parse(jsonStr);
} catch (error) {
console.error("Parsing error occurred:", error.message);
return {};
}
}
console.log(parseJSON('{"name": "Alice"}'));
console.log(parseJSON("invalid json"));