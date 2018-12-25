
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var gussedLetters = [];
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = "";
// get computer guess
function getLetter () {
   computerGuess = options[Math.floor(Math.random() * options.length)];
}
getLetter()

// empty arary function
function empty() {
  gussedLetters = [];
}

// get users guess
document.onkeyup = function () {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // decrese guesses left
  guessesLeft--
  // push guesses to array
  gussedLetters.push(userGuess)
  // if guess matches
  if (computerGuess === userGuess) {
    wins++
    guessesLeft = 9
    empty()
    getLetter()
  }
  // if guesses do not match 
  if (computerGuess != userGuess && guessesLeft === 0) {
    // Increase looses
    losses++
    guessesLeft = 9
    empty()
    getLetter()
  }

  // update guesses left count
  // display wins on screen
  // display losses on screen
  // display guess left on screen
  // display gussed lettersd on screen
  var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Loses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Letters Gussed: " + gussedLetters + "</p>";

  document.querySelector("#game").innerHTML = html;

  // testing logs
  console.log("User Guess: " + userGuess);
  console.log("Comp guess " + computerGuess);
  console.log("Guesses left:  " + guessesLeft);
}


//console.log("wins: " + wins + " /Losses: " + losses + " /Guesses Left: " + guessesLeft);
