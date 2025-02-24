const obj = {
value: 42,
regular: function() {
console.log("Regular function this.value:", this.value);
},
arrow: () => {
console.log("Arrow function this.value:", this.value);
}
};
obj.regular(); // 42
obj.arrow();   // undefined (or global value)