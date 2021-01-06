function test() {
    var x = document.getElementById('firstNumber').value;
    var y = document.getElementById('secondNumber').value;
    var div = x / y;
    var res = x % y;
    alert(div);
    alert('reste :' + ' ' + res);
};