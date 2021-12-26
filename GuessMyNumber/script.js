'use strict';

let correctNum = 0;
let isEndGame = false;

//init Value
function initValue() {
  correctNum = Math.floor(Math.random() * 20) + 1;
  console.log(`correct : ${correctNum}`);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  document.getElementById('body').style.backgroundColor = 'black';
  isEndGame = false;
}

//load page
document.querySelector('#body').addEventListener('load', initValue());

//again
document.querySelector('.again').addEventListener('click', () => initValue());

const updateScore = msg => {
  document.querySelector('.message').textContent = msg;
  let numStr = document.querySelector('.score').textContent;
  let num = Number(numStr);
  if (num > 0) {
    num -= 1;
    document.querySelector('.score').textContent = num;
  } else {
    document.querySelector('.message').textContent = 'You lost the game!';
    isEndGame = true;
    document.getElementById('body').style.backgroundColor = 'red';
  }
};
//Clicked
document.querySelector('.check').addEventListener('click', () => {
  //logic when clicked
  if (isEndGame) return;
  let guessNumStr = document.querySelector('.guess').value;
  if (guessNumStr) {
    let guessNum = Number(guessNumStr);
    if (guessNum === correctNum) {
      isEndGame = true;
      console.log('guessNum === correctNum');
      document.querySelector('.number').textContent = correctNum;
      document.querySelector('.message').textContent = 'Correct Number!';
      document.getElementById('body').style.backgroundColor = 'green';
      let highScore = Number(document.querySelector('.highscore').textContent);
      let currentScore = Number(document.querySelector('.score').textContent);
      if (highScore < currentScore) {
        document.querySelector('.highscore').textContent = currentScore;
      }
    } else if (guessNum > correctNum) {
      updateScore('Too high!');
      console.log('uessNum > correctNum');
    } else if (guessNum < correctNum) {
      updateScore('Too low!');
      console.log('guessNum < correctNum');
    }
  } else {
    document.querySelector('.message').textContent = 'No Number!';
  }
});
