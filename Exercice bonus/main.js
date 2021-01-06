var score = 0;

function plus() {
    score++;
    document.getElementById('compteur').innerHTML = score;
}

function moin() {
    score--;
    document.getElementById('compteur').innerHTML = score;
}