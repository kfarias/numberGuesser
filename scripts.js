// var userInput=document.getElementById('#user-input');
// var guess=document.getElementById('#guess');
// var clear=document.getElementById('#clear');
//
// guess.addEventListener('click', function() {
//   // alert(userInput.value);
//   console.log('Hello');
// });
var mysteryNumber = mysteryNumber();

console.log(mysteryNumber);

function mysteryNumber() {
  return Math.floor((Math.random() * 100) + 1);
}
