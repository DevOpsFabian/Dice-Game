const refresh = document.querySelector("h1");
refresh.addEventListener("click", würfeln);

function würfeln() {
  let zufallsZahl1 = Math.floor(Math.random() * 6) + 1;

  const dicePlayer1 = document.querySelector(".img1");

  const neueZahl1 = "./images/dice" + zufallsZahl1 + ".png";

  if (dicePlayer1) {
    dicePlayer1.setAttribute("src", neueZahl1);
  } else {
    console.error(
      "Fehler: Bild für Spieler 1 (Klasse 'img1') wurde nicht gefunden."
    );
  }

  let zufallesZahl2 = Math.floor(Math.random() * 6) + 1;

  const dicePlayer2 = document.querySelector(".img2");

  const neueZahl2 = "./images/dice" + zufallesZahl2 + ".png";

  if (dicePlayer2) {
    dicePlayer2.setAttribute("src", neueZahl2);
  } else {
    console.error(
      "Fehler: Bild für Spieler 1 (Klasse 'img1') wurde nicht gefunden."
    );
  }

  const winnerText = document.getElementById("winner-text");
  if (winnerText) {
    if (zufallsZahl1 > zufallesZahl2) {
      winnerText.textContent = "Player 1 wins!";
    } else if (zufallesZahl2 > zufallsZahl1) {
      winnerText.textContent = "Player 2 wins!";
    } else {
      winnerText.textContent = "Draw!";
    }
  }
}
