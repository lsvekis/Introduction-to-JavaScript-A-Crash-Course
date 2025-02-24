if (userAnswer === correctAnswer) {
return { correct: true, hint: "Correct!" };
} else if (userAnswer < correctAnswer) {
return { correct: false, hint: "Too low!" };
} else {
return { correct: false, hint: "Too high!" };
}
}
attempt = 0;
isCorrect = false;
while (attempt < userAttempts.length && !isCorrect) {
const answer = userAttempts[attempt];
const result = checkAnswerWithHint(answer);
console.log(`Attempt ${attempt + 1}: User answered ${answer}. ${result.hint}`);
if (result.correct) {
isCorrect = true;
}
attempt++;
}
if (!isCorrect) {
console.log("Game over. Better luck next time!");
}