value: 100,
show: function() {
const inner = () => console.log(this.value);
inner();
}
};
obj.show();
A. Undefined
B. 100
C. Error
D. 0
Correct Answer: B
How do you override a method in a subclass?
A. Define a method with the same name in the subclass
B. Use the override keyword
C. Call super.method()
D. It is not possible
Correct Answer: A
What is the benefit of using closures for data encapsulation?
A. They allow for creating truly private variables
B. They prevent memory leaks
C. They increase execution speed
D. They simplify debugging
Correct Answer: A
Which of the following will create a new object that inherits from a given prototype?
A. new Object()
B. Object.create(proto)
C. {}
D. Object.assign()
Correct Answer: B
What does the bind() method return?
A. The original function
B. A new function with the specified this value
C. An object with methods
D. A Promise
Correct Answer: B
In a closure, if an inner function accesses a variable defined in an outer function, what is that variable called?
A. A global variable
B. A static variable
C. A free variable
D. A parameter
Correct Answer: C
Which of the following best describes prototype inheritance?
A. Inheriting properties from a class
B. Inheriting properties from another object via its prototype
C. Using closures to share data
D. None of the above
Correct Answer: B
What is the main difference between a regular function and an arrow function regarding this?
A. Arrow functions cannot have parameters
B. Regular functions do not have a this binding
C. Arrow functions inherit this from the surrounding scope
D. Regular functions always return a Promise
Correct Answer: C