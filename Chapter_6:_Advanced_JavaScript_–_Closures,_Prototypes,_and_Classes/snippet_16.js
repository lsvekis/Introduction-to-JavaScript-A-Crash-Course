class Student extends Person {
constructor(name, age, grade) {
super(name, age);
this.grade = grade;
}
study() {
console.log(`${this.name} is studying for grade ${this.grade}.`);
}
}
const bob = new Student("Bob", 20, "A");
bob.greet();  // Inherited method
bob.study();  // Output: Bob is studying for grade A.
Coding Exercises