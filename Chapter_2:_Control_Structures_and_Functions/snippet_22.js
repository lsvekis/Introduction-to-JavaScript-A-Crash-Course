// Define the correct answer
const correctAnswer = 12;
// Function to check the answer
function checkAnswer(userAnswer) {
if (userAnswer === correctAnswer) {
return true;
}
return false;
}
// Simulated user attempts (in a real scenario, you might use prompt() to get input)
const userAttempts = [10, 12, 15];
let attempt = 0;
let isCorrect = false;
while (attempt < userAttempts.length && !isCorrect) {
const answer = userAttempts[attempt];
console.log(`Attempt ${attempt + 1}: User answered ${answer}`);
if (checkAnswer(answer)) {
console.log("Correct answer! You win!");
isCorrect = true;
} else {
console.log("Incorrect answer. Try again!");
}
attempt++;
}
if (!isCorrect) {
console.log("Game over. Better luck next time!");
}
Coding Exercise