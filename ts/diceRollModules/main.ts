import { getRandomInt } from './helpers/helpers.js';
import { Dice } from './common/dictionaries.js'
import { diceSetup } from './diceRoll/diceRoll.js'

let mainDiv: Element = document.createElement('div');
(<HTMLElement>mainDiv).style.display = "flex";
(<HTMLElement>mainDiv).style.flexDirection = "row";
document.body.appendChild(mainDiv);

let elements = [];

for (let index: number = 0; index < 5; index++) {
    elements.push({
        'div': document.createElement('div')
    })
}

elements.map((elem, index) => {
    let dice = new diceSetup(elem.div);
    dice.setDiceStyle();
    mainDiv.appendChild(elem.div);

    dice.setDiceValue(Dice[getRandomInt(0, 11)]);
})

let changeBtn: Element = document.createElement('button');
changeBtn.textContent = "Roll";

(<HTMLElement>changeBtn).onclick = (e) => {
    elements.map((elem, index) => {
        while (elem.div.firstChild) {
            elem.div.removeChild(elem.div.firstChild);
        }
        let dice = new diceSetup(elem.div);

        dice.setDiceValue(Dice[getRandomInt(0, 11)]);
    })
}

document.body.appendChild(changeBtn);