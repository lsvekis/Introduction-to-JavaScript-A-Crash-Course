function makeCounter() {
let count = 0; // private variable
return function() {
count++;
return count;
};
}
const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2