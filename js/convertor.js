"use strict";
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
document.getElementById("btnConvert").addEventListener('click', addFewSymbols);
//var btnConvert = document.getElementById("btnConvert");
//btnConvert!.addEventListener('click',addFewSymbols);
//# sourceMappingURL=convertor.js.map