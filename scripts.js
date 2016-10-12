var mysteryNumber = generateNumber();
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
  var mysteryNumber = generateNumber();
  console.log(mysteryNumber);
  (userInput).value = '';
  playerNumber.innerText = '#';
  resultsMsg.innerText = "Please make a guess above.";
  reset.setAttribute('disabled', true);
});
userInput.addEventListener('keyup', function(){
  var input = userInput.value;
  if (input !== ''){
    clear.removeAttribute('disabled');
  }
  else  {
  clear.setAttribute('disabled', true);
  }
});

guess.addEventListener('click', function() {
  // debugger;
  var input = parseInt(userInput.value);
  playerNumber.innerText = input;
  (userInput).value = '';
  reset.removeAttribute('disabled');
  clear.setAttribute('disabled', true);
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
    return resultsMsg.innerHTML = 'That is correct! Click Reset to play again.';
  }
});

function generateNumber() {
  return Math.floor((Math.random() * 100) + 1);
}
