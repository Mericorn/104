// random value generated
player_name = localStorage.getItem("player_name")
var y = Math.floor(Math.random() * 10 + 1);
var guess = 0;
// counting the number of guesses
// made for correct Guess
function submit() {
    var x = document.getElementById("guessField").value;
    if (x == y) {
        alert("CONGRATULATIONS," + player_name + " YOU GOT IT RIGHT IN " + guess + " GUESSES");
        guess = 1;
    }
    if (x > y) {
        guess++;
        alert("OOPS SORRY! TRY A SMALLER NUMBER");
    } else {
        guess++;
        alert("OOPS SORRY! TRY A GREATER NUMBER");
    }

    function playAgain() {
        y = Math.floor(Math.random() * 10 + 1);
    }
}


// function for number guessed by user     