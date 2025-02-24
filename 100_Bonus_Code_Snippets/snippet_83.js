function showName() {
console.log("My name is", this.name);
}
const user = { name: "Bob" };
showName.call(user);