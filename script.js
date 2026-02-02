// Logic
// 4:09AM, Feb 1st, 2026.
// 2:23AM, Feb 2nd, 2026.

// Instructions
// 1. Start (To begin the game)
// 2. High (When the entered number is high compared to the guessed number by the computer)
// 3. Low (When the entered number is low compared to the guessed number by the computer)
// 4. Invalid (When the entered number is above or below the range of valid numbers)
// 5. Win (When the player wins, that is, when the player guess the same number as the computer)
// 6. Lose (When score = 0)

// comparisons
// hard coded initial number
// dom manipulation according to prototype
// "Check" buttonclick to trigger a function that gets inputted number to compare against hardcoded one,
// "Play Again" button click
// if else statements
// scoring system, idk how rn

// set hardcoded number
// probably an array of 10 different numbers so whenever you click play again, the number we're guessing is different.
// get input, attached to a variable
// get button, attached to a variable
// event listener to the button variable
// on button click, run function, parameters are input variable and hardcoded number(array[0]), compare each other
// playerInput > hardcoded && playerInput >= 1 && playerInput <= 20 = High
// playerInput < hardcoded && playerInput >= 1 && playerInput <= 20 = Low
// playerInput === hardcoded = Win
// playerInput < 1 || playerInput > 20 = Invalid
// switch expressions probably?

const hardcoded = Math.floor(Math.random() * 20) + 1; // random 1-20, better than an array
let score = 15;
let highscore = 0;

const guessNumber = (playerInput, hardcoded) => {
  if (playerInput < 1 || playerInput > 20) {
    return "Invalid";
  } else if (playerInput === hardcoded) {
    return "Win";
  } else if (playerInput > hardcoded) {
    return "Too High";
  } else {
    return "Too Low";
  }
};

const checkBtn = document.querySelector(".btn-check");
const inputField = document.querySelector("#guessInput");
const feedbackMessage = document.querySelector(".feedback-message");
const scoreDisplay = document.querySelector(".current-score");
const highscoreDisplay = document.querySelector(".best-score");
checkBtn.addEventListener("click", () => {
  const playerInput = Number(document.querySelector("#guessInput").value);
  const result = guessNumber(playerInput, hardcoded);
  feedbackMessage.textContent = result;

  if (result === "Invalid") {
  } else if (result === "Win") {
    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = `Highscore: ${highscore}`;
    }
    checkBtn.disabled = true;
    inputField.disabled = true;
  } else {
    score--;
    scoreDisplay.textContent = `Score: ${score}`;
  }

  if (score === 0) {
    feedbackMessage.textContent = "You Lose!";
    checkBtn.disabled = true;
    inputField.disabled = true;
  }
});

const resetBtn = document.querySelector(".btn-reset");
resetBtn.addEventListener("click", () => {
  const hardcoded = Math.floor(Math.random() * 20) + 1;
  score = 15;
  scoreDisplay.textContent = `Score: ${score}`;
  feedbackMessage.textContent = "Guess";

  checkBtn.disabled = false;
  inputField.disabled = false;
});

scoreDisplay.textContent = `Score: ${score}`;
highscoreDisplay.textContent = `Highscore: ${highscore}`;
