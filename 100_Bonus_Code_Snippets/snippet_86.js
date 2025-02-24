const animalProto = {
speak() {
console.log(`${this.name} speaks.`);
}
};
const cat = Object.create(animalProto);
cat.name = "Whiskers";
cat.speak();