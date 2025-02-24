constructor(name) {
this.name = name;
}
speak() {
console.log(`${this.name} makes a sound.`);
}
}
const animal = new Animal("Generic Animal");
animal.speak();