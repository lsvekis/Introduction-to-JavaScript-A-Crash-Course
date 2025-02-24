// Exporting functions using CommonJS syntax
function toUpperCase(str) {
return str.toUpperCase();
}
function toLowerCase(str) {
return str.toLowerCase();
}
module.exports = { toUpperCase, toLowerCase };
app.js
js