function mathRound (number) {
    var numberRound;

    // Get the value of the input field with id="numbToRound"
    number = document.getElementById("numbToRound").value;

    //
    numberRound = Math.round(number);
    document.getElementById("mathRound").innerHTML = numberRound;
}

function mathPow (x, y) {
    var mathPow;
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;

    mathPow = Math.pow(x, y);
    document.getElementById("mathPow").innerHTML = mathPow;
}

function mathSqrt (numbToSquare) {
    var mathSqrt;
    numbToSquare = document.getElementById("numbToSquare").value;

    mathSqrt = Math.sqrt(numbToSquare);
    document.getElementById("mathSqrt").innerHTML = mathSqrt;
}

function mathAbs (numbToSAbs) {
    var mathAbs;
    numbToSAbs = document.getElementById("numbToSAbs").value;

    mathAbs = Math.abs(numbToSAbs);
    document.getElementById("mathAbs").innerHTML = mathAbs;
}

function mathCeil (numbToCeil) {
    var mathCeil;
    numbToCeil = document.getElementById("numbToCeil").value;

    mathCeil = Math.ceil(numbToCeil);
    document.getElementById("mathCeil").innerHTML = mathCeil;
}

function mathFloor (numbToFloor) {
    var mathFloor;
    numbToFloor = document.getElementById("numbToFloor").value;

    mathFloor = Math.floor(numbToFloor);
    document.getElementById("mathFloor").innerHTML = mathFloor;
}

function mathMin (x,y,z) {
    var mathMin;
    x = document.getElementById("mathMinX").value;
    y = document.getElementById("mathMinY").value;
    z = document.getElementById("mathMinZ").value;

    mathMin = Math.min(x,y,z);
    document.getElementById("mathMin").innerHTML = mathMin;
}

function mathMax (x,y,z) {
    var mathMax;
    x = document.getElementById("mathMaxX").value;
    y = document.getElementById("mathMaxY").value;
    z = document.getElementById("mathMaxZ").value;

    mathMax = Math.max(x,y,z);
    document.getElementById("mathMax").innerHTML = mathMax;
}


function mathRandom () {
    var mathRandom = Math.random();
    document.getElementById("mathRandom").innerHTML = mathRandom;
}

function mathRandomInteger () {
    var mathRandomInteger = Math.floor(Math.random() * 10) + 1;
    document.getElementById("mathRandomInteger").innerHTML = mathRandomInteger;
}

function mathRandomIntegerMinMax (min, max) {
    var mathRandomIntegerMinMax;
    min = document.getElementById("randomMin").value;
    max = document.getElementById("randomMax").value;

    mathRandomIntegerMinMax = Math.floor(Math.random() * max) + min;
    document.getElementById("mathRandomIntegerMinMax").innerHTML = mathRandomIntegerMinMax;
}