/** common **/

function isInteger (input) {
    if (!(Number.isInteger(input))) {
        throw new Error(alert('Imput has to be Integer'));
    }
}
/**Ex 1**/
function evenOrOdd (evenOrOddInput) {
    evenOrOddInput = document.getElementById("evenOrOddInput").value * 1;

    isInteger (evenOrOddInput);

    return (evenOrOddInput % 2 === 0)
        ? document.getElementById("evenOrOddResult").innerHTML = 'even'
        : document.getElementById("evenOrOddResult").innerHTML = 'odd';
}

/**Ex 2**/
function previousAndNext (previousAndNextInput) {
    previousAndNextInput = document.getElementById("previousAndNextInput").value * 1;

    isInteger (previousAndNextInput);

    var previous, next;
    previous = previousAndNextInput - 1;
    next = previousAndNextInput + 1;

    return document.getElementById("previous").innerHTML = previous,
        document.getElementById("previousAndNextInput").innerHTML = previousAndNextInput;
        document.getElementById("next").innerHTML = next;
}

/**Ex 3 **/
function swapVariables (firstSwapInput, secondSwapInput) {
    firstSwapInput = document.getElementById("firstSwapInput").value;
    secondSwapInput = document.getElementById("secondSwapInput").value;

    var swap = firstSwapInput;
    var firstSwapInputResult = secondSwapInput;
    var secondSwapInputResult = swap;

    return document.getElementById("firstSwapInputResult").innerHTML = firstSwapInputResult;
        document.getElementById("secondSwapInputResult").innerHTML = secondSwapInputResult;

}

/**Ex 4 **/
function minOfThreeNumbers (x, y, z) {
    x = document.getElementById("firstMinOfThree").value * 1;
    y = document.getElementById("secondMinOfThree").value * 1;
    z = document.getElementById("thirdMinOfThree").value * 1;

    isInteger (x);
    isInteger (y);
    isInteger (z);

    return (x < y && x < z)
        ? document.getElementById("minOfThreeResult").innerHTML = x
        : ((y < x && y < z)
            ? document.getElementById("minOfThreeResult").innerHTML = y
            : document.getElementById("minOfThreeResult").innerHTML = z);

}

/**Ex 5 **/
function addZero(x) {
    return (x < 10)
        ? x = '0' + x
        : x;
}

function secondsToHHMMSS (seconds) {
    seconds = document.getElementById("secondsToHHMMSStInput").value * 1;
    isInteger (seconds);

    var HH = Math.floor(seconds / 3600);
    var MM = Math.floor((seconds - (HH * 3600)) / 60);
    var SS = seconds - (HH * 3600 + MM * 60);
    var time = addZero(HH) + ':' + addZero(MM) + ':' + addZero(SS);

    return document.getElementById("time").innerHTML = time;
}