function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(diceRoll());
var player1 = diceRoll();
var player2 = diceRoll();

var dice1 = document.querySelector(".dice > .img1");
var dice2 = document.querySelector(".dice > .img2");
dice1.src = `./assets/images/dice${player1}.png`;
dice2.setAttribute("src", `./assets/images/dice${player2}.png`);
// OR -> dice2.src = `./assets/images/dice${player2}.png`;
var winningPlayer = document.querySelector("h1");

if (player1 > player2) {
  //winningPlayer.textContent = "Player 1 Wins!";
  winningPlayer.innerHTML =
    "<img src='./assets/images/red-flag.png' width='100px'/> Player 1 wins!";
} else if (player2 > player1) {
  winningPlayer.innerHTML =
    "Player 2 wins! <img src='./assets/images/red-flag.png' width='100px'/>";
} else {
  winningPlayer.textContent = "Draw!";
}
