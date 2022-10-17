'use strict';

// Function to generate random secret number between 1-20
const randomNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

// Function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Checking the guessed number with secret number using event handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // When there is no input
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    // When player wins
    displayMessage('✅ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    // Check if current score is greater than highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    // When guess is wrong
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Resetting the game with Again button
document.querySelector('.again').addEventListener('click', function () {
  // Assigning new secret number
  secretNumber = randomNumber();
  // Score reset to 20 again
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
