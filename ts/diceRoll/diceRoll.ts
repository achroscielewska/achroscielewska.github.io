interface ElementSet {
    'div': Element,
    'button': Element
}

enum Dice {
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve
}

let getRandomInt: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let mainDiv: Element = document.createElement('div');
(<HTMLElement>mainDiv).style.display = "flex";
(<HTMLElement>mainDiv).style.flexDirection = "row";
document.body.appendChild(mainDiv);

let sqSizeNum: number = 100;
let sqSize: string = `${sqSizeNum}px`
let borderSizeNum: number = 3;
let border: string = `${borderSizeNum}px solid red`;

let elements = [];

class diceSetup {
    div: Element;

    constructor(div: Element) {
        this.div = div;
    }
    setDiceStyle() {
        (<HTMLElement>this.div).style.width = sqSize;
        (<HTMLElement>this.div).style.height = sqSize;
        (<HTMLElement>this.div).style.border = border;
        (<HTMLElement>this.div).style.margin = "2px";
    }

    setDiceValue(diceValue: string) {
        let diceContent: Element = document.createElement('p');
        let diceText = document.createTextNode(diceValue);

        diceContent.appendChild(diceText);
        this.div.appendChild(diceContent);
    }
}

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



