  function startMe() {
      
    // Creates an array that lists out all of the computer's options, aka, the alphabet
    var computerChoices = ("abcdefghijklmnopqrstuvwxyz").split("");

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer chose: " + computerGuess);

    // Creating  and setting variables to hold the number of wins, losses. They start at 0. # of guesses at 9.
    // array to hold keys guessed
    var wins = 0;
    var losses = 0;
    var guess = 9;
    var keysGuessed = [];

    // Create variables that hold references to the places in the HTML where we want to display game stats.
    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessText = document.getElementById("guessLeft-text");
    var userGuessText = document.getElementById("userGuess-text");

    document.onkeyup = function (event) {

      var userGuess = event.key; // Determines which key was pressed.
      if(keysGuessed.includes(userGuess)) {
      return;
      }
      keysGuessed.push(userGuess); // add the user's guess to the array, unless already there

      // Determine outcome
      if (userGuess === computerGuess) { // user wins, do they want to play again?
          console.log("you won");
          wins++;
          var playAgain = prompt("You're PSYCHIC! Play again?");
          if (playAgain != null) { // subif
            startMe();
          } else {
            alert("OK, y'all come back now, ya hear?");
            keysGuessed = [];
            guess = "";
          } // end subif

      } else if ((userGuess !== computerGuess) && (guess > 0)) { // user guess is no match, but lives left
        guess--;
        console.log("elseif " + guess);
      } else { // no match, out of lives
        losses++;
        guess = 9;
        console.log("else " + guess);
        var newGame = prompt("Sorry! Out of guesses. Play again?");
          if (newGame != null) {
          console.log("startover " + newGame);
          startMe(); // starts game at the top
        } else {
          alert("Bye, bye! Thanks for playing!"); // clear out stats
          wins = 0;
          losses = 0;
          guess = 0;
          keysGuessed = [];
        } 
      } // end of outcome

      // Hide the directions
      directionsText.textContent = "";

      // Display the user and computer guesses, and wins/losses/remaining guesses.
      userChoiceText.textContent = "You chose: " + userGuess;
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;
      guessText.textContent = "Guesses left: " + guess; //reset when user guesses right or is wrong 9 times
      userGuessText.textContent = "Your guesses so far: " + keysGuessed // document.write(keysGuessed);
    } //end onkeyup 
  } // end function startMe

  