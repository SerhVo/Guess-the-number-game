"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

let secreNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreNumber);

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
const audio = new Audio(
  "audio/aplodismentyi-nebolshoy-gruppyi-lyudey-s-radostnyimi-krikami.mp3"
);
const audio2 = new Audio("audio/Mountain Audio - Menu Click.mp3");

function checkNumber(guess) {
  score--;
  scoreT.textContent = score;
  highscoreT.textContent = highscore;

  if (guess === secreNumber) {
    audio.play(),
      (document.body.style.background =
        "radial-gradient(farthest-corner at 13rem 15rem, rgba(240, 135, 10, 1) 5%, rgba(232, 151, 37, 1) 25%, rgba(170, 230, 5, 1) 50%, rgba(3, 236, 225, 1) 100%)");
    messegeEl.textContent = "Вы угадали число!";
    secretEl.textContent = secreNumber;
    check.disabled = true;
    highscoreT.textContent = score
  } else if (guess < secreNumber && score > 0) {
    messegeEl.textContent = "Вы ввели меньше загаданного числа.";
  } else if (guess > secreNumber && score > 0) {
    messegeEl.textContent = "Вы ввели больше загаданного числа.";
  } else {
    messegeEl.textContent = `Вы проиграли`;
    check.disabled = true;
    secretEl.textContent = secreNumber;
    document.body.style.background = "rgba(0, 0, 0, 1)";
  }
}
let guessInput = document.querySelector("input");
check.addEventListener("click", function () {
  let guess = Number(guessInput.value);
  checkNumber(guess);
  audio2.play();
});

guessInput.addEventListener("mouseover", function () {
  guessInput.value = "";
});

again.addEventListener("click", function () {
  audio2.play();
  location.reload();
});
