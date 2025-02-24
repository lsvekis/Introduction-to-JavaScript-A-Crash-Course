instanceMethod() {
return "I am an instance method";
}
static staticMethod() {
return "I am a static method";
}
}
const demoObj = new Demo();
console.log(demoObj.instanceMethod());  // Output: I am an instance method
console.log(Demo.staticMethod());         // Output: I am a static method