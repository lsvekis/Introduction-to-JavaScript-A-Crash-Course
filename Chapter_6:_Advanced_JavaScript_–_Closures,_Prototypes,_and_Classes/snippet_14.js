this.name = name;
}
Bird.prototype.fly = function() {
console.log(`${this.name} is flying.`);
};
function Penguin(name) {
Bird.call(this, name);
}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
console.log(`${this.name} cannot fly.`);
};
const penguin = new Penguin("Pingu");
penguin.fly(); // Output: Pingu cannot fly.