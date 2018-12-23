
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// get computer guess
var computerGuess = options[Math.floor(Math.random() * options.length)];

console.log("Comp guess " + computerGuess);
// get users guess
document.onkeyup = function () {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // decrese guesses left
  guessesLeft--
  console.log("User Guess: " + userGuess);



  if (computerGuess === userGuess) {
    wins++
    guessesLeft = 9
  }

  if (computerGuess != userGuess && guessesLeft === 0) {
    // Increase looses
    losses++
    guessesLeft = 9
  }

  // update guesses left count
  // display wins on screen
  // display losses on screen
  // display guess left on screen
  // display gussed lettersd on screen
  var html = "<p>press any key to continue</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Loses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Letters Gussed: " + userGuess + "</p>";

  document.querySelector("#game").innerHTML = html;

  console.log("Guesses left:  " + guessesLeft);
}


//console.log("wins: " + wins + " /Losses: " + losses + " /Guesses Left: " + guessesLeft);
