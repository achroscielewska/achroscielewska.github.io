let sqSizeNum: number = 100;
let sqSize: string = `${sqSizeNum}px`
let borderSizeNum: number = 3;
let border: string = `${borderSizeNum}px solid red`;


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
export { diceSetup };







