let randomNumber = parseInt(Math.random() * 100 + 1);
let submitBtn = document.querySelector(".submit");
let userInput = document.querySelector(".inputField");
let guessSlot = document.querySelector(".prev-result");
let remGuess = document.querySelector(".rem-result");
let startOver = document.querySelector(".result-container");
let lowOrHigh = document.querySelector(".loworhigh");
let endGameBtn = document.querySelector(".end-game");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter number");
  } else if (guess < 0) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your Guessed Right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your Guessed Number is too Low...`);
  } else if (guess > randomNumber) {
    displayMessage(`Your Guessed Number is too high...`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submitBtn.setAttribute("disabled", "");
  submitBtn.style.cursor = "not-allowed";
  endGameBtn.classList.add("add-btn");
  endGameBtn.innerHTML = `Start new Game.`;
  startOver.appendChild(endGameBtn);
  playGame = false;
  newGame();
}

function newGame() {
  // const newGameButton =
  endGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    submitBtn.removeAttribute("disabled");
    submitBtn.style.cursor = "pointer";
    startOver.removeChild(endGameBtn);
    playGame = true;
    displayMessage("");
  });
}