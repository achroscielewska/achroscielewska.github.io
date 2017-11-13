function stringLenght(txt) {
    var txtln = txt.length;
    document.getElementById("stringLenght").innerHTML = txtln;
}
stringLenght("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

function firstOccurence(txt) {
    var pos = txt.indexOf("locate");
    document.getElementById("firstOccurrence").innerHTML = pos;
}
firstOccurence("Please locate where 'locate' occurs!");

function lastOccurrence(txt) {
    var pos = txt.lastIndexOf("locate");
    document.getElementById("lastOccurrence").innerHTML = pos;
}
lastOccurrence("Please locate where 'locate' occurs!");

function firstOccurrenceIndex(txt) {
    var pos = txt.indexOf("locate", 8);
    document.getElementById("firstOccurrenceIndex").innerHTML = pos;
}
firstOccurrenceIndex("Please locate where 'locate' occurs!");

function stringSearch(txt) {
    var pos = txt.search("locate");
    document.getElementById("stringSearch").innerHTML = pos;
}
stringSearch("Please locate where 'locate' occurs!");

function stringSlice(txt) {
    var pos = txt.slice(7,15);
    document.getElementById("stringSlice").innerHTML = pos;
}
stringSlice("Please locate where 'locate' occurs!");

function substringSlice(txt) {
    var pos = txt.substring(7,15);
    document.getElementById("substringSlice").innerHTML = pos;
}
substringSlice("Please locate where 'locate' occurs!");

function substrSlice(txt) {
    var pos = txt.substr(15,7);
    document.getElementById("substrSlice").innerHTML = pos;
}
substrSlice("Please locate where 'locate' occurs!");

function stringReplace(txt) {
    var pos = txt.replace('locate','abc');
    document.getElementById("stringReplace").innerHTML = pos;
}
stringReplace("Please locate where 'locate' occurs!");

function stringReplaceGlobal(txt) {
    var pos = txt.replace(/locate/g,'abc');
    document.getElementById("stringReplaceGlobal").innerHTML = pos;
}
stringReplaceGlobal("Please Locate locate where 'locate' occurs!");

function stringReplaceInsensitive (txt) {
    var pos = txt.replace(/locate/i,'abc');
    document.getElementById("stringReplaceInsensitive").innerHTML = pos;
}
stringReplaceInsensitive ("Please Locate locate where 'locate' occurs!");

function stringUpper (txt) {
    var pos = txt.toUpperCase();
    document.getElementById("stringUpper").innerHTML = pos;
}
stringUpper ("locate");

function stringLower (txt) {
    var pos = txt.toLowerCase();
    document.getElementById("stringLower").innerHTML = pos;
}
stringLower ("LOCATE");

function stringJoin (text1, text2) {
    var text1, text2, text3;
    text3 = text1.concat(" ", text2);
    document.getElementById("stringJoin").innerHTML = text3;
}
stringJoin ("Hello","World");

function characterIndex (text) {
    var char = text.charAt(0);
    document.getElementById("characterIndex").innerHTML = char;
}
characterIndex ("Hello");

function characterIndexUnicode (text) {
    var char = text.charCodeAt(0);
    document.getElementById("characterIndexUnicode").innerHTML = char;
}
characterIndexUnicode ("Hello");

function stringToArray (text) {
    var char = text.split("");
    document.getElementById("stringToArray").innerHTML = char;
}
stringToArray ("Hello");