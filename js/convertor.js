function SplitString(src, separator) {
    src = src.replace(/\n|\r/g, ""); // remove all line breaks
    var lines = src.split(separator)
        // trim spaces
        .map(function (item) {
        return item.trim();
    })
        // remove empty strings
        .filter(function (el) {
        return el != null && el != "";
    })
        .join("\n " + separator + " ");
    //.join("<br>, ");   // we should not use BR.
    return lines;
}
;
function SplitStringBehind(src, separator) {
    src = src.replace(/\n|\r/g, ""); // remove all line breaks
    var parts = src.split(separator)
        // trim spaces
        .map(function (item) {
        return item.trim();
    })
        // remove empty strings
        .filter(function (el) {
        return el != null && el != "";
    });
    var lines = parts.map(function (item, index) {
        return item + (index < parts.length - 1 ? separator + " " : "");
    }).join("\n ");
    return lines;
}
;
// conversions 
function callSplitStringComma() {
    var sourceText = document.getElementById('txtInput').value;
    document.getElementById('txtOutput').innerHTML = SplitString(sourceText, ",");
}
function callSplitStringCommaBehind() {
    var sourceText = document.getElementById('txtInput').value;
    document.getElementById('txtOutput').innerHTML = SplitStringBehind(sourceText, ",");
}
function callSplitStringSemi() {
    var sourceText = document.getElementById('txtInput').value;
    document.getElementById('txtOutput').innerHTML = SplitString(sourceText, ";");
}
function callSplitStringOr() {
    var sourceText = document.getElementById('txtInput').value;
    document.getElementById('txtOutput').innerHTML = SplitString(sourceText, "||");
}
// seting test data
function setTestDataSemi() {
    document.getElementById('txtInput').innerHTML = "ID = id; Email = \nemail; Active = active; \nFirstName = firstName; LastName = \n lastName; Comment = comment;";
}
function setTestDataOr() {
    document.getElementById('txtInput').innerHTML = "ID = \nid || Email = email || \nActive = \nactive || FirstName = firstName || LastName = \nlastName || Comment = comment";
}
document.getElementById("btnSetTestSemi").addEventListener('click', setTestDataSemi);
document.getElementById("btnSetTestOr").addEventListener('click', setTestDataOr);
document.getElementById("btnConvertComma").addEventListener('click', callSplitStringComma);
document.getElementById("btnConvertCommaBehind").addEventListener('click', callSplitStringCommaBehind);
document.getElementById("btnConvertSemi").addEventListener('click', callSplitStringSemi);
document.getElementById("btnConvertOr").addEventListener('click', callSplitStringOr);
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
;
