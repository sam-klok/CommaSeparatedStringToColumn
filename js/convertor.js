"use strict";
function SplitString(src) {
    var lines = src.split(",")
        // trim spaces
        .map(function (item) {
        return item.trim();
    })
        // remove empty strings
        .filter(function (el) {
        return el != null && el != "";
    })
        .join("\n,");
    //.join("<br>, ");   // we should not use BR.
    return lines;
}
function callSplitString() {
    var sourceText = document.getElementById('txtInput').value;
    document.getElementById('txtOutput').innerHTML = SplitString(sourceText);
}
document.getElementById("btnConvert").addEventListener('click', callSplitString);
// another test method, ignore it
function addFewSymbols() {
    var elementInput = document.getElementById('txtInput');
    if (elementInput) {
        //var txtInput = elementInput.innerText;
        var txtInput = elementInput.value;
        var newText = txtInput + " : modified text";
        document.getElementById('txtOutput').innerText = newText; // look at "!" sign 
    }
}
//# sourceMappingURL=convertor.js.map