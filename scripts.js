var mysteryNumber = mysteryNumber();
var userInput = document.getElementById('user-input');
var guess = document.getElementById('guess');
var clear = document.getElementById('clear');
var reset = document.getElementById('reset');
var resultsMsg = document.getElementById('results-msg');
var playerNumber = document.querySelector('h3');

console.log(mysteryNumber);

clear.addEventListener('click', function() {
  (userInput).value = '';
});

reset.addEventListener('click', function() {
  var mysteryNumber = Math.floor((Math.random() * 100) + 1);
  console.log(mysteryNumber);
  (userInput).value = '';
  playerNumber.innerText = '#';
});


guess.addEventListener('click', function() {
  var input = parseInt(userInput.value);
  playerNumber.innerText = input;
  (userInput).value = '';
  if (isNaN(userInput.value)) {
    return alert('Please guess a number');
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
    return resultsMsg.innerHTML = 'That is correct! Click Reset to play again.';
  }
});

function mysteryNumber() {
  return Math.floor((Math.random() * 100) + 1);
}
