function mathRound (number) {
    var numberRound = Math.round(number);
    document.getElementById("mathRound").innerHTML = numberRound;
}
mathRound (3.3333);

function mathPow (x, y) {
    var mathPow = Math.pow(x, y);
    document.getElementById("mathPow").innerHTML = mathPow;
}
mathPow (3,3);

function mathSqrt (number) {
    var mathSqrt = Math.sqrt(number);
    document.getElementById("mathSqrt").innerHTML = mathSqrt;
}
mathSqrt (9);

function mathAbs (number) {
    var mathAbs = Math.abs(number);
    document.getElementById("mathAbs").innerHTML = mathAbs;
}
mathAbs (-9);

function mathCeil (number) {
    var mathCeil = Math.ceil(number);
    document.getElementById("mathCeil").innerHTML = mathCeil;
}
mathCeil (9.3);

function mathFloor (number) {
    var mathFloor = Math.floor(number);
    document.getElementById("mathFloor").innerHTML = mathFloor;
}
mathFloor (9.9);

function mathMin (x,y,z) {
    var mathMin = Math.min(x,y,z);
    document.getElementById("mathMin").innerHTML = mathMin;
}
mathMin (9,7,1);

function mathMax (x,y,z) {
    var mathMax = Math.max(x,y,z);
    document.getElementById("mathMax").innerHTML = mathMax;
}
mathMax (9,7,1);

function mathRandom () {
    var mathRandom = Math.random();
    document.getElementById("mathRandom").innerHTML = mathRandom;
}
mathRandom ();

function mathRandomInteger () {
    var mathRandomInteger = Math.floor(Math.random() * 10) + 1;
    document.getElementById("mathRandomInteger").innerHTML = mathRandomInteger;
}
mathRandomInteger ();

function mathRandomIntegerMinMax (min, max) {
    var mathRandomIntegerMinMax = Math.floor(Math.random() * (max - min+1) ) + min;
    document.getElementById("mathRandomIntegerMinMax").innerHTML = mathRandomIntegerMinMax;
}
mathRandomIntegerMinMax (1,3);