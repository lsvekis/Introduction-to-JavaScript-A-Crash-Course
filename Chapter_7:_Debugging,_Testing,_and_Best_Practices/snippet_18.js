let inThrottle;
return function (...args) {
if (!inThrottle) {
func.apply(this, args);
inThrottle = true;
setTimeout(() => inThrottle = false, limit);
}
};
}
window.addEventListener("scroll", throttle(() => {
console.log("Scroll position:", window.scrollY);
}, 1000));