"use strict";
exports.__esModule = true;
var helpers_js_1 = require("./helpers/helpers.js");
var dictionaries_js_1 = require("./common/dictionaries.js");
var diceRoll_js_1 = require("./diceRoll/diceRoll.js");
var mainDiv = document.createElement('div');
mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "row";
document.body.appendChild(mainDiv);
var elements = [];
for (var index = 0; index < 5; index++) {
    elements.push({
        'div': document.createElement('div')
    });
}
elements.map(function (elem, index) {
    var dice = new diceRoll_js_1.diceSetup(elem.div);
    dice.setDiceStyle();
    mainDiv.appendChild(elem.div);
    dice.setDiceValue(dictionaries_js_1.Dice[helpers_js_1.getRandomInt(0, 11)]);
});
var changeBtn = document.createElement('button');
changeBtn.textContent = "Roll";
changeBtn.onclick = function (e) {
    elements.map(function (elem, index) {
        while (elem.div.firstChild) {
            elem.div.removeChild(elem.div.firstChild);
        }
        var dice = new diceRoll_js_1.diceSetup(elem.div);
        dice.setDiceValue(dictionaries_js_1.Dice[helpers_js_1.getRandomInt(0, 11)]);
    });
};
document.body.appendChild(changeBtn);
