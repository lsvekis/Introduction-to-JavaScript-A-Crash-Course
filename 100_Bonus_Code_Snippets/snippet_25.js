function fibonacci(n) {
const seq = [0, 1];
for (let i = 2; i < n; i++) {
seq[i] = seq[i - 1] + seq[i - 2];
}
return seq;
}
console.log("First 10 Fibonacci numbers:", fibonacci(10));