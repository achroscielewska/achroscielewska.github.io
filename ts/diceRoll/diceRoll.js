var Dice;
(function (Dice) {
    Dice[Dice["One"] = 0] = "One";
    Dice[Dice["Two"] = 1] = "Two";
    Dice[Dice["Three"] = 2] = "Three";
    Dice[Dice["Four"] = 3] = "Four";
    Dice[Dice["Five"] = 4] = "Five";
    Dice[Dice["Six"] = 5] = "Six";
    Dice[Dice["Seven"] = 6] = "Seven";
    Dice[Dice["Eight"] = 7] = "Eight";
    Dice[Dice["Nine"] = 8] = "Nine";
    Dice[Dice["Ten"] = 9] = "Ten";
    Dice[Dice["Eleven"] = 10] = "Eleven";
    Dice[Dice["Twelve"] = 11] = "Twelve";
})(Dice || (Dice = {}));
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var mainDiv = document.createElement('div');
mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "row";
document.body.appendChild(mainDiv);
var sqSizeNum = 100;
var sqSize = sqSizeNum + "px";
var borderSizeNum = 3;
var border = borderSizeNum + "px solid red";
var elements = [];
var diceSetup = /** @class */ (function () {
    function diceSetup(div) {
        this.div = div;
    }
    diceSetup.prototype.setDiceStyle = function () {
        this.div.style.width = sqSize;
        this.div.style.height = sqSize;
        this.div.style.border = border;
        this.div.style.margin = "2px";
    };
    diceSetup.prototype.setDiceValue = function (diceValue) {
        var diceContent = document.createElement('p');
        var diceText = document.createTextNode(diceValue);
        diceContent.appendChild(diceText);
        this.div.appendChild(diceContent);
    };
    return diceSetup;
}());
for (var index = 0; index < 5; index++) {
    elements.push({
        'div': document.createElement('div')
    });
}
elements.map(function (elem, index) {
    var dice = new diceSetup(elem.div);
    dice.setDiceStyle();
    mainDiv.appendChild(elem.div);
    dice.setDiceValue(Dice[getRandomInt(0, 11)]);
});
var changeBtn = document.createElement('button');
changeBtn.textContent = "Roll";
changeBtn.onclick = function (e) {
    elements.map(function (elem, index) {
        while (elem.div.firstChild) {
            elem.div.removeChild(elem.div.firstChild);
        }
        var dice = new diceSetup(elem.div);
        dice.setDiceValue(Dice[getRandomInt(0, 11)]);
    });
};
document.body.appendChild(changeBtn);
