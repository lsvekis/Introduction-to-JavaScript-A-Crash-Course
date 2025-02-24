return function(b) {
return function(c) {
return a + b + c;
};
};
}
const concatWithHello = curriedConcat("Hello, ")("my name is ");
console.log(concatWithHello("Alice")); // Output: Hello, my name is Alice