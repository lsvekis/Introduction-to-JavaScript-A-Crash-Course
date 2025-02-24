function isPalindrome(str) {
const reversed = str.split('').reverse().join('');
return str === reversed;
}
console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"));