// Arvotaan satunnaisluku 1 ja 100 välillä
var randomNumber = Math.floor(Math.random() * 100) + 1;
// Alustetaan arvausten määrä 0:aan
var guesses = 0;

// Funktio joka tarkistaa käyttäjän arvauksen
function checkGuess() {
    // Haetaan käyttäjän arvaus syötekentästä
    var guess = document.getElementById("guess").value;
    // Vertaillaan käyttäjän arvausta oikeaan vastaukseen
    if (guess == randomNumber) {
        // Jos arvaus on oikein, näytetään onnitteluviesti ja arvausten määrä
        document.getElementById("message").innerHTML = "Congratulations! you guessed the number in" + guesses + " guesses.";
    }  else if (guess > randomNumber) {
        // Jos arvaus on liian suuri, pyydetään käyttäjää arvaamaan pienempää lukua.
        document.getElementById("message").innerHTML = "Too high! Try again.";
        // Kasvatetaan arvausten määrä yhdellä
        guesses++;
    } else if (guess < randomNumber) {
        //Jos arvaus on liian pieni, pyydetään käyttäjää arvaamaan suurempaa lukua.
        document.getElementById("message").innerHTML = "Too low! Try again.";
        guesses++;
    }

    document.getElementById("guess").value = "";
}