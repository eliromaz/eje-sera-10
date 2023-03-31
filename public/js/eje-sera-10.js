
function suma(){
    var res = document.getElementById("res");
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var suma = n1 + n2;
    res.innerHTML = suma;
}

function resta(){
    var res = document.getElementById("res");
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var suma = n1 - n2;
    res.innerHTML = suma;
}

function multi(){
    var res = document.getElementById("res");
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var suma = n1 * n2;
    res.innerHTML = suma;
}

function div(){
    var res = document.getElementById("res");
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var suma = n1 / n2;
    res.innerHTML = suma;
}