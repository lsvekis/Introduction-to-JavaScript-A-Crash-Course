let index = cities.indexOf("Chicago");
if (index !== -1) {
cities.splice(index, 1);
}
console.log("Cities after removal:", cities);