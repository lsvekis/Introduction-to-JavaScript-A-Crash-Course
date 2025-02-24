function debounce(func, delay) {
let timeoutId;
return function(...args) {
clearTimeout(timeoutId);
timeoutId = setTimeout(() => func.apply(this, args), delay);
};
}
// Test debounce with a simple log function:
const debouncedLog = debounce((msg) => console.log("Debounced:", msg), 300);
debouncedLog("Hello");
Throttle Implementation
js // Exercise 100: Throttle Implementation function throttle(func, limit) { let inThrottle; return function(...args) { if (!inThrottle) { func.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; } // Test throttle by logging scroll positions (simulate with a loop here) const throttledLog = throttle(() => console.log("Throttled log"), 1000); for (let i = 0; i < 5; i++) { throttledLog(); }
This comprehensive set of exercises (with complete code) should help you practice and master JavaScript—from basics to advanced topics. You can experiment further by modifying and combining these exercises to create more complex projects.