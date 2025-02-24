try {
return JSON.parse(jsonString);
} catch (error) {
console.error("Parsing error occurred:", error.message);
return {};
}
}
console.log(safeParse('{"valid": true}'));
console.log(safeParse("invalid json"));