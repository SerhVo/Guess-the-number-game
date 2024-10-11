"use strict";

///////////////////////////////////////

/* 
TASK: 
Create a "Guess the Number" game.

Good luck :)
*/

// Generate a secret random number between 1 and 20
let secreNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreNumber);

// Get DOM elements
let check = document.querySelector(".check");
let highscoreT = document.querySelector(".highscore");
let highscore = Number(highscoreT.textContent);
let scoreT = document.querySelector(".score");
let score = Number(scoreT.textContent);
let messegeEl = document.querySelector(".message");
let messege = messegeEl.textContent;
let secretEl = document.querySelector(".number");
let secret = secretEl.textContent;
let again = document.querySelector(".again");

// Load sound effects
const audio = new Audio(
  "audio/aplodismentyi-nebolshoy-gruppyi-lyudey-s-radostnyimi-krikami.mp3"
);
const audio2 = new Audio("audio/Mountain Audio - Menu Click.mp3");

// Function to check the user's guess against the secret number
function checkNumber(guess) {
  // Decrease score with each guess
  score--;
  scoreT.textContent = score;
  highscoreT.textContent = highscore;

  // Check if the guessed number is correct
  if (guess === secreNumber) {
    // Play applause sound and change background color
    audio.play();
    document.body.style.background =
      "radial-gradient(farthest-corner at 13rem 15rem, rgba(240, 135, 10, 1) 5%, rgba(232, 151, 37, 1) 25%, rgba(170, 230, 5, 1) 50%, rgba(3, 236, 225, 1) 100%)";
    
    // Display success message and reveal the secret number
    messegeEl.textContent = "You guessed the number!";
    secretEl.textContent = secreNumber;
    check.disabled = true;
    
    // Update high score
    highscoreT.textContent = score;
  
  // If guess is too low and the player still has attempts left
  } else if (guess < secreNumber && score > 0) {
    messegeEl.textContent = "Your guess is too low.";
  
  // If guess is too high and the player still has attempts left
  } else if (guess > secreNumber && score > 0) {
    messegeEl.textContent = "Your guess is too high.";
  
  // If the player runs out of attempts
  } else {
    messegeEl.textContent = "You lost the game.";
    check.disabled = true;
    secretEl.textContent = secreNumber;
    document.body.style.background = "rgba(0, 0, 0, 1)";
  }
}

// Get input element
let guessInput = document.querySelector("input");

// Event listener for the "Check" button
check.addEventListener("click", function () {
  // Get the guessed number from the input
  let guess = Number(guessInput.value);
  
  // Call the checkNumber function to validate the guess
  checkNumber(guess);
  
  // Play click sound
  audio2.play();
});

// Event listener to clear the input field on mouseover
guessInput.addEventListener("mouseover", function () {
  guessInput.value = "";
});

// Event listener for the "Again" button to reset the game
again.addEventListener("click", function () {
  // Play click sound and reload the page to start a new game
  audio2.play();
  location.reload();
});
