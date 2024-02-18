"use strict";


// Images of dices
const dices = [
    '<img src="./images/dice_1.png">',
    '<img src="./images/dice_2.png">',
    '<img src="./images/dice_3.png">',
    '<img src="./images/dice_4.png">',
    '<img src="./images/dice_5.png">',
    '<img src="./images/dice_6.png">',
]

const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

const players = document.querySelectorAll(".player-1, .player-2");
const diceImage = document.querySelector(".dice--image");

const currScores = document.querySelectorAll(".dice--current--score");
const totalScores = document.querySelectorAll(".dice--score");

// Change active player
const changePlayer = function() {
    if (players[0].classList.contains("player--active")) {
        players[0].classList.remove("player--active");
        players[1].classList.add("player--active");
    } else {
        players[1].classList.remove("player--active");
        players[0].classList.add("player--active");
    }
}

// Find active player
const activePlayer = function() {
    if (players[0].classList.contains("player--active")) return 0;
    else return 1;
}

holdBtn.addEventListener("click", function() {
    const playerNum = activePlayer();
    totalScores[playerNum].textContent = +totalScores[playerNum].textContent + (+currScores[playerNum].textContent);
    currScores[playerNum].textContent = 0;
    changePlayer();
});


// Random number
const randomNumber = function() {
    return Math.trunc(Math.random() * 6);
}
rollBtn.addEventListener("click", function() {
    if (diceImage.classList.contains("hidden")) {
        diceImage.classList.remove("hidden");
    }
    const playerNum = activePlayer();
    const rnd = randomNumber() + 1;
    // console.log(playerNum, rnd + 1);
    diceImage.innerHTML = dices[rnd - 1];
    if (rnd == 1) {
        currScores[playerNum].textContent = '0';
        changePlayer();
    } else {
        currScores[playerNum].textContent = +currScores[playerNum].textContent + rnd;
    }
});

newBtn.addEventListener("click", function() {
    currScores.forEach((_, ind) => currScores[ind].textContent = 0);
    totalScores.forEach((_, ind) => totalScores[ind].textContent = 0);
    diceImage.classList.add("hidden");
});