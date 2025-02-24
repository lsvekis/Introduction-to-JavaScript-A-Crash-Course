return {
name,
role,
describe() {
console.log(`${this.name} is a ${this.role}`);
}
};
}
const user1 = createUser("Alice", "Admin");
user1.describe(); // Output: Alice is a Admin