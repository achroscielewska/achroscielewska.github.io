const expense =  document.querySelector('#expense');
const value =  document.querySelector('#value');
const btnClear =  document.querySelector('#btn-clear');
const btnAdd =  document.querySelector('#btn-add');
const expensesList =  document.querySelector('#expenses-list');
const totalExpensesOutput =  document.querySelector('#total-expenses');
const alertController = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
    expense.value = '';
    value.value = '';
}

btnAdd.addEventListener('click', () => {
    const enteredExpense = expense.value;
    const enteredValue = value.value;

    if (
        enteredExpense.trim().length <= 0 || 
        enteredValue <= 0 ||
        enteredValue.trim().length <= 0
        ) {
            alertController.create({
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'This is an alert message.',
                buttons: ['OK']
            }).then(alertElement => {
                alertElement.present();
            });
            return;
        };

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredExpense + ': $' + enteredValue;

    expensesList.appendChild(newItem);
    totalExpenses += +enteredValue;

    totalExpensesOutput.textContent = '$' + totalExpenses;
    clear();
})

btnClear.addEventListener('click', clear);
