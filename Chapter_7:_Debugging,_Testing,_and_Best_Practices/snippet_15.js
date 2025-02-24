function debounce(func, delay) {
let timeoutId;
return function (...args) {
clearTimeout(timeoutId);
timeoutId = setTimeout(() => {
func.apply(this, args);
}, delay);
};
}
// Usage:
const handleResize = debounce(() => {
console.log('Window resized!');
}, 500);
window.addEventListener('resize', handleResize);