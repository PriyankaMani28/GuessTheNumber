'use strict';

let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//On click event - check button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //IF NO NUMBER IS ENTERED
    if (!guess) {
        displayMessage("⛔ No number has entered!");

        //IF CORRECT NUMBER IS ENTERED
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = "15rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //IF GUESS IS DIFFERENT FROM THE REAL NUMBER
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "🔺 Too High!" : "🔻 Too Low!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("💣 You Lost the Game!");
            document.querySelector('.score').textContent = 0;
        }

        //IF GUESS IS HIGHER THAN THE REAL NUMBER
    }

})

//on click event - Play again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc((Math.random() * 20) + 1);

    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})