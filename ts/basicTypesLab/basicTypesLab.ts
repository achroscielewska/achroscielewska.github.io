interface ElementSet {
    'div': Element,
    'button': Element
}

enum Colors {
    Green,
    Red,
    Blue,
    Orange
}

let squareSizeNum: number = 100;
let squareSize: string = `${squareSizeNum}px`
let elementSets: Array<ElementSet> = [];

let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class colorChange {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }

    changeColor(color: string | number): boolean {
        if (typeof (color) === "number") {
            return true;
        }
        (<HTMLElement>this.div).style.backgroundColor = color;
        return true;
    }
}

class numericColor extends colorChange {
    static Colors = Colors;
    constructor(div: Element) {
        super(div);
        (<HTMLElement>this.div).style.width = squareSize;
        (<HTMLElement>this.div).style.height = squareSize;
    }

    changeColor(color: number): boolean {
        (<HTMLElement>this.div).style.backgroundColor = Colors[color];
        return true;
    }
}

for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

elementSets.map((elem, index) => {
    let colorChangeClass = new numericColor(elem.div);

    elem.button.textContent = "Change Color";
    (<HTMLElement>elem.button).onclick = (e) => {
        colorChangeClass.changeColor(getRandomIntInclusive(0, 3));
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})







