function test() {
    var shoeSize = document.getElementById('shoeSize').value;
    var yearOfBirth = document.getElementById('yearOfBirth').value;
    var res = ((((shoeSize * 2) + 5) * 50) - yearOfBirth) + 1766;
    alert(res);
};