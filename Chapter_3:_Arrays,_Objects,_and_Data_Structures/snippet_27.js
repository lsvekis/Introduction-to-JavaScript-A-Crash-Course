addressBook = addressBook.filter(contact => contact.name.toLowerCase() !== name.toLowerCase());
}
// Remove Bob Smith and display the updated address book
removeContact("Bob Smith");
displayContacts();
Comprehensive Quiz
Test your overall understanding of arrays, objects, and data structures with the following multiple choice questions:
Which of the following correctly creates an empty array?
A. let arr = {};
B. let arr = [];
C. let arr = ();
D. let arr = new Array();
Correct Answers: B and D
What does the push() method do to an array?
A. Removes the last element
B. Adds a new element to the beginning
C. Adds a new element to the end
D. Reverses the array
Correct Answer: C
How do you access the value of the property age from an object user?
A. user.age
B. user["age"]
C. Both A and B
D. Neither A nor B
Correct Answer: C
Which array method returns a new array with elements that pass a given test?
A. forEach()
B. filter()
C. map()
D. reduce()
Correct Answer: B
What is the purpose of the for...in loop?
A. To iterate over array elements
B. To iterate over object properties
C. To iterate over numbers
D. To iterate over strings
Correct Answer: B
What will be the output of the following code snippet?
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr[0]);
A. 0
B. 1
C. Undefined
D. 3
Correct Answer: A
Which of the following is a benefit of using objects in JavaScript?
A. They help in organizing related data and functionality
B. They allow for easy sorting of data
C. They are used only for storing numbers
D. They eliminate the need for functions
Correct Answer: A
How can you remove a property from an object obj with key keyName?
A. delete obj.keyName;
B. obj.remove(keyName);
C. obj.pop(keyName);
D. remove obj.keyName;
Correct Answer: A