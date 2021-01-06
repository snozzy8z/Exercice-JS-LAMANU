var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit')
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Propositions précédentes : ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'bravo, vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = ' ';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!! PERDU !!!'
        setGameOver();
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop petit !';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop grand !';
        }
    }

    guessCount++;
    guessField.value = '';
    guessFiels.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}