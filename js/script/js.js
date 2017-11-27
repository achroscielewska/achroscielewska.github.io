/**Ex 1**/
function evenOrOdd (evenOrOddInput) {
    evenOrOddInput = document.getElementById("evenOrOddInput").value;

    // if(!(Number.isInteger(evenOrOddInput))) {
    //    throw new Error (alert('Radius has to be bigger than 0'));
    //}

    return (evenOrOddInput % 2 === 0)
        ? document.getElementById("evenOrOddResult").innerHTML = 'even'
        : document.getElementById("evenOrOddResult").innerHTML = 'odd';
}