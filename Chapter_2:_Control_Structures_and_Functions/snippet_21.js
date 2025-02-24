if (num > 0) {
return "Positive";
} else if (num < 0) {
return "Negative";
} else {
return "Zero";
}
}
console.log("Check 10:", checkNumber(10));
console.log("Check -5:", checkNumber(-5));
console.log("Check 0:", checkNumber(0));