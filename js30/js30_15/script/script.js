const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const clearBtn = document.querySelector('#clearBtn');

function addItem(e) {
    e.preventDefault();

    const text = (this.querySelector('[name=item]')).value
    const item = {
        text,
        done: false
    };

    items.push(item);

    populatelist(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));

    this.reset();

    console.log(item);
}

function populatelist(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>

        `;
    }).join('');
}

function toggleDone(e) {
    if(!e.target.matches('input')) return; //skip this

    const el = e.target;
    console.log(el)
    const index = el.dataset.index;

    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items));
}

function clearList() {
    items.splice(0, items.length);
    populatelist(items, itemsList);

    localStorage.setItem('items', JSON.stringify(items));

}

window.onbeforeunload = function (e) {
    var message = "Your confirmation message goes here.",
    e = e || window.event;
    // For IE and Firefox
    if (e) {
      e.returnValue = message;
    }
  
    // For Safari
    return message;
  };

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearBtn.addEventListener('click', clearList);

populatelist(items, itemsList)