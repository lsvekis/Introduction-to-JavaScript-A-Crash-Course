function average(arr) {
let sum = arr.reduce((total, num) => total + num, 0);
return sum / arr.length;
}
console.log("Average of [2,4,6,8]:", average([2, 4, 6, 8]));