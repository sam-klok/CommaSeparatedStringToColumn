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
        .join("\n, ");
    //.join("\r\n, ");
    //.join("<br>, ");
    return lines;
}
function callSplitString() {
    var sourceText = document.getElementById('txtInput').value;
    //(document.getElementById('txtOutput')! as HTMLTextAreaElement).innerText = SplitString(sourceText);
    document.getElementById('txtOutput').innerHTML = SplitString(sourceText);
    //document.getElementById('txtOutput')!.innerText = SplitString(sourceText);
}
document.getElementById("btnConvert").addEventListener('click', callSplitString);
//var btnConvert = document.getElementById("btnConvert");
//btnConvert!.addEventListener('click',addFewSymbols);
function addFewSymbols() {
    var elementInput = document.getElementById('txtInput');
    if (elementInput) {
        //var txtInput = elementInput.innerText;
        var txtInput = elementInput.value;
        var newText = txtInput + " : modified text";
        document.getElementById('txtOutput').innerText = newText; // look at "!" sign 
        // var outputElement = document.getElementById('txtOutput');
        // if (outputElement)
        // {
        //     outputElement.innerText = newText;
        // }
    }
}
//# sourceMappingURL=convertor.js.map