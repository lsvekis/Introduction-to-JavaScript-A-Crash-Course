const obj = {
value: 42,
show: () => {
console.log(this.value); // 'this' here refers to the global scope (or undefined in strict mode)
}
};
obj.show(); // Likely outputs undefined (or global value)
Coding Exercises