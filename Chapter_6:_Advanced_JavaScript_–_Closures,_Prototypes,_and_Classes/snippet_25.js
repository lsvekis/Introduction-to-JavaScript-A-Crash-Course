let count = 0;
return function() {
return ++count;
};
}
const c = counter();
console.log(c()); // ?
console.log(c()); // ?
A. 0, 1
B. 1, 2
C. Undefined, Undefined
D. 1, 1
Correct Answer: B
Which of the following correctly creates a class in JavaScript?
A. class Person { constructor(name) { this.name = name; } }
B. function Person(name) { this.name = name; }
C. const Person = { name: "Alice" }
D. Both A and B
Correct Answer: A