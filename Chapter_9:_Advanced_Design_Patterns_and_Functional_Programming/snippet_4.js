return [...arr, item];
}
const original = [1, 2, 3];
const updated = addItem(original, 4);
console.log("Original:", original); // [1, 2, 3]
console.log("Updated:", updated);   // [1, 2, 3, 4]