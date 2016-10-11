var mysteryNumber = mysteryNumber();
var userInput = document.getElementById('user-input');
var guess = document.getElementById('guess');
var clear = document.getElementById('clear');

console.log(mysteryNumber);

guess.addEventListener('click', function() {
  var input = parseInt(userInput.value);
  if (isNaN(userInput.value)) {
  return alert('Please guess a number');
  }
  if (input > mysteryNumber) {
  return alert('You have guessed too high');
  }
  if (input < mysteryNumber) {
    return alert('You have guessed too low');
  }
  if (input === mysteryNumber) {
  return alert('Correct!!');
  }
});

function mysteryNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

clear.addEventListener('click', function() {
  userInput.value = '';
});
