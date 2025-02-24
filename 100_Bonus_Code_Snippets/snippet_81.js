function counter() {
let count = 0;
return function() {
return ++count;
};
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
Secret Holder with Closure
(Similar to Exercise 52 above)