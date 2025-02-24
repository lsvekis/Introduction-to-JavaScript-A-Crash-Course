function throttle(func, limit) {
let inThrottle;
return function (...args) {
if (!inThrottle) {
func.apply(this, args);
inThrottle = true;
setTimeout(() => inThrottle = false, limit);
}
};
}
// Usage:
const handleScroll = throttle(() => {
console.log('Scroll event handled!');
}, 1000);
window.addEventListener('scroll', handleScroll);
Coding Exercises