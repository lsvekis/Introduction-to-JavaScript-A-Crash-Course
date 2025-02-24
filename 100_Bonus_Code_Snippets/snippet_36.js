let cities = ["New York", "Los Angeles", "Chicago", "Houston"];
const index = cities.indexOf("Chicago");
if (index !== -1) {
cities.splice(index, 1);
}
console.log("Cities after removal:", cities);