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

    isInteger (evenOrOddInput);

    var previous, next;
    previous = previousAndNextInput - 1;
    next = previousAndNextInput + 1;

    return document.getElementById("previous").innerHTML = previous,
        document.getElementById("previousAndNextInput").innerHTML = previousAndNextInput,
        document.getElementById("next").innerHTML = next;
}

/**Ex 3 **/
function swapVariables (firstSwapInput, secondSwapInput) {
    firstSwapInput = document.getElementById("firstSwapInput").value;
    secondSwapInput = document.getElementById("secondSwapInput").value;

    var swap = firstSwapInput;
    var firstSwapInputResult = secondSwapInput;
    var secondSwapInputResult = swap;

    return document.getElementById("firstSwapInputResult").innerHTML = firstSwapInputResult,
        document.getElementById("secondSwapInputResult").innerHTML = secondSwapInputResult;

}