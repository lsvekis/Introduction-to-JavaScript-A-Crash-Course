console.log(`My name is ${this.name}`);
}
const user = { name: "Bob" };
introduce.call(user); // Output: My name is Bob