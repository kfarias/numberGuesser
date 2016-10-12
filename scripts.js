var mysteryNumber = generateNumber();
var userInput = document.getElementById('user-input');
var guess = document.getElementById('guess');
var clear = document.getElementById('clear');
var reset = document.getElementById('reset');
var resultsMsg = document.getElementById('results-msg');
var playerNumber = document.querySelector('h3');

console.log(mysteryNumber);

clear.addEventListener('click', function() {
  emptyInput();
});

reset.addEventListener('click', function() {
  resetGame();
});

userInput.addEventListener('keyup', function(){
  inputIsFilled();
});

guess.addEventListener('click', function() {
  checkGuess();
});

userInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13 && userInput.value !== '') {
    checkGuess();
  }
});

function generateNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

function disableEnter() {
  if (userInput === '') {

  }
}

function emptyInput() {
  (userInput).value = '';
}

function disableButtons() {
  clear.setAttribute('disabled', true);
  guess.setAttribute('disabled', true);
}

function resetGame() {
  mysteryNumber = generateNumber();
  emptyInput();
  userInput.focus();
  playerNumber.innerText = '#';
  resultsMsg.innerText = "Please make a guess above.";
  reset.setAttribute('disabled', true);
  return console.log(mysteryNumber);
}

function inputIsFilled() {
  var input = userInput.value;
  if (input !== ''){
    clear.removeAttribute('disabled');
    guess.removeAttribute('disabled');
  } else {
    disableButtons();
  }
}

function checkGuess() {
  var input = parseInt(userInput.value);
  playerNumber.innerText = input;
  emptyInput();
  reset.removeAttribute('disabled');
  disableButtons();
  userInput.focus();
  if (isNaN(input)) {
    playerNumber.innerText = '?';
    return resultsMsg.innerText = 'Please guess a number';
  }
  if ( input > 100 || input < 1) {
    return resultsMsg.innerText = 'Please guess between 1 - 100.';
  }
  if (input > mysteryNumber) {
    return resultsMsg.innerText = 'That is too high.';
  }
  if (input < mysteryNumber) {
    return resultsMsg.innerText = 'That is too low.';
  }
  else if (input === mysteryNumber) {
    userInput.blur();
    return resultsMsg.innerHTML = 'That is correct! Click Reset to play again.';
  }
}
