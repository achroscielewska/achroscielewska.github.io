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

    let previous, next;
    previous = previousAndNextInput - 1;
    next = previousAndNextInput + 1;

    return document.getElementById("previous").innerHTML = previous,
        document.getElementById("next").innerHTML = next;
}

/**Ex 3 **/
function swapVariables (firstSwapInput, secondSwapInput) {
    firstSwapInput = document.getElementById("firstSwapInput").value;
    secondSwapInput = document.getElementById("secondSwapInput").value;

    let swap = firstSwapInput;
    let firstSwapInputResult = secondSwapInput;
    let secondSwapInputResult = swap;

    return document.getElementById("firstSwapInputResult").innerHTML = firstSwapInputResult,
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

    let HH = Math.floor(seconds / 3600);
    let MM = Math.floor((seconds - (HH * 3600)) / 60);
    let SS = seconds - (HH * 3600 + MM * 60);
    let time = addZero(HH) + ':' + addZero(MM) + ':' + addZero(SS);

    return document.getElementById("time").innerHTML = time;
}

/**Ex 6 **/
function areNumbersDescending (a, b, c, d, e) {
    a = document.getElementById("areNumbersDescendingFirst").value * 1;
    b = document.getElementById("areNumbersDescendingSecond").value * 1;
    c = document.getElementById("areNumbersDescendingThird").value * 1;
    d = document.getElementById("areNumbersDescendingFourth").value * 1;
    e = document.getElementById("areNumbersDescendingFifth").value * 1;

    isInteger (a);
    isInteger (b);
    isInteger (c);
    isInteger (d);
    isInteger (e);


    return document.getElementById("areNumbersDescendingResult").innerHTML = (a >= b && b >= c && c >= d && d >= e);
}

/**Ex 7 **/
function countDifernce (x, y) {
    return Math.abs(x - y)
}

function hasOneByOneDigit (x) {
    x = document.getElementById("hasOneByOneDigitInput").value * 1;
    isInteger (x);

    if (x < 100 || x > 999) {
        throw new Error(alert('Imput has to be a number between 100 and 999'));
    }

    let firsDigit = Math.floor(x / 100);
    let secondDigit = Math.floor((x - firsDigit * 100) / 10);
    let thirdDigit = (x - firsDigit * 100 - secondDigit * 10);
    let diferenceFistAndSecond = countDifernce(firsDigit, secondDigit);
    let diferenceSecondAndThird = countDifernce(secondDigit, thirdDigit);


    return (diferenceFistAndSecond !== 1 && diferenceSecondAndThird !== 1)
        ? document.getElementById("hasOneByOneDigitResult").innerHTML = false
        : document.getElementById("hasOneByOneDigitResult").innerHTML = true;
}
/**Ex 8 **/
function isLeapYear (year) {
    return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0))
        ? true
        : false;
}

function daysInMonth (month , year) {
    month = document.getElementById("daysInMonthMonth").value * 1;
    year = document.getElementById("daysInMonthYear").value * 1;

    isInteger (month);
    isInteger (year);

    switch (month) {
        case 2:
            if (isLeapYear(year)) {
                return document.getElementById("daysInMonthResult").innerHTML = 29
            }
            else {
                return document.getElementById("daysInMonthResult").innerHTML = 28;
            }
        case 4:
        case 6:
        case 9:
        case 11:
            return document.getElementById("daysInMonthResult").innerHTML = 30;
        default:
            return document.getElementById("daysInMonthResult").innerHTML = 31;
    }
}

/**Ex 9 **/
function splitName(nameToSplit) {
    nameToSplit = document.getElementById("splitNameInput").value;

    let space = nameToSplit.indexOf(' ');
    let firstName = nameToSplit.substr(0, space);
    let lastName = nameToSplit.substr(space + 1);

    return person = {
        firstName: document.getElementById("splitNameFirstName").innerHTML = firstName,
        lastName:  document.getElementById("splitNameSecondName").innerHTML = lastName,
    }
}