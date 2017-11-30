/**Ex 1**/
function evenOrOdd (evenOrOddInput) {
    evenOrOddInput = document.getElementById("evenOrOddInput").value * 1;

    if(!(Number.isInteger(evenOrOddInput))) {
        throw new Error (alert('Imput has to be Integer'));
    }

    return (evenOrOddInput % 2 === 0)
        ? document.getElementById("evenOrOddResult").innerHTML = 'even'
        : document.getElementById("evenOrOddResult").innerHTML = 'odd';
}

/**Ex 2**/
function previousAndNext (previousAndNextInput) {
    previousAndNextInput = document.getElementById("previousAndNextInput").value * 1;

    if(!(Number.isInteger(previousAndNextInput))) {
        throw new Error (alert('Imput has to be Integer'));
    }

    var previous, next;
    previous = previousAndNextInput - 1;
    next = previousAndNextInput + 1;

    return document.getElementById("previous").innerHTML = previous,
        document.getElementById("previousAndNextInput").innerHTML = previousAndNextInput,
        document.getElementById("next").innerHTML = next;
}
