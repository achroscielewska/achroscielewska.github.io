"use strict";
exports.__esModule = true;
var sqSizeNum = 100;
var sqSize = sqSizeNum + "px";
var borderSizeNum = 3;
var border = borderSizeNum + "px solid red";
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
exports.diceSetup = diceSetup;
