alert("Veuillez entrer deux nombres à virgule");

function test() {
    var x = document.getElementById('firstNumber').value;
    var y = document.getElementById('secondNumber').value;
    var NbrEntier = Math.trunc(x);
    alert(NbrEntier * y);
}; 

var e = document.get